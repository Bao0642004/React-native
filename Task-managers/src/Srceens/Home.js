import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as Notifications from "expo-notifications";
import moment from "moment";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { categories } from "../../data/Categories";
import { progress } from "../../data/Progress";
import { deleteTask } from "../Redux/TaskManager";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function Home() {
  const [fontsLoaded] = useFonts({
    Lobster: require("../../assets/fonts/Lobster-Regular.ttf"),
  });
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [filter, setFilter] = useState("Tất cả");
  const tasks = useSelector((state) => state.task.tasks);
  const t1 = categories;

  const getTodayNearestProgress = () => {
    const today = moment();
    if (progress.length === 0) return null;
    return [...progress].sort(
      (a, b) =>
        Math.abs(moment(a.date).diff(today)) -
        Math.abs(moment(b.date).diff(today))
    )[0];
  };
  const todayProgress = getTodayNearestProgress();

  // 🔔 Tạo thông báo nhắc việc
  useEffect(() => {
    const setupNotifications = async () => {
      try {
        await Notifications.cancelAllScheduledNotificationsAsync();
        const { status } = await Notifications.getPermissionsAsync();
        if (status !== "granted") {
          const { status: newStatus } =
            await Notifications.requestPermissionsAsync();
          if (newStatus !== "granted") return;
        }

        const now = moment();
        const todayStr = now.format("YYYY-MM-DD");

        for (const task of tasks) {
          const category = t1.find((c) => c.id === task.categoryId);
          if (!category) continue;

          let rawDate = task.startDate;
          if (!rawDate) continue;
          if (rawDate.includes("/"))
            rawDate = moment(rawDate, "DD/MM/YYYY").format("YYYY-MM-DD");

          if (rawDate !== todayStr) continue;

          const targetTime = moment(
            `${rawDate} ${task.time}`,
            "YYYY-MM-DD HH:mm"
          );
          if (!targetTime.isValid() || targetTime.isBefore(now)) continue;

          const type = category.name.toLowerCase();
          let remindBefore = 15;
          if (type.includes("cá nhân")) remindBefore = 30;
          else if (type.includes("công ty")) remindBefore = 60;
          else if (type.includes("học tập")) remindBefore = 45;

          const remindTime = targetTime
            .clone()
            .subtract(remindBefore, "minutes");
          if (remindTime.isBefore(now)) continue;

          await Notifications.scheduleNotificationAsync({
            content: {
              title: `Nhắc nhở: ${category.name}`,
              body: `${task.title} bắt đầu lúc ${task.time} (${remindBefore} phút nữa)`,
              sound: true,
            },
            trigger: { date: remindTime.toDate() },
          });

          const newItem = {
            title: `Nhắc nhở: ${category.name}`,
            body: `${task.title} bắt đầu lúc ${task.time}`,
            time: remindTime.toISOString(),
          };
          const existing = await AsyncStorage.getItem("notifications");
          const list = existing ? JSON.parse(existing) : [];
          list.push(newItem);
          await AsyncStorage.setItem("notifications", JSON.stringify(list));
        }
      } catch (err) {
        console.log("❌ Lỗi đặt thông báo:", err);
      }
    };

    setupNotifications();
  }, [tasks]);

  const filteredTasks =
    filter === "Tất cả"
      ? tasks
      : tasks.filter((task) => task.status === filter);

  if (!fontsLoaded) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#00BFFF" />
        <Text style={{ textAlign: "center", marginTop: 10 }}>
          Đang tải font...
        </Text>
      </SafeAreaView>
    );
  }

  const renderRightActions = (taskId) => (
    <TouchableOpacity
      style={styles.deleteButton}
      onPress={() => {
        Alert.alert("Xác nhận", "Bạn có chắc chắn muốn xoá công việc này?", [
          { text: "Huỷ", style: "cancel" },
          { text: "Xoá", onPress: () => dispatch(deleteTask({ id: taskId })) },
        ]);
      }}
    >
      <Ionicons name="trash-outline" size={24} color="#fff" />
      <Text style={{ color: "#fff", marginTop: 4 }}>Xoá</Text>
    </TouchableOpacity>
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ScrollView style={{ flex: 1 }}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={{ fontFamily: "Lobster", fontSize: 25 }}>
              Task Manager
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("NotificationsScreen")}
            >
              <Ionicons name="notifications" size={24} color="black" />
            </TouchableOpacity>
          </View>
          {/* Tóm tắt hôm nay */}
          <View style={styles.summaryCard}>
            <View style={{ padding: 10, marginBottom: 10, borderRadius: 6 }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 16, marginBottom: 4 }}
              >
                Tóm tắt hôm nay
              </Text>
              {todayProgress ? (
                <Text style={{ color: "#555" }}>
                  Tiến độ: {todayProgress.percent}% - {todayProgress.note}
                </Text>
              ) : (
                <Text style={{ color: "#999" }}>Chưa có tiến độ</Text>
              )}
            </View>

            <TouchableOpacity
              style={styles.addBtn}
              onPress={() => navigation.navigate("AddTask")}
            >
              <Ionicons name="add" size={22} color="#fff" />
            </TouchableOpacity>
          </View>

          <Text style={styles.sectionTitle}>Công việc sắp tới</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {tasks.map((task) => {
              const category = t1.find((c) => c.id === task.categoryId);
              return (
                <View key={task.id} style={styles.upcomingCard}>
                  <Text style={{ fontWeight: "bold" }}>{task.title}</Text>
                  <Text style={{ color: "#555", fontSize: 12 }}>
                    {task.details}
                  </Text>
                  {category && (
                    <Text style={{ fontSize: 12 }}>Loại: {category.name}</Text>
                  )}
                  <Text style={{ color: "#999", fontSize: 12 }}>
                    Trạng thái: {task.status}
                  </Text>
                </View>
              );
            })}
          </ScrollView>
          {/* Bộ lọc */}
          <Text style={styles.sectionTitle}>Danh sách công việc</Text>
          <View style={styles.filterRow}>
            {["Tất cả", "Chờ", "Đang làm", "Hoàn thành"].map((f) => (
              <TouchableOpacity
                key={f}
                style={[
                  styles.filterBtn,
                  filter === f && styles.filterBtnActive,
                ]}
                onPress={() => setFilter(f)}
              >
                <Text
                  style={{
                    color: filter === f ? "#fff" : "#333",
                    fontWeight: "600",
                  }}
                >
                  {f}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          {filteredTasks.map((task) => {
            const category = t1.find((c) => c.id === task.categoryId);
            return (
              <Swipeable
                key={task.id}
                renderRightActions={() => renderRightActions(task.id)}
              >
                <View style={styles.taskCard}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("TaskUpdate", { task })}
                  >
                    <View>
                      <Text style={{ fontWeight: "bold" }}>{task.title}</Text>
                      <Text style={{ color: "#666", fontSize: 15 }}>
                        {task.details}
                      </Text>

                      <View style={styles.dateRow}>
                        <Text style={styles.dateText}>{task.startDate}</Text>
                        <MaterialCommunityIcons
                          name="arrow-right-thin"
                          size={22}
                          color="black"
                          style={styles.dateIcon}
                        />
                        <Text style={styles.dateText}>{task.endDate}</Text>
                      </View>

                      <Text>Giờ: {task.time}</Text>
                      <Text style={styles.expectedText}>
                        Yêu cầu: {task.expectedResult}
                      </Text>

                      {category && (
                        <Text style={{ marginTop: 4, fontSize: 14 }}>
                          Loại công việc: {category.name}
                        </Text>
                      )}
                    </View>
                  </TouchableOpacity>

                  <View style={styles.statusRow}>
                    <View
                      style={[
                        styles.statusDot,
                        task.status === "Chờ"
                          ? { backgroundColor: "red" }
                          : task.status === "Đang làm"
                          ? { backgroundColor: "orange" }
                          : { backgroundColor: "green" },
                      ]}
                    />
                    <Text style={{ marginLeft: 4, color: "#999" }}>
                      {task.status}
                    </Text>
                  </View>
                </View>
              </Swipeable>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  summaryCard: {
    backgroundColor: "#b3e0ff",
    margin: 16,
    borderRadius: 12,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addBtn: { backgroundColor: "#00BFFF", borderRadius: 20, padding: 6 },
  sectionTitle: {
    marginLeft: 16,
    marginTop: 8,
    fontWeight: "bold",
    fontSize: 16,
  },
  filterRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 12,
  },
  filterBtn: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: "#eee",
  },
  filterBtnActive: { backgroundColor: "#00BFFF" },
  taskCard: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginVertical: 6,
    padding: 16,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  statusRow: { flexDirection: "row", alignItems: "center", marginTop: 4 },
  statusDot: { width: 10, height: 10, borderRadius: 5 },
  dateRow: { flexDirection: "row", alignItems: "center", marginTop: 5 },
  dateText: { fontSize: 14, color: "#333" },
  dateIcon: { marginHorizontal: 6 },
  expectedText: { fontSize: 15, color: "#555", marginTop: 4 },
  deleteButton: {
    width: 70,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff1744",
    borderRadius: 10,
  },
  addBtn: { backgroundColor: "#00BFFF", borderRadius: 20, padding: 6 },
  sectionTitle: {
    marginLeft: 16,
    marginTop: 8,
    fontWeight: "bold",
    fontSize: 16,
  },
  upcomingCard: {
    backgroundColor: "#fff",
    margin: 10,
    padding: 12,
    borderRadius: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    width: 170,
    height: 110,
  },
  filterRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 12,
  },
  filterBtn: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: "#eee",
  },
  filterBtnActive: { backgroundColor: "#00BFFF" },
  taskCard: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginVertical: 6,
    padding: 16,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
});

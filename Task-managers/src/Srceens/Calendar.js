import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import { useMemo, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CalendarList } from "react-native-calendars";
import { useSelector } from "react-redux";

const CalendarAll = () => {
  const navigation = useNavigation();
  const tasks = useSelector((state) => state.task.tasks); // ✅ Lấy task từ Redux

  const [viewMode, setViewMode] = useState("month"); // day | week | month
  const [selectedDate, setSelectedDate] = useState(
    moment().format("YYYY-MM-DD")
  );
  const [currentWeekStart, setCurrentWeekStart] = useState(
    moment().startOf("isoWeek") // bắt đầu từ thứ 2
  );

  // Gán màu theo categoryId
  const getCategoryColor = (id) => {
    switch (id) {
      case 1:
        return "#ffbf00"; // Cá nhân
      case 2:
        return "#40ff00"; // Công việc
      case 3:
        return "#ff4000"; // Học tập
      default:
        return "#DEDEDE"; // Khác
    }
  };

  const getCategoryLabel = (id) => {
    switch (id) {
      case 1:
        return "Cá nhân";
      case 2:
        return "Công việc";
      case 3:
        return "Học tập";
      default:
        return "Khác";
    }
  };

  // Ngày có task (hiện chấm tròn)
  const markedDates = tasks.reduce((acc, t) => {
    acc[t.startDate] = {
      marked: true,
      dotColor: getCategoryColor(t.categoryId),
      ...(t.startDate === selectedDate && {
        selected: true,
        selectedColor: "#00BFFF",
      }),
    };
    return acc;
  }, {});

  // Danh sách 7 ngày của tuần hiện tại
  const weekDays = Array.from({ length: 7 }).map((_, i) =>
    currentWeekStart.clone().add(i, "days")
  );

  // Lọc task theo chế độ xem
  const filteredTasks = useMemo(() => {
    if (viewMode === "day") {
      return tasks.filter((t) =>
        moment(selectedDate).isBetween(t.startDate, t.endDate, null, "[]")
      );
    } else if (viewMode === "week") {
      return tasks.filter(
        (t) =>
          moment(t.startDate).isBetween(
            currentWeekStart,
            currentWeekStart.clone().add(6, "days"),
            null,
            "[]"
          ) ||
          moment(t.endDate).isBetween(
            currentWeekStart,
            currentWeekStart.clone().add(6, "days"),
            null,
            "[]"
          )
      );
    } else {
      // month
      return tasks.filter((t) =>
        moment(t.startDate).isSame(selectedDate, "month")
      );
    }
  }, [tasks, viewMode, selectedDate, currentWeekStart]);

  // ✅ Nhóm công việc theo ngày + sắp theo giờ
  const groupedTasks = useMemo(() => {
    const groups = {};
    filteredTasks.forEach((task) => {
      const date = task.startDate;
      if (!groups[date]) groups[date] = [];
      groups[date].push(task);
    });

    // Sắp xếp trong mỗi ngày theo giờ tăng dần
    Object.keys(groups).forEach((date) => {
      groups[date].sort((a, b) => {
        const timeA = moment(a.time, "HH:mm");
        const timeB = moment(b.time, "HH:mm");
        return timeA - timeB;
      });
    });

    // Sắp xếp ngày tăng dần
    const sortedDates = Object.keys(groups).sort(
      (a, b) => new Date(a) - new Date(b)
    );

    return sortedDates.map((date) => ({
      date,
      tasks: groups[date],
    }));
  }, [filteredTasks]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Chế độ xem */}
      <View style={styles.buttonRow}>
        {["day", "week", "month"].map((mode) => (
          <TouchableOpacity
            key={mode}
            style={[
              styles.buttonMode,
              viewMode === mode && styles.activeButton,
            ]}
            onPress={() => setViewMode(mode)}
          >
            <Text
              style={viewMode === mode ? styles.activeText : styles.buttonText}
            >
              {mode === "day" ? "Ngày" : mode === "week" ? "Tuần" : "Tháng"}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Hiển thị lịch */}
      {viewMode === "month" ? (
        <CalendarList
          current={selectedDate}
          onDayPress={(day) => setSelectedDate(day.dateString)}
          pastScrollRange={12}
          futureScrollRange={12}
          horizontal
          pagingEnabled
          markedDates={{
            ...markedDates,
            [selectedDate]: {
              ...(markedDates[selectedDate] || {}),
              selected: true,
              selectedColor: "#00BFFF",
            },
          }}
          theme={{
            todayTextColor: "#00BFFF",
            arrowColor: "#00BFFF",
          }}
        />
      ) : viewMode === "week" ? (
        <View>
          {/* Điều hướng tuần */}
          <View style={styles.navRow}>
            <TouchableOpacity
              onPress={() =>
                setCurrentWeekStart(
                  currentWeekStart.clone().subtract(7, "days")
                )
              }
            >
              <Ionicons name="chevron-back" size={24} color="#00BFFF" />
            </TouchableOpacity>
            <Text style={{ fontWeight: "bold" }}>
              {currentWeekStart.format("DD/MM")} -{" "}
              {currentWeekStart.clone().add(6, "days").format("DD/MM")}
            </Text>
            <TouchableOpacity
              onPress={() =>
                setCurrentWeekStart(currentWeekStart.clone().add(7, "days"))
              }
            >
              <Ionicons name="chevron-forward" size={24} color="#00BFFF" />
            </TouchableOpacity>
          </View>

          {/* Ngày trong tuần */}
          <View style={styles.weekRow}>
            {weekDays.map((day) => {
              const dateStr = day.format("YYYY-MM-DD");
              const hasTask = tasks.some((t) =>
                moment(dateStr).isBetween(t.startDate, t.endDate, null, "[]")
              );

              return (
                <TouchableOpacity
                  key={dateStr}
                  style={[
                    styles.dayBox,
                    selectedDate === dateStr && styles.activeDay,
                  ]}
                  onPress={() => setSelectedDate(dateStr)}
                >
                  <Text>{day.format("DD")}</Text>
                  <Text style={{ fontSize: 10 }}>{day.format("dd")}</Text>
                  {hasTask && <Text style={styles.dot}>●</Text>}
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      ) : (
        <Text style={{ textAlign: "center", marginBottom: 10 }}>
          {moment(selectedDate).format("DD/MM/YYYY")}
        </Text>
      )}

      {/* Danh sách công việc */}
      <Text style={styles.title}>Công việc</Text>
      <FlatList
        data={groupedTasks}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => (
          <View>
            {/* Hiển thị ngày 1 lần */}
            <Text style={styles.time}>{moment(item.date).format("DD/MM")}</Text>

            {item.tasks.map((task) => (
              <View key={task.id} style={styles.taskItem}>
                <View
                  style={{
                    width: 10,
                    backgroundColor: getCategoryColor(task.categoryId),
                    height: 80,
                  }}
                />
                <View style={{ paddingLeft: 8 }}>
                  <Text style={styles.taskTitle}>{task.title}</Text>
                  <Text>{task.details}</Text>
                  <Text>Giờ: {task.time}</Text>
                  <Text>
                    Kết thúc: {moment(task.endDate).format("DD/MM/YYYY")}
                  </Text>
                  {task.expectedResult && (
                    <Text style={{ fontStyle: "italic" }}>
                      Yêu cầu: {task.expectedResult}
                    </Text>
                  )}
                </View>
              </View>
            ))}
          </View>
        )}
        ListEmptyComponent={
          <Text style={{ padding: 16, color: "#777" }}>Không có công việc</Text>
        }
      />

      {/* Chú thích màu */}
      <View
        style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 10 }}
      >
        {[1, 2, 3, 4].map((id) => (
          <View
            key={id}
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 30,
              }}
            >
              <View
                style={{
                  width: 18,
                  height: 18,
                  backgroundColor: getCategoryColor(id),
                  marginRight: 6,
                  borderRadius: 3,
                }}
              />
              <Text style={{ fontSize: 14 }}>{getCategoryLabel(id)}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Nút thêm */}
      <TouchableOpacity
        onPress={() => navigation.navigate("AddTask")}
        style={styles.addButton}
      >
        <Ionicons name="add" size={40} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CalendarAll;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 10 },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
    gap: 10,
  },
  buttonMode: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#00BFFF",
    borderRadius: 6,
  },
  activeButton: { backgroundColor: "#00BFFF" },
  buttonText: { color: "#00BFFF", fontWeight: "bold" },
  activeText: { color: "#fff", fontWeight: "bold" },
  navRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    paddingHorizontal: 10,
  },
  weekRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  dayBox: {
    flex: 1,
    alignItems: "center",
    padding: 6,
    borderRadius: 6,
  },
  activeDay: { backgroundColor: "#87CEFA" },
  dot: { fontSize: 12, color: "#00BFFF", marginTop: 2 },
  title: { fontSize: 16, fontWeight: "bold", margin: 10 },
  taskItem: {
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 0.5,
    borderColor: "#ccc",
    flexDirection: "row",
    gap: 10,
  },
  time: {
    backgroundColor: "#00BFFF",
    color: "#fff",
    fontWeight: "600",
    marginRight: 8,
    width: 80,
    height: 30,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 16,
    borderRadius: 6,
  },
  taskTitle: { fontSize: 18, fontWeight: "bold" },
  addButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#00BFFF",
    position: "absolute",
    right: 30,
    bottom: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
});

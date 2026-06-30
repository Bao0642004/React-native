import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import * as Notifications from "expo-notifications";
import moment from "moment";
import { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const NotificationItem = ({ icon, text, subText }) => (
  <View style={styles.itemCard}>
    <Ionicons name={icon} size={22} color="#00BFFF" />
    <View style={{ flex: 1 }}>
      <Text style={styles.itemText}>{text}</Text>
      {subText && <Text style={styles.itemSubText}>{subText}</Text>}
    </View>
  </View>
);

const NotificationsScreen = () => {
  const navigation = useNavigation();
  const [scheduled, setScheduled] = useState([]);

  const loadScheduledNotifications = async () => {
    try {
      const all = await Notifications.getAllScheduledNotificationsAsync();
      const saved = await AsyncStorage.getItem("notifications");
      const savedList = saved ? JSON.parse(saved) : [];

      const merged = [
        ...savedList.map((item) => ({
          title: item.title,
          body: item.body,
          time: item.time,
        })),
        ...all.map((n) => ({
          title: n.content.title,
          body: n.content.body,
          time: n.trigger?.value || null,
        })),
      ];

      setScheduled(merged.reverse());
    } catch (err) {
      console.log("❌ Lỗi lấy thông báo:", err);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener(
      "focus",
      loadScheduledNotifications
    );

    const receiveSub = Notifications.addNotificationReceivedListener(() => {
      loadScheduledNotifications();
    });

    const responseSub = Notifications.addNotificationResponseReceivedListener(
      () => {
        loadScheduledNotifications();
      }
    );

    return () => {
      unsubscribe();
      receiveSub.remove();
      responseSub.remove();
    };
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Thông báo</Text>
      </View>

      <ScrollView style={{ flex: 1 }}>
        {scheduled.length > 0 ? (
          scheduled.map((item, index) => (
            <NotificationItem
              key={index}
              icon="notifications-outline"
              text={item.title || "Thông báo"}
              subText={`${item.body || ""}\n ${
                item.time
                  ? moment(item.time).format("HH:mm DD/MM/YYYY")
                  : "Không xác định"
              }`}
            />
          ))
        ) : (
          <Text
            style={{
              textAlign: "center",
              color: "#555",
              marginTop: 20,
              fontStyle: "italic",
            }}
          >
            Hiện chưa có nhắc nhở nào được đặt
          </Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#77BEF0" },
  header: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    gap: 10,
  },
  backBtn: { padding: 8, borderRadius: 20, backgroundColor: "#f2f2f2" },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
  },
  itemCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginVertical: 6,
    padding: 14,
    borderRadius: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    gap: 12,
  },
  itemText: { fontSize: 16, fontWeight: "500", color: "#333" },
  itemSubText: { fontSize: 13, color: "#555", marginTop: 4 },
});

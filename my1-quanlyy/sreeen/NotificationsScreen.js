import React, { useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import * as Notifications from "expo-notifications";
import { markNotificationsRead } from "../Redux/CartReducer";

const NotificationsScreen = () => {
  const dispatch = useDispatch();
  const currentOrder = useSelector((state) => state.cart.currentOrder);
  const step = currentOrder?.step ?? 0;

  // mapping trạng thái
  const stepMessages = {
    1: [
      { icon: "checkmark-circle", text: "Đơn hàng đã được xác nhận!" },
      { icon: "fast-food-outline", text: "Bếp đang chuẩn bị đơn hàng." },
    ],
    2: [
      { icon: "checkmark-circle", text: "Đơn hàng đã được xác nhận!" },
      { icon: "fast-food-outline", text: "Bếp đang chuẩn bị đơn hàng." },
      { icon: "bicycle", text: "Shipper đã lấy hàng và đang giao đến bạn." },
    ],
    3: [
      { icon: "checkmark-circle", text: "Đơn hàng đã được xác nhận!" },
      { icon: "fast-food-outline", text: "Bếp đang chuẩn bị đơn hàng." },
      { icon: "bicycle", text: "Shipper đã lấy hàng và đang giao đến bạn." },
      { icon: "home-outline", text: "Shipper đã giao đơn hàng thành công!" },
    ],
  };

  // 🔔 Hiện thông báo khi có order mới
  useEffect(() => {
    if (step > 0) {
      const latestMessage = stepMessages[step]?.slice(-1)[0]?.text;
      if (latestMessage) {
        Notifications.scheduleNotificationAsync({
          content: {
            title: "Cập nhật đơn hàng",
            body: latestMessage,
          },
          trigger: null, // hiện ngay
        });
      }
      dispatch(markNotificationsRead());
    }
  }, [step]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Thông báo đơn hàng</Text>
      {!currentOrder ? (
        <View style={styles.empty}>
          <Text style={styles.emptyText}>Chưa có đơn hàng nào</Text>
        </View>
      ) : (
        (stepMessages[step] || []).map((msg, i) => (
          <View key={i} style={styles.row}>
            <Ionicons
              name={msg.icon}
              size={26}
              color="#00AB77"
              style={styles.icon}
            />
            <Text style={styles.text}>{msg.text}</Text>
          </View>
        ))
      )}
    </SafeAreaView>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  row: { flexDirection: "row", alignItems: "center", marginBottom: 15 },
  icon: { marginRight: 10 },
  text: { fontSize: 16, color: "#333" },
  empty: { flex: 1, justifyContent: "center", alignItems: "center" },
  emptyText: { fontSize: 18, color: "#666" },
});

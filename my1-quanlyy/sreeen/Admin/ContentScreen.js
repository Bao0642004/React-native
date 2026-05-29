import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  markNotificationsRead,
  setOrderStep,
  clearCurrentOrder,
} from "../../Redux/CartReducer";

const ContextScreen = () => {
  const dispatch = useDispatch();
  const { Hoadon, currentOrder, unreadNotifications } = useSelector(
    (state) => state.cart
  );

  // updateStep: chỉ cho phép tăng step, không quay lùi
  const updateStep = (step) => {
    if (currentOrder && currentOrder.step < step) {
      dispatch(setOrderStep(step));
    }
  };

  const renderOrder = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>Đơn hàng #{item.id}</Text>
      <Text>
        Ngày: {item.ngaygio.day}/{item.ngaygio.month}/{item.ngaygio.year}
      </Text>
      <Text>Tổng tiền: {item.total}k</Text>
      <Text>Địa chỉ: {item.address || "Chưa có"}</Text>
      <Text style={styles.status}>
        Trạng thái:{" "}
        {item.step === 0
          ? "⏳ Chờ xác nhận"
          : item.step === 1
          ? "✅ Đã xác nhận"
          : item.step === 2
          ? "🚴 Đang giao"
          : "📦 Hoàn tất"}
      </Text>

      <View style={styles.row}>
        <TouchableOpacity style={styles.btn} onPress={() => updateStep(1)}>
          <Text style={styles.btnText}>Xác nhận</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btn, { backgroundColor: "#2196F3" }]}
          onPress={() => updateStep(2)}
        >
          <Text style={styles.btnText}>Đang giao</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btn, { backgroundColor: "#9C27B0" }]}
          onPress={() => updateStep(3)}
        >
          <Text style={styles.btnText}>Hoàn tất</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}> Quản lý đơn hàng</Text>
        <TouchableOpacity onPress={() => dispatch(markNotificationsRead())}>
          <Ionicons name="notifications-outline" size={28} color="#fff" />
          {unreadNotifications > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{unreadNotifications}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      {/* Nội dung */}
      {Hoadon.length === 0 ? (
        <Text style={styles.noData}>Chưa có đơn hàng nào</Text>
      ) : (
        <FlatList
          data={Hoadon}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderOrder}
          contentContainerStyle={{ padding: 10 }}
        />
      )}

      {currentOrder && (
        <TouchableOpacity
          style={styles.resetBtn}
          onPress={() => dispatch(clearCurrentOrder())}
        >
          <Text style={styles.resetText}> Xóa trạng thái đơn hàng</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export default ContextScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f4f4f4" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    alignItems: "center",
  },
  headerText: { fontSize: 18, fontWeight: "bold" },
  badge: {
    position: "absolute",
    right: -6,
    top: -6,
    backgroundColor: "red",
    borderRadius: 10,
    paddingHorizontal: 6,
  },
  badgeText: { color: "#fff", fontSize: 12, fontWeight: "bold" },
  noData: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 16,
    color: "#666",
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginVertical: 6,
    elevation: 2,
  },
  title: { fontWeight: "bold", fontSize: 16, marginBottom: 6 },
  status: { marginTop: 6, fontWeight: "600", color: "#333" },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  btn: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 4,
    alignItems: "center",
  },
  btnText: { color: "#fff", fontWeight: "bold" },
  resetBtn: {
    backgroundColor: "#f44336",
    padding: 14,
    margin: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  resetText: { color: "#fff", fontWeight: "bold" },
});

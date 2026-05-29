import React from "react";
import {
  Alert,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Ionicons from "@expo/vector-icons/Ionicons";

// Action xoá đơn
const removeInvoice = (id) => ({
  type: "REMOVE_HOADON",
  payload: id,
});

const OrderScreen = ({ setIsLoggedIn }) => {
  const dispatch = useDispatch();
  const Hoadon = useSelector((state) => state.cart.Hoadon);

  // Đăng xuất
  const handleLogout = () => {
    Alert.alert("Đăng xuất", "Bạn có chắc muốn đăng xuất?", [
      { text: "Hủy", style: "cancel" },
      {
        text: "Đăng xuất",
        style: "destructive",
        onPress: () => setIsLoggedIn(false),
      },
    ]);
  };

  // Xóa đơn
  const handleDelete = (id) => {
    Alert.alert("Xác nhận", "Bạn có chắc muốn xóa đơn hàng này?", [
      { text: "Hủy", style: "cancel" },
      {
        text: "Xóa",
        style: "destructive",
        onPress: () => dispatch(removeInvoice(id)),
      },
    ]);
  };

  // Xác nhận đơn
  const handleConfirm = (item) => {
    Alert.alert(" Thành công", `Đơn hàng #${item.id} đã được xác nhận.`);
  };

  // Render từng đơn hàng
  const renderOrder = ({ item }) => (
    <View style={styles.orderCard}>
      <View style={styles.rowBetween}>
        <Text style={styles.orderId}> Đơn hàng #{item.id}</Text>
        <TouchableOpacity onPress={() => handleDelete(item.id)}>
          <Ionicons name="trash-outline" size={24} color="#f44336" />
        </TouchableOpacity>
      </View>

      <Text style={styles.orderText}>
        Ngày: {item.ngaygio.day}/{item.ngaygio.month}/{item.ngaygio.year}
      </Text>
      <Text style={styles.orderText}>Tổng tiền: {item.total}₫</Text>
      <Text style={styles.statusText}>
        Trạng thái: {item.step === 0 ? " Chờ xử lý" : " Đã xác nhận"}
      </Text>

      {item.step === 0 && (
        <TouchableOpacity
          style={styles.confirmBtn}
          onPress={() => handleConfirm(item)}
        >
          <Text style={styles.confirmText}>Xác nhận đơn hàng</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}> Quản lý Đơn hàng</Text>
      </View>

      {Hoadon.length === 0 ? (
        <Text style={styles.noOrder}> Chưa có đơn hàng nào</Text>
      ) : (
        <FlatList
          data={Hoadon}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderOrder}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
    </SafeAreaView>
  );
};

export default OrderScreen;

const styles = {
  container: { flex: 1, backgroundColor: "#f9f9f9", padding: 16 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  headerTitle: { fontSize: 22, fontWeight: "bold", color: "#333" },
  noOrder: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 16,
    color: "#888",
    fontStyle: "italic",
  },
  orderCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  rowBetween: { flexDirection: "row", justifyContent: "space-between" },
  orderId: { fontSize: 16, fontWeight: "bold", marginBottom: 6 },
  orderText: { fontSize: 14, color: "#444" },
  statusText: { fontSize: 14, fontStyle: "italic", marginTop: 4 },
  confirmBtn: {
    marginTop: 10,
    backgroundColor: "#4caf50",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  confirmText: { color: "#fff", fontWeight: "bold" },
};

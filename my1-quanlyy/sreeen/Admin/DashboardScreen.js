import React from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import { useSelector } from "react-redux";
import Ionicons from "@expo/vector-icons/Ionicons";

const DashboardScreen = () => {
  const { cart, Hoadon, unreadNotifications } = useSelector(
    (state) => state.cart
  );
  const recentOrders = Hoadon.slice(-5).reverse();

  const renderOrder = ({ item }) => (
    <View style={styles.orderItem}>
      <Text style={styles.orderTitle}> Đơn hàng #{item.id}</Text>
      <Text>
        {item.ngaygio.day}/{item.ngaygio.month}/{item.ngaygio.year}
      </Text>
      <Text>Tổng: {item.total}₫</Text>
      <Text>
        Trạng thái:{" "}
        {item.step === 0
          ? " Chờ xác nhận"
          : item.step === 1
          ? " Đã xác nhận"
          : item.step === 2
          ? " Bếp đang chuẩn bị"
          : item.step === 3
          ? " Đang giao"
          : " Hoàn tất"}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Ionicons name="fast-food" size={28} color="#e91e63" />
          <Text style={styles.statNumber}>{cart.length}</Text>
          <Text style={styles.statLabel}>Món ăn trong giỏ</Text>
        </View>

        <View style={styles.statBox}>
          <Ionicons name="receipt" size={28} color="#2196f3" />
          <Text style={styles.statNumber}>{Hoadon.length}</Text>
          <Text style={styles.statLabel}>Tổng số hóa đơn</Text>
        </View>

        <View style={styles.statBox}>
          <Ionicons name="notifications" size={28} color="#ff9800" />
          <Text style={styles.statNumber}>{unreadNotifications}</Text>
          <Text style={styles.statLabel}>Thông báo</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}> Đơn hàng gần đây</Text>
      {recentOrders.length === 0 ? (
        <Text style={styles.noOrder}>Chưa có đơn hàng nào</Text>
      ) : (
        <FlatList
          data={recentOrders}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderOrder}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
    </SafeAreaView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9f9f9", padding: 20 },
  restaurantName: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "#666",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  statBox: {
    flex: 1,
    margin: 5,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  statNumber: { fontSize: 22, fontWeight: "bold", marginTop: 6 },
  statLabel: { fontSize: 13, color: "#555", textAlign: "center" },

  sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  noOrder: { textAlign: "center", color: "#888", fontStyle: "italic" },

  orderItem: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 10,
    marginVertical: 6,
    elevation: 2,
  },
  orderTitle: { fontWeight: "bold", marginBottom: 4 },
});

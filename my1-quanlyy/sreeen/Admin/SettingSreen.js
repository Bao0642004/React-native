import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  SafeAreaView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../Redux/userSlice."; // 🔹 import action logout

const SettingsScreen = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    Alert.alert("Đăng xuất", "Bạn có chắc muốn đăng xuất?", [
      { text: "Hủy", style: "cancel" },
      {
        text: "Đăng xuất",
        style: "destructive",
        onPress: () => {
          dispatch(logoutUser());
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Ionicons name="person-circle-outline" size={80} color="#4caf50" />
      <Text style={styles.title}>Admin Dashboard</Text>
      <Text style={styles.subtitle}>Quản lý ứng dụng đặt đồ ăn</Text>

      <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
        <Ionicons name="exit-outline" size={22} color="#fff" />
        <Text style={styles.logoutText}>Đăng xuất</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
  },
  title: { fontSize: 22, fontWeight: "bold", marginTop: 10 },
  subtitle: { fontSize: 14, color: "#666", marginBottom: 30 },
  logoutBtn: {
    flexDirection: "row",
    backgroundColor: "#f44336",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  logoutText: { color: "#fff", fontWeight: "bold", marginLeft: 8 },
});

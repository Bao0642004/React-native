import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const dummyUsers = [
  {
    id: 1,
    name: "Nguyễn Văn An",
    email: "a@gmail.com",
    role: "User",
    status: "Active",
  },
  {
    id: 2,
    name: "Trần văn",
    email: "b@gmail.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 3,
    name: "Lê Văn Chiến",
    email: "c@gmail.com",
    role: "Shipper",
    status: "Blocked",
  },
];

const UserManagementScreen = ({ navigation }) => {
  const [users, setUsers] = useState(dummyUsers);
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.header}> Quản lý nhân viên</Text>
        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name="add-circle-outline" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.search}
        placeholder=" Tìm kiếm theo tên hoặc email..."
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filteredUsers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.userCard}>
            <Ionicons name="person-circle-outline" size={45} color="#00AB77" />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.email}>{item.email}</Text>
              <Text style={styles.role}>
                Vai trò: <Text style={{ fontWeight: "bold" }}>{item.role}</Text>{" "}
                |{" "}
                <Text
                  style={{ color: item.status === "Active" ? "green" : "red" }}
                >
                  {item.status}
                </Text>
              </Text>
            </View>
            <TouchableOpacity
              style={styles.detailButton}
              onPress={() => navigation.navigate("UserDetail", { user: item })}
            >
              <Text style={styles.detailText}>Chi tiết</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default UserManagementScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  header: { fontSize: 22, fontWeight: "bold" },
  addBtn: {
    backgroundColor: "#00AB77",
    padding: 8,
    borderRadius: 50,
  },
  search: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginBottom: 16,
  },
  userCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    marginBottom: 10,
  },
  name: { fontSize: 16, fontWeight: "bold" },
  email: { fontSize: 14, color: "#555" },
  role: { fontSize: 12, color: "#888" },
  detailButton: {
    backgroundColor: "#00AB77",
    padding: 8,
    borderRadius: 8,
  },
  detailText: { color: "#fff", fontSize: 12 },
});

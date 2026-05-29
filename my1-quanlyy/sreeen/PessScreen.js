import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useDispatch } from "react-redux";
import { logoutUser } from "../Redux/userSlice."; // ✅ import action logout

const ProfileScreen = () => {
  const dispatch = useDispatch();

  const paymentOptions = [
    {
      id: "2",
      name: "Ví MoMo",
      icon: "https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png",
    },
    {
      id: "3",
      name: "Thẻ ATM / Internet Banking",
      icon: "https://cdn-icons-png.flaticon.com/512/2331/2331903.png",
    },
    {
      id: "4",
      name: "Thẻ tín dụng / Ghi nợ",
      icon: "https://cdn-icons-png.flaticon.com/512/633/633611.png",
    },
  ];

  const handleLogout = () => {
    Alert.alert("Đăng xuất", "Bạn có chắc muốn đăng xuất?", [
      { text: "Hủy", style: "cancel" },
      {
        text: "Đăng xuất",
        style: "destructive",
        onPress: () => {
          dispatch(logoutUser()); // ✅ dùng redux logout
        },
      },
    ]);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.icon }} style={styles.icon} />
      <Text style={styles.text}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Các ngân hàng đã liên kết</Text>

      <FlatList
        data={paymentOptions}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 10 }}
      />

      <View style={{ flex: 1, gap: 12 }}>
        <TouchableOpacity style={styles.option}>
          <Feather
            name="phone-call"
            size={26}
            color="black"
            style={styles.iconLeft}
          />
          <Text style={styles.optionText}>Trung tâm hỗ trợ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <MaterialCommunityIcons
            name="gmail"
            size={26}
            color="black"
            style={styles.iconLeft}
          />
          <Text style={styles.optionText}>Giải đáp</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLogout} style={styles.logoutBtn}>
          <Text style={styles.logoutText}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },
  item: {
    width: 140,
    height: 120,
    backgroundColor: "#f5f5f5",
    marginHorizontal: 8,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 8,
    height: 55,
    paddingHorizontal: 12,
  },
  iconLeft: {
    marginRight: 12,
  },
  optionText: {
    fontSize: 18,
    fontWeight: "500",
  },
  logoutBtn: {
    backgroundColor: "#00AB77",
    borderRadius: 8,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
  },
  logoutText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
  },
});

export default ProfileScreen;

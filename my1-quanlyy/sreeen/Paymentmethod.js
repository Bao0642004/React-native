import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

const paymentOptions = [
  {
    id: "1",
    name: "Thanh toán khi nhận hàng (COD)",
    icon: "https://cdn-icons-png.flaticon.com/512/2331/2331937.png", // icon tiền mặt
  },
  {
    id: "2",
    name: "Ví MoMo",
    icon: "https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png", // icon MoMo
  },
  {
    id: "3",
    name: "Thẻ ATM / Internet Banking",
    icon: "https://cdn-icons-png.flaticon.com/512/2331/2331903.png", // icon ngân hàng
  },
  {
    id: "4",
    name: "Thẻ tín dụng / Ghi nợ",
    icon: "https://cdn-icons-png.flaticon.com/512/633/633611.png", // icon thẻ tín dụng
  },
];

const Paymentmethod = () => {
  const navigation = useNavigation();

  const handleSelect = (method) => {
    navigation.goBack();
    setTimeout(() => {
      navigation.navigate("Cart", { pay: method });
    }, 100);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => handleSelect(item.name)}
    >
      <Image source={{ uri: item.icon }} style={styles.icon} />
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <Ionicons
          onPress={() => navigation.goBack()}
          name="arrow-back"
          size={24}
          color="black"
        />

        <Text style={styles.title}>Chọn phương thức thanh toán</Text>
      </View>
      <FlatList
        data={paymentOptions}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default Paymentmethod;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    marginBottom: 10,
  },
  icon: {
    width: 28,
    height: 28,
    marginRight: 10,
  },
  itemText: {
    fontSize: 16,
    color: "#333",
  },
});

import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Image, Pressable, ScrollView, Text, View, Alert } from "react-native";
import Modal from "react-native-modal";
import { useSelector } from "react-redux";
import FoodItem from "../compoments/FoodItem";
import { MenuScreenStyles } from "../Stylws/Srceens/Menusreen.styles";

const MenuSrceen = () => {
  const cart = useSelector((state) => state.cart.cart);
  const route = useRoute();
  const navigation = useNavigation();
  const [menu, setMenu] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  // Tính tổng tiền
  const total = Array.isArray(cart)
    ? cart.reduce(
        (sum, item) => sum + (Number(item.price) || 0) * (item.quantity || 0),
        0
      )
    : 0;

  useEffect(() => {
    if (route?.params?.menu) {
      setMenu(route.params.menu);
    } else {
      setMenu([]);
    }
  }, [route?.params?.menu]);

  const address =
    useSelector((state) => state.cart.selectedAddress) || "Chưa chọn địa chỉ";
  const createTwoButtonAlert = () =>
    Alert.alert("Thông báo", "Vui lòng xác nhận địa chỉ", [
      {
        text: "Cancel",

        style: "cancel",
      },
      { text: "OK", onPress: () => navigation.goBack() },
    ]);

  const toggleModal = () => setModalVisible((v) => !v);
  return (
    <>
      <ScrollView style={{ marginTop: 50 }}>
        <View style={MenuScreenStyles.container}>
          <View style={MenuScreenStyles.View1}>
            <Ionicons
              onPress={() => navigation.goBack()}
              name="arrow-back"
              size={24}
              color="black"
            />
            <View style={MenuScreenStyles.View2}>
              <Ionicons name="search" size={22} color="black" />
              <Text style={MenuScreenStyles.Text1}>Search</Text>
            </View>
          </View>

          <View style={MenuScreenStyles.View3}>
            <View style={MenuScreenStyles.View4}>
              <Text style={MenuScreenStyles.Text2}>{route.params.name}</Text>
              <View style={MenuScreenStyles.View5}>
                <Ionicons
                  style={{ marginHorizontal: 7 }}
                  name="share-social-sharp"
                  size={24}
                  color="black"
                />
                <Ionicons name="heart-outline" size={24} color="black" />
              </View>
            </View>

            <View style={MenuScreenStyles.View6}>
              <MaterialIcons name="stars" size={24} color="green" />
              <Text style={MenuScreenStyles.Text3}>{route.params?.rating}</Text>
              <Text style={{ marginLeft: 3 }}>-</Text>
              <Text style={MenuScreenStyles.Text4}>{route.params?.time}</Text>
            </View>

            <Text style={MenuScreenStyles.Text5}>{route.params?.cuisines}</Text>

            <View style={MenuScreenStyles.View7}>
              <Text style={MenuScreenStyles.Text6}>Outlet</Text>
              <Text> {route.params.adress}</Text>
            </View>

            <View style={MenuScreenStyles.View8}>
              <Text style={MenuScreenStyles.Text6}>22 mins</Text>
              <Text>Home</Text>
            </View>

            <Text style={MenuScreenStyles.Text7} />
            <View style={MenuScreenStyles.View9}>
              <Ionicons name="bicycle" size={24} color="orange" />
              <Text style={MenuScreenStyles.Text8}>0-3 kms</Text>
              <Text style={MenuScreenStyles.Text8}>
                35 Delivery fee will Apply
              </Text>
            </View>
          </View>
        </View>

        <Text style={MenuScreenStyles.Text9}>MENU</Text>
        <Text style={MenuScreenStyles.Text10} />

        {menu?.length > 0 ? (
          menu.map((item, index) => (
            <FoodItem item={item} key={item.id ?? index} />
          ))
        ) : (
          <Text style={MenuScreenStyles.Text11}>Không có menu</Text>
        )}
      </ScrollView>

      {/* Floating Menu Button */}
      <Pressable
        onPress={toggleModal}
        style={[MenuScreenStyles.prver, { bottom: total > 0 ? 80 : 35 }]}
      >
        <MaterialIcons
          style={{ textAlign: "center" }}
          name="menu-book"
          size={24}
          color="#fff"
        />
        <Text style={MenuScreenStyles.Text12}>Menu</Text>
      </Pressable>

      <Modal
        isVisible={modalVisible}
        onBackdropPress={toggleModal}
        backdropOpacity={0.5}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        style={{
          justifyContent: "flex-end",
          margin: 0,
        }}
      >
        <View
          style={[
            MenuScreenStyles.categoryModal,
            { bottom: total > 0 ? 80 : 35 },
          ]}
        >
          {menu?.length > 0 ? (
            menu.map((item, i) => (
              <Pressable
                key={item.id ?? i}
                style={MenuScreenStyles.categoryItem}
                onPress={() => {
                  toggleModal();
                }}
              >
                <Text style={MenuScreenStyles.Text13}>{item.name}</Text>
                <Text style={MenuScreenStyles.Text13}>
                  {item.items?.length ?? 0}
                </Text>
              </Pressable>
            ))
          ) : (
            <Text style={MenuScreenStyles.Text14}>Không có danh mục</Text>
          )}
        </View>
      </Modal>

      {total > 0 && (
        <Pressable
          onPress={() => {
            if (address === "Chưa chọn địa chỉ") {
              createTwoButtonAlert();
            } else {
              navigation.navigate("Cart", { name: route.params.name });
            }
          }}
          style={MenuScreenStyles.prver2}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View>
              <Text style={MenuScreenStyles.Text15}>
                {cart.length} items | {total}.000 VNĐ
              </Text>
              <Text style={MenuScreenStyles.Text16}>Chi tiết đơn hàng</Text>
            </View>
            <Pressable style={{ marginLeft: 70 }}>
              <Text style={MenuScreenStyles.Text17}>View Cart</Text>
            </Pressable>
          </View>
        </Pressable>
      )}
    </>
  );
};

export default MenuSrceen;

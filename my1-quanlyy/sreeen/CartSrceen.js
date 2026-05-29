import { FontAwesome5 } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import {
  cleanCart,
  decreaseQuantity,
  DeleteCart,
  increaseQuantity,
} from "../Redux/CartReducer";
import { CartSrceenStyles } from "../Stylws/Srceens/CartSrceen.styles";

// ---- format tiền: giá đang tính theo NGHÌN ----
const formatVNDk = (n) =>
  ((Number(n) || 0) * 1000).toLocaleString("vi-VN") + " VND";

// Nếu bạn có phí thuế/ship cũng tính theo nghìn:
const TAX_FEE_K = 9; // = 9.000 VND

const CartSrceen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  // Tổng giá trị cart theo nghìn
  const totalK = Array.isArray(cart)
    ? cart.reduce(
        (sum, item) => sum + (Number(item.price) || 0) * (item.quantity || 0),
        0
      )
    : 0;

  const instructions = [
    { id: "0", name: "Avoid Ringing", iconName: "bell" },
    { id: "1", name: "Leave at the door", iconName: "door-open" },
    { id: "2", name: "Directions to reach", iconName: "directions" },
    { id: "3", name: "Avoid Calling", iconName: "phone-alt" },
  ];

  const renderRightActions = (itemId) => (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity
        style={{
          width: 70,
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ff1744",
        }}
        onPress={() => dispatch(DeleteCart({ id: itemId }))}
      >
        <Text style={{ fontWeight: "bold", color: "#fff" }}>Xoá</Text>
      </TouchableOpacity>
    </View>
  );
  const [pay, setPay] = useState("Chọn phương thức");

  useEffect(() => {
    if (route.params?.pay) {
      setPay(route.params.pay);
    }
  }, [route.params?.pay]);
  const createTwoButtonAlert = () =>
    Alert.alert("Thông báo", "Hãy chọn phương thức thang toán", [
      { text: "OK" },
    ]);
  const address =
    useSelector((state) => state.cart.selectedAddress) || "Chưa chọn địa chỉ";

  return (
    <GestureHandlerRootView style={CartSrceenStyles.contaoiner}>
      <SafeAreaView style={CartSrceenStyles.contaoiner}>
        <ScrollView
          style={CartSrceenStyles.Scro1}
          contentContainerStyle={CartSrceenStyles.Scro2}
        >
          {totalK > 0 ? (
            <>
              {/* Header */}
              <View style={CartSrceenStyles.View1}>
                <Ionicons
                  onPress={() => navigation.goBack()}
                  name="arrow-back"
                  size={24}
                  color="black"
                />
              </View>

              <View style={CartSrceenStyles.view222}>
                <Text style={CartSrceenStyles.texr30}>Bảo nguyễn</Text>
                <Text style={CartSrceenStyles.Texr31}>(+84)1234567891</Text>
                <Text style={CartSrceenStyles.Texr32}>{address}</Text>
              </View>

              <View style={CartSrceenStyles.view2}>
                <Text style={CartSrceenStyles.Text2}>
                  Đặt hàng hộ người khác?
                </Text>
                <Text style={CartSrceenStyles.Texr3}>Thêm chi tiết</Text>
              </View>

              {/* Cart items */}
              <View style={CartSrceenStyles.View3}>
                {cart.map((item) => (
                  <Swipeable
                    key={item.id}
                    renderRightActions={() => renderRightActions(item.id)}
                    overshootRight={false}
                  >
                    <View style={CartSrceenStyles.View4}>
                      <Text style={CartSrceenStyles.Text4} numberOfLines={2}>
                        {item.name}
                      </Text>

                      <View style={CartSrceenStyles.View5}>
                        <Pressable
                          onPress={() =>
                            dispatch(decreaseQuantity({ id: item.id }))
                          }
                        >
                          <Text style={CartSrceenStyles.Text5}>-</Text>
                        </Pressable>

                        <Text style={CartSrceenStyles.Text5}>
                          {item.quantity}
                        </Text>

                        <Pressable
                          onPress={() =>
                            dispatch(increaseQuantity({ id: item.id }))
                          }
                        >
                          <Text style={CartSrceenStyles.Text5}>+</Text>
                        </Pressable>
                      </View>

                      <Text style={CartSrceenStyles.Text6}>
                        {formatVNDk(item.price * item.quantity)}
                      </Text>
                    </View>
                  </Swipeable>
                ))}
              </View>

              <View style={CartSrceenStyles.View6}>
                <Text style={CartSrceenStyles.Text7}>Delivery instruction</Text>
                <ScrollView
                  horizontal
                  style={{ margin: 10 }}
                  showsHorizontalScrollIndicator={false}
                >
                  {instructions.map((item) => (
                    <Pressable key={item.id} style={CartSrceenStyles.prove1}>
                      <View style={CartSrceenStyles.view7}>
                        <FontAwesome5
                          name={item.iconName}
                          size={24}
                          color={"gray"}
                        />
                        <Text style={CartSrceenStyles.Texxt8}>{item.name}</Text>
                      </View>
                    </Pressable>
                  ))}
                </ScrollView>
              </View>

              <View style={CartSrceenStyles.View8}>
                <Text style={CartSrceenStyles.Text9}>Chi tiết thanh toán</Text>
                <View style={CartSrceenStyles.View9}>
                  <View style={CartSrceenStyles.View10}>
                    <Text style={CartSrceenStyles.View10}>
                      Tổng số tiền mặt hàng
                    </Text>
                    <Text style={CartSrceenStyles.Text11}>
                      {formatVNDk(totalK)}
                    </Text>
                  </View>

                  <View style={CartSrceenStyles.View11}>
                    <Text style={CartSrceenStyles.Text10}>
                      Delivery fee |1.2km
                    </Text>
                    <Text style={CartSrceenStyles.Texxt12}>Miễn phí</Text>
                  </View>

                  <View style={CartSrceenStyles.View12}>
                    <Text style={CartSrceenStyles.Text13}>
                      free delivery on your order
                    </Text>
                  </View>

                  <View style={CartSrceenStyles.View13} />

                  <View style={CartSrceenStyles.View14}>
                    <Text style={CartSrceenStyles.Text13}>Delivery tip</Text>
                    <Text style={CartSrceenStyles.Texxt14}>Add tip</Text>
                  </View>

                  {/* Taxes */}
                  <View style={CartSrceenStyles.view15}>
                    <Text style={CartSrceenStyles.Text13}>Thuế và phí</Text>
                    <Text style={CartSrceenStyles.text15}>
                      {formatVNDk(TAX_FEE_K)}
                    </Text>
                  </View>

                  <View style={CartSrceenStyles.View13} />
                  <View style={CartSrceenStyles.View16}>
                    <Text style={CartSrceenStyles.text16}>To pay</Text>
                    <Text style={CartSrceenStyles.Text17}>
                      {formatVNDk(totalK + TAX_FEE_K)}
                    </Text>
                  </View>
                  <View style={CartSrceenStyles.View13} />
                  <View style={CartSrceenStyles.view18}>
                    <Text style={CartSrceenStyles.text23}>
                      Phương thức thanhh toán
                    </Text>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Pay")}
                      style={{
                        left: 10,
                        width: 100,
                        justifyContent: "center",
                      }}
                    >
                      <Text style={CartSrceenStyles.Text24} numberOfLines={2}>
                        {pay}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </>
          ) : (
            <View style={CartSrceenStyles.View17}>
              <Text style={CartSrceenStyles.Text18}>
                Giỏ hàng của bạn đang trống chưa có sản phẩm
              </Text>
            </View>
          )}
        </ScrollView>

        {totalK === 0 ? null : (
          <Pressable style={CartSrceenStyles.prover2}>
            <View>
              <Text style={CartSrceenStyles.Text19}>
                {formatVNDk(totalK + TAX_FEE_K)}
              </Text>
              <Text style={CartSrceenStyles.Text20}>Xem hóa đơn chi tiết</Text>
            </View>
            <Pressable
              onPress={() => {
                if (!pay || pay === "Chọn phương thức") {
                  createTwoButtonAlert();
                  return;
                }
                navigation.navigate("Loading", { total: totalK });
                dispatch(cleanCart());
              }}
              style={CartSrceenStyles.prover3}
            >
              <Text style={CartSrceenStyles.Texxt21}>Proceed TO pay</Text>
            </Pressable>
          </Pressable>
        )}
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default CartSrceen;

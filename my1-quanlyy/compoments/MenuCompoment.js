import React, { memo, useCallback } from "react";
import { View, Text, Pressable, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
} from "../Redux/CartReducer";
import { Menucompomentstyles } from "../Stylws/Compoments/MenuCompoment.styles";

const MAX_DESC_LINES = 2;

const MenuComponent = ({ food }) => {
  const dispatch = useDispatch();

  const cartItem = useSelector((state) =>
    state.cart.cart.find((item) => item.id === food?.id)
  );

  // Add lần đầu
  const handleAdd = useCallback(() => {
    if (food) dispatch(addToCart(food));
  }, [dispatch, food]);

  // Tăng
  const handleIncrease = useCallback(() => {
    if (food?.id != null) dispatch(increaseQuantity({ id: food.id }));
  }, [dispatch, food?.id]);

  // Giảm
  const handleDecrease = useCallback(() => {
    if (food?.id != null) dispatch(decreaseQuantity({ id: food.id }));
  }, [dispatch, food?.id]);

  const renderStars = (rating = 0) => {
    const full = Math.floor(rating);
    const hasHalf = rating - full >= 0.5;
    const total = 5;
    const stars = [];
    for (let i = 0; i < total; i++) {
      if (i < full) {
        stars.push(
          <FontAwesome
            key={`star-full-${i}`}
            name="star"
            size={15}
            color="#FFD700"
            style={Menucompomentstyles.star}
          />
        );
      } else if (hasHalf && i === full) {
        stars.push(
          <FontAwesome
            key={`star-half-${i}`}
            name="star-half-full"
            size={15}
            color="#FFD700"
            style={Menucompomentstyles.star}
          />
        );
      } else {
        stars.push(
          <FontAwesome
            key={`star-empty-${i}`}
            name="star-o"
            size={15}
            color="#FFD700"
            style={Menucompomentstyles.star}
          />
        );
      }
    }
    return stars;
  };

  const renderPrice = (p) => `${Number(p) || 0}.000 VNĐ`;

  return (
    <Pressable
      style={Menucompomentstyles.container}
      android_ripple={{ color: "#eee" }}
    >
      <Image
        source={{ uri: food?.image }}
        style={Menucompomentstyles.image}
        resizeMode="cover"
      />

      {/* Thông tin */}
      <View style={Menucompomentstyles.middle}>
        <Text style={Menucompomentstyles.name} numberOfLines={2}>
          {food?.name}
        </Text>

        <Text style={Menucompomentstyles.price}>
          {renderPrice(food?.price)}
        </Text>

        <View style={Menucompomentstyles.ratingRow}>
          {renderStars(food?.rating)}
        </View>

        {food?.description ? (
          <Text
            style={Menucompomentstyles.description}
            numberOfLines={MAX_DESC_LINES}
            ellipsizeMode="tail"
          >
            {food.description}
          </Text>
        ) : null}
      </View>

      {/* Action */}
      <View style={Menucompomentstyles.actionBox}>
        {cartItem ? (
          <View style={Menucompomentstyles.quantityBox}>
            <Pressable
              onPress={handleDecrease}
              hitSlop={8}
              style={Menucompomentstyles.qtyBtn}
            >
              <Text style={Menucompomentstyles.qtyBtnText}>-</Text>
            </Pressable>

            <Text style={Menucompomentstyles.quantityText}>
              {cartItem.quantity}
            </Text>

            <Pressable
              onPress={handleIncrease}
              hitSlop={8}
              style={Menucompomentstyles.qtyBtn}
            >
              <Text style={Menucompomentstyles.qtyBtnText}>+</Text>
            </Pressable>
          </View>
        ) : (
          <Pressable onPress={handleAdd} style={Menucompomentstyles.addBtn}>
            <Ionicons name="add" size={28} color="#FFF" />
          </Pressable>
        )}
      </View>
    </Pressable>
  );
};

export default memo(MenuComponent);

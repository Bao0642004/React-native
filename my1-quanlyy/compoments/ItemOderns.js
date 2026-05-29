import { View, Text, Image } from "react-native";
import React from "react";
import { ItemodersStyles } from "../Stylws/Compoments/ItemOderns.styles";

const ItemOderns = ({ item }) => {
  return (
    <View style={ItemodersStyles.contanr}>
      <Image
        source={{
          uri: "https://www.creativefabrica.com/wp-content/uploads/2020/02/11/Food-Logo-Graphics-1-70.jpg",
        }}
        style={ItemodersStyles.image}
      />
      <View>
        <Text style={ItemodersStyles.Texxt1}>
          {item.ngaygio.day}/{item.ngaygio.month}/{item.ngaygio.year}
        </Text>
        <Text style={ItemodersStyles.text2}>
          Số sản phẩm đã dặt: {item.Sanpham.length} món
        </Text>
      </View>
      <Text style={ItemodersStyles.texxt3}>{item.total}.000</Text>
    </View>
  );
};

export default ItemOderns;

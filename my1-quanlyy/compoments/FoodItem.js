import { View, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import MenuCompoment from "./MenuCompoment";
import { Fooditemstyles } from "../Stylws/Compoments/FoodItem.styles";

const FoodItem = ({ item }) => {
  const [Select, setSelect] = useState([]);

  // Luôn mở sẵn khi render lần đầu
  useEffect(() => {
    setSelect([item.name]); // mở sẵn khi vào trang
  }, []);

  const handleItemselect = (name) => {
    if (Select.includes(name)) {
      setSelect(Select.filter((sel) => sel !== name)); // đang down → up (đóng)
    } else {
      setSelect([...Select, name]); // đang up → down (mở)
    }
  };

  return (
    <View>
      <Pressable
        onPress={() => handleItemselect(item.name)}
        style={Fooditemstyles.contariner}
      >
        <Text style={Fooditemstyles.text1}>
          {item.name} ({item.items.length})
        </Text>
        <AntDesign
          name={Select.includes(item.name) ? "down" : "up"}
          size={24}
          color="black"
        />
      </Pressable>

      {Select.includes(item.name) &&
        item.items.map((food, index) => (
          <MenuCompoment food={food} key={index} />
        ))}
    </View>
  );
};

export default FoodItem;

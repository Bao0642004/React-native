import {
  View,
  Text,
  ScrollView,
  Pressable,
  ImageBackground,
  StyleSheet,
} from "react-native";
import React from "react";
import Quickdata from "../data/Quickdata";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { QuickFoodStyles } from "../Stylws/Compoments/QuickFood.Styles";
import { useNavigation } from "@react-navigation/native";

const QuickFood = () => {
  const navigation = useNavigation();
  return (
    <View style={QuickFoodStyles.cotainer}>
      <Text style={QuickFoodStyles.Text1}>Get it Quickly</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Quickdata.map((item, index) => (
          <Pressable
            key={index}
            style={QuickFoodStyles.cotainer}
            onPress={() =>
              navigation.navigate("Menu", {
                id: item.id,
                name: item.name,
                image: item.image,
                rading: item.rading,
                time: item.time,
                adress: item.adress,
                cost_for_two: item.cost_for_two,
                cuisines: item.cuisines,
                menu: item.menu,
              })
            }
          >
            <ImageBackground
              source={{ uri: item.image }}
              style={QuickFoodStyles.Image}
              imageStyle={{ borderRadius: 10 }}
            >
              <Text style={QuickFoodStyles.Text2}>{item.offer} off</Text>
            </ImageBackground>
            <Text style={QuickFoodStyles.Text3}>{item.name}</Text>
            <View style={QuickFoodStyles.View1}>
              <MaterialIcons name="stars" size={24} color="green" />
              <Text style={QuickFoodStyles.Text4}>{item.rating}</Text>
              <Text style={{ marginLeft: 3 }}>-</Text>
              <Text style={QuickFoodStyles.Text4}>{item.time}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default QuickFood;

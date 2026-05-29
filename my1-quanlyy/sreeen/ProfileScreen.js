import { View, Text, Image, SafeAreaView } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Oderscreen from "./Oderscreen";
import PessScreen from "./PessScreen";
import AntDesign from "@expo/vector-icons/AntDesign";
const Tab = createMaterialTopTabNavigator();

const ProfileScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View
        style={{
          flexDirection: "row",
          margin: 10,
          gap: 10,
          height: 100,
          alignItems: "center",
          borderRadius: 10,
          backgroundColor: "#fff",
        }}
      >
        <Image
          source={{
            uri: "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/05/anh-nobita-22.jpg",
          }}
          style={{ width: 60, height: 60, borderRadius: 100, left: 5 }}
        />
        <Text style={{ fontSize: 17, fontWeight: "300" }}>Nguyễn Văn A</Text>
        <View
          style={{
            flexDirection: "row",
            gap: 2,
          }}
        >
          <Text>5.0</Text>
          <AntDesign name="star" size={18} color="#efdd33" />
        </View>
      </View>

      {/* Tabs */}
      <View style={{ flex: 1 }}>
        <Tab.Navigator
          screenOptions={{
            tabBarShowLabel: true,
            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: "600",
              textTransform: "none",
            },
            tabBarStyle: {
              backgroundColor: "#fff",
              elevation: 1,
              borderBottomWidth: 0.3,
              borderBottomColor: "#00AB77",
            },
            tabBarIndicatorStyle: {
              backgroundColor: "#00AB77",
              height: 2.5,
            },
          }}
        >
          <Tab.Screen name="Mặc định">{(props) => <PessScreen />}</Tab.Screen>
          <Tab.Screen name="Lịch sử" component={Oderscreen} />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

import React from "react";
import { Alert } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import OrderScreen from "./Admin/OrderScreen";
import UserManagementScreen from "./Admin/UserManagementScreen";
import DashboardScreen from "./Admin/DashboardScreen";
import ContentScreen from "./Admin/ContentScreen";
import SettingsScreen from "./Admin/SettingSreen";

const Tab = createBottomTabNavigator();

const AdminDashboard = ({ setIsLoggedIn }) => {
  const handleLogout = () => {
    Alert.alert("Đăng xuất", "Bạn có chắc muốn đăng xuất?", [
      { text: "Hủy", style: "cancel" },
      {
        text: "Đăng xuất",
        style: "destructive",
        onPress: () => {
          setIsLoggedIn(false);
        },
      },
    ]);
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarActiveTintColor: "#00AB77",
        tabBarInactiveTintColor: "#999",
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          backgroundColor: "#fff",
          borderTopWidth: 0.3,
          borderTopColor: "#ccc",
          elevation: 5,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Dashboard") iconName = "home";
          else if (route.name === "Users") iconName = "people";
          else if (route.name === "Content") iconName = "document-text";
          else if (route.name === "Orders") iconName = "cart";
          else if (route.name === "Reports") iconName = "bar-chart";
          else if (route.name === "Settings") iconName = "settings";

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Dashboard" options={{ headerShown: false }}>
        {() => <DashboardScreen setIsLoggedIn={setIsLoggedIn} />}
      </Tab.Screen>

      <Tab.Screen name="Content" options={{ headerShown: false }}>
        {() => <ContentScreen setIsLoggedIn={setIsLoggedIn} />}
      </Tab.Screen>

      <Tab.Screen name="Users" options={{ headerShown: false }}>
        {() => <UserManagementScreen setIsLoggedIn={setIsLoggedIn} />}
      </Tab.Screen>
      <Tab.Screen name="Settings" options={{ headerShown: false }}>
        {() => <SettingsScreen setIsLoggedIn={setIsLoggedIn} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default AdminDashboard;

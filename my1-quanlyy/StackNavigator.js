import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import { useSelector } from "react-redux";

// Screens
import AdminDashboard from "./sreeen/AdminDashboard";
import Homesrceem from "./sreeen/Homesrceem";
import MenuSrceen from "./sreeen/MenuSrceen";
import CartSrceen from "./sreeen/CartSrceen";
import LoodingSrceen from "./sreeen/LoodingSrceen";
import Oderscreen from "./sreeen/Oderscreen";
import Login from "./sreeen/Login";
import Dangki from "./sreeen/register";
import Paymentmethod from "./sreeen/Paymentmethod";
import NotificationsScreen from "./sreeen/NotificationsScreen";
import ProfileScreen from "./sreeen/ProfileScreen";
import Maps from "./sreeen/maps";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => {
  const unreadNotifications = useSelector(
    (state) => state.cart.unreadNotifications
  );

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          backgroundColor: "#fff",
          borderTopWidth: 0.3,
          borderTopColor: "#ccc",
          elevation: 5,
        },
        tabBarActiveTintColor: "#00AB77",
        tabBarInactiveTintColor: "#999",
        tabBarIcon: ({ focused, color }) => {
          if (route.name === "Orders") {
            return (
              <Feather name="calendar" size={focused ? 28 : 24} color={color} />
            );
          }

          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home-sharp" : "home-outline";
          } else if (route.name === "Notifications") {
            iconName = focused ? "notifications" : "notifications-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          return (
            <View>
              <Ionicons
                name={iconName}
                size={focused ? 28 : 24}
                color={color}
              />
              {route.name === "Notifications" && unreadNotifications > 0 && (
                <View
                  style={{
                    position: "absolute",
                    right: -6,
                    top: -3,
                    backgroundColor: "red",
                    borderRadius: 8,
                    paddingHorizontal: 4,
                    minWidth: 16,
                    height: 16,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 10,
                      fontWeight: "bold",
                    }}
                  >
                    {unreadNotifications}
                  </Text>
                </View>
              )}
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={Homesrceem} />
      <Tab.Screen name="Orders" component={Oderscreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const StackNavigator = () => {
  // 🔹 Lấy trạng thái từ Redux
  const { isLoggedIn, role } = useSelector((state) => state.user);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {!isLoggedIn ? (
          <>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Dangki"
              component={Dangki}
              options={{ headerShown: false }}
            />
          </>
        ) : role === "admin" ? (
          <Stack.Screen
            name="AdminDashboard"
            component={AdminDashboard}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <Stack.Screen
              name="Main"
              component={MainTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Cart"
              component={CartSrceen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Menu"
              component={MenuSrceen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Loading"
              component={LoodingSrceen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Pay"
              component={Paymentmethod}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Maps"
              component={Maps}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

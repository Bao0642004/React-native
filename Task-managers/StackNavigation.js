import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import AddTask from "./src/Srceens/AddTask";
import Calendar from "./src/Srceens/Calendar";
import Home from "./src/Srceens/Home";
import Login from "./src/Srceens/Login";
import NotificationsScreen from "./src/Srceens/notifications";
import Person from "./src/Srceens/Person";
import Regin from "./src/Srceens/Regin";
import TaskUpdate from "./src/Srceens/TaskUpdate";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => {
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
        tabBarActiveTintColor: "#00BFFF",
        tabBarInactiveTintColor: "#999",
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home-sharp" : "home-outline";
          } else if (route.name === "calendar") {
            iconName = focused ? "calendar" : "calendar-outline";
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
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="calendar" component={Calendar} />
      <Tab.Screen name="Profile" component={Person} />
    </Tab.Navigator>
  );
};

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Dangki"
        component={Regin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Main"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddTask"
        component={AddTask}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TaskUpdate"
        component={TaskUpdate}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;

import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, Animated, Easing } from "react-native";
import { Provider } from "react-redux";
import store from "./Store";
import StackNavigator from "./StackNavigator";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const spinValue = useRef(new Animated.Value(0)).current;

  const ROTATIONS = 3;
  const PER_ROTATION_MS = 800;
  const TOTAL_DURATION = ROTATIONS * PER_ROTATION_MS;

  useEffect(() => {
    Animated.timing(spinValue, {
      toValue: ROTATIONS,
      duration: TOTAL_DURATION,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished) setIsLoading(false);
    });
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, ROTATIONS],
    outputRange: ["0deg", `${360 * ROTATIONS}deg`],
  });

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Food App</Text>

        <Animated.View
          style={[styles.circle, { transform: [{ rotate: spin }] }]}
        />
      </View>
    );
  }

  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  );
}

const CIRCLE_SIZE = 220;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  loadingText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#33cc33",
    zIndex: 1,
  },
  circle: {
    position: "absolute",
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    borderWidth: 6,
    borderColor: "#33cc33",
    borderTopColor: "#33cc33",
    borderRightColor: "#33cc33",
    borderBottomColor: "transparent",
    borderLeftColor: "transparent",
  },
});

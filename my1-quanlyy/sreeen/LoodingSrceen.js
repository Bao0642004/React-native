import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import LottieView from "lottie-react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { LoadingSreenStyles } from "../Stylws/Srceens/LoaingSrceen.styles";

const LoodingScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { total } = route.params || { total: 0 };

  useEffect(() => {
    const timer = setTimeout(() => {
      // Quay về màn hình đầu tiên của stack hiện tại
      navigation.popToTop();
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <LottieView
        source={require("../assets/thunk.json")}
        style={LoadingSreenStyles.Lotview}
        autoPlay
        loop={false}
        speed={0.7}
      />
      <Text style={styles.text}>Đơn hàng của bạn đã được xác nhận</Text>
      <LottieView
        source={require("../assets/sparkle.json")}
        style={LoadingSreenStyles.lotview2}
        autoPlay
        loop={false}
        speed={0.7}
      />
    </SafeAreaView>
  );
};

export default LoodingScreen;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { fontSize: 18, fontWeight: "600", marginTop: 20, textAlign: "center" },
});

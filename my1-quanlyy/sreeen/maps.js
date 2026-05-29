import { useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import * as LocationGeocoding from "expo-location";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setSelectedAddress } from "../Redux/CartReducer";

const Maps = () => {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState("Đang lấy địa chỉ...");
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setAddress("Không có quyền truy cập vị trí");
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      const region = {
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };
      setLocation(region);

      // Lấy địa chỉ từ toạ độ
      let geocode = await LocationGeocoding.reverseGeocodeAsync(loc.coords);
      if (geocode.length > 0) {
        const addr = `${geocode[0].name}, ${geocode[0].street}, ${geocode[0].city}`;
        setAddress(addr);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      {/* Map toàn màn hình */}
      <MapView
        style={StyleSheet.absoluteFillObject}
        provider={PROVIDER_GOOGLE}
        region={location}
        showsUserLocation={true}
      >
        {location && <Marker coordinate={location} title="Vị trí của bạn" />}
      </MapView>

      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={28} color="black" />
      </TouchableOpacity>

      <View style={styles.bottomContainer}>
        <Text style={styles.addressText}>{address}</Text>
        <TouchableOpacity
          style={styles.confirmBtn}
          onPress={() => {
            dispatch(setSelectedAddress(address));
            navigation.navigate("Main");
          }}
        >
          <Text style={styles.confirmText}>Xác nhận địa chỉ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Maps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backBtn: {
    position: "absolute",
    top: 50,
    left: 20,
    backgroundColor: "white",
    padding: 8,
    borderRadius: 30,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 30,
    left: 20,
    right: 20,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  addressText: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },
  confirmBtn: {
    backgroundColor: "#00AB77",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  confirmText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});

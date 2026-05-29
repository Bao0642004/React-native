import React, { useState, useEffect } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
  Alert,
  Image,
  Platform,
} from "react-native";
import * as Google from "expo-auth-session/providers/google";
import * as Facebook from "expo-auth-session/providers/facebook";
import * as AppleAuthentication from "expo-apple-authentication";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Redux/userSlice.";
import { Loginstyles } from "../Stylws/Srceens/LoginStyles";

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: "<YOUR_EXPO_GOOGLE_CLIENT_ID>",
    iosClientId: "<YOUR_IOS_CLIENT_ID>",
    androidClientId: "<YOUR_ANDROID_CLIENT_ID>",
    webClientId: "<YOUR_WEB_CLIENT_ID>",
  });

  // Facebook Auth
  const [fbRequest, fbResponse, fbPromptAsync] = Facebook.useAuthRequest({
    clientId: "<YOUR_FACEBOOK_APP_ID>",
  });

  useEffect(() => {
    if (response?.type === "success") {
      setIsLoggedIn(true);
      navigation.replace("Cart");
    }
  }, [response]);

  useEffect(() => {
    if (fbResponse?.type === "success") {
      setIsLoggedIn(true);
      navigation.replace("Cart");
    }
  }, [fbResponse]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Lấy state từ Redux
  const { isLoggedIn, role } = useSelector((state) => state.user);

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert("Lỗi", "Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    // Gửi action login
    dispatch(loginUser({ username, password }));
  };

  // Theo dõi thay đổi login state
  useEffect(() => {
    if (isLoggedIn) {
      if (role === "admin") {
        navigation.reset({
          index: 0,
          routes: [{ name: "AdminScreen" }],
        });
      } else if (role === "user") {
        navigation.reset({
          index: 0,
          routes: [{ name: "UserScreen" }],
        });
      }
    } else if (username && password) {
      // chỉ báo lỗi khi có nhập username + password nhưng login sai
      Alert.alert("Lỗi", "Sai tài khoản hoặc mật khẩu!");
    }
  }, [isLoggedIn, role]);

  return (
    <SafeAreaView style={Loginstyles.container}>
      <Text style={Loginstyles.title}>Đăng nhập</Text>

      <TextInput
        placeholder="Tên đăng nhập"
        value={username}
        style={Loginstyles.input}
        onChangeText={setUsername}
      />

      <TextInput
        secureTextEntry
        placeholder="Mật khẩu"
        value={password}
        style={Loginstyles.input}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={Loginstyles.saveButton} onPress={handleLogin}>
        <Text style={Loginstyles.saveButtonText}>Đăng nhập</Text>
      </TouchableOpacity>

      <View style={Loginstyles.containerBottom}>
        <Text style={Loginstyles.textInfo}>Chưa có tài khoản?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Dangki")}>
          <Text style={Loginstyles.textRegister}>Đăng ký</Text>
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Text style={{ marginBottom: 10 }}>Hoặc đăng nhập bằng</Text>
        <View style={{ flexDirection: "row", gap: 15 }}>
          {/* Google Login */}
          <TouchableOpacity onPress={() => promptAsync()}>
            <Image
              style={{ width: 40, height: 40, borderRadius: 30 }}
              source={{
                uri: "https://yt3.googleusercontent.com/2eI1TjX447QZFDe6R32K0V2mjbVMKT5mIfQR-wK5bAsxttS_7qzUDS1ojoSKeSP0NuWd6sl7qQ=s900-c-k-c0x00ffffff-no-rj",
              }}
            />
          </TouchableOpacity>

          {/* Facebook Login */}
          <TouchableOpacity onPress={() => fbPromptAsync()}>
            <Image
              style={{ width: 40, height: 40, borderRadius: 30 }}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
              }}
            />
          </TouchableOpacity>
          {Platform.OS === "ios" && (
            <TouchableOpacity
              onPress={async () => {
                try {
                  const credential = await AppleAuthentication.signInAsync({
                    requestedScopes: [
                      AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                      AppleAuthentication.AppleAuthenticationScope.EMAIL,
                    ],
                  });
                  if (credential) {
                    setIsLoggedIn(true);
                    navigation.replace("Cart");
                  }
                } catch (e) {
                  Alert.alert("Lỗi", "Đăng nhập Apple thất bại!");
                }
              }}
            >
              <Image
                style={{ width: 40, height: 40, borderRadius: 30 }}
                source={{
                  uri: "https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-index-content-uploads-10.png",
                }}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import { registerUser } from "../Redux/userSlice."; // ✅ import action
import { Loginstyles } from "../Stylws/Srceens/LoginStyles";

const Dangki = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [securePassword, setSecurePassword] = useState(true);
  const [secureConfirm, setSecureConfirm] = useState(true);

  const handleRegister = () => {
    if (!username || !password || !confirmPassword) {
      Alert.alert("Lỗi", "Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Lỗi", "Mật khẩu xác nhận không khớp!");
      return;
    }

    if (username.toLowerCase() === "admin") {
      Alert.alert("Lỗi", "Không thể đăng ký tài khoản admin!");
      return;
    }

    dispatch(registerUser({ username, password }));

    Alert.alert("Thành công", `Đăng ký thành công: ${username}`);
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={Loginstyles.container}>
      <Text style={Loginstyles.title}>Đăng ký</Text>

      <TextInput
        placeholder="Tên đăng nhập"
        value={username}
        style={Loginstyles.input}
        onChangeText={setUsername}
      />

      {/* Mật khẩu */}
      <View style={Loginstyles.passwordContainer}>
        <TextInput
          placeholder="Mật khẩu"
          secureTextEntry={securePassword}
          value={password}
          style={[Loginstyles.input, { flex: 1 }]}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          onPress={() => setSecurePassword(!securePassword)}
          style={Loginstyles.eyeIcon}
        >
          <Ionicons
            name={securePassword ? "eye-off-outline" : "eye-outline"}
            size={22}
            color="#666"
          />
        </TouchableOpacity>
      </View>

      <View style={Loginstyles.passwordContainer}>
        <TextInput
          placeholder="Xác nhận mật khẩu"
          secureTextEntry={secureConfirm}
          value={confirmPassword}
          style={[Loginstyles.input, { flex: 1 }]}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity
          onPress={() => setSecureConfirm(!secureConfirm)}
          style={Loginstyles.eyeIcon}
        >
          <Ionicons
            name={secureConfirm ? "eye-off-outline" : "eye-outline"}
            size={22}
            color="#666"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={Loginstyles.saveButton} onPress={handleRegister}>
        <Text style={Loginstyles.saveButtonText}>Đăng ký</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Dangki;

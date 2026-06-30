import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import { registerUser } from "../Redux/userSlice";

const Regin = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [securePassword, setSecurePassword] = useState(true);
  const [secureConfirm, setSecureConfirm] = useState(true);

  const handleRegister = () => {
    if (!username || !password || !confirmPassword) {
      Alert.alert("Thông báo", "Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    if (password.length < 8) {
      Alert.alert("Thông báo", "Mật khẩu phải có ít nhất 8 ký tự!");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Thông báo", "Mật khẩu xác nhận không khớp!");
      return;
    }

    dispatch(registerUser({ username, password }));

    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Đăng ký</Text>

      <TextInput
        placeholder="Tên đăng nhập"
        value={username}
        style={styles.input}
        onChangeText={setUsername}
      />

      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Mật khẩu (tối thiểu 8 ký tự)"
          secureTextEntry={securePassword}
          value={password}
          style={[styles.input, { flex: 1 }]}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          onPress={() => setSecurePassword(!securePassword)}
          style={styles.eyeIcon}
        >
          <Ionicons
            name={securePassword ? "eye-off-outline" : "eye-outline"}
            size={22}
            color="#666"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Xác nhận mật khẩu"
          secureTextEntry={secureConfirm}
          value={confirmPassword}
          style={[styles.input, { flex: 1 }]}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity
          onPress={() => setSecureConfirm(!secureConfirm)}
          style={styles.eyeIcon}
        >
          <Ionicons
            name={secureConfirm ? "eye-off-outline" : "eye-outline"}
            size={22}
            color="#666"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleRegister}>
        <Text style={styles.saveButtonText}>Đăng ký</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ marginTop: 15 }}
      >
        <Text style={{ textAlign: "center", color: "#007AFF" }}>
          Đã có tài khoản? Đăng nhập
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Regin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    margin: 10,
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 30,
    color: "#333",
  },
  input: {
    height: 48,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
  },
  saveButton: {
    backgroundColor: "#00BFFF",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  eyeIcon: {
    position: "absolute",
    right: 15,
  },
});

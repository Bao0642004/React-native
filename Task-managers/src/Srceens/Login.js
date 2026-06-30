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
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Redux/userSlice";

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const exist = users.find(
      (u) => u.username === username && u.password === password
    );
    if (!exist) {
      Alert.alert("Lỗi", "Sai tên đăng nhập hoặc mật khẩu!");
      return;
    }

    dispatch(loginUser({ username, password }));
    navigation.replace("Main");
  };

  return (
    <SafeAreaView style={styles.Safe}>
      <Text style={styles.text}>Đăng nhập</Text>
      <TextInput
        placeholder="Tên đăng nhập"
        value={username}
        style={styles.input}
        onChangeText={setUsername}
      />

      <TextInput
        secureTextEntry
        placeholder="Mật khẩu"
        value={password}
        style={styles.input}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleLogin}>
        <Text style={styles.saveButtonText}>Đăng nhập</Text>
      </TouchableOpacity>

      <View style={styles.containerBottom}>
        <Text style={styles.textInfo}>Chưa có tài khoản?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Dangki")}>
          <Text style={styles.textRegister}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  Safe: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    margin: 10,
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "800",
    textAlign: "center",
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
  textRegister: {
    fontSize: 16,
    color: "#00BFFF",
    fontWeight: "600",
  },
  containerBottom: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});

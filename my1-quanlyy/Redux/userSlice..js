import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  currentUser: null,
  role: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // ✅ Đăng ký user mới
    registerUser: (state, action) => {
      const { username, password } = action.payload;

      // Không cho đăng ký admin
      if (username.toLowerCase() === "admin") return;

      const exists = state.users.find((u) => u.username === username);
      if (!exists) {
        state.users.push({ username, password, role: "user" });
      }
    },

    // ✅ Đăng nhập
    loginUser: (state, action) => {
      const { username, password } = action.payload;

      // Trường hợp admin đăng nhập
      if (username.toLowerCase() === "admin" && password === "123456") {
        state.currentUser = { username: "admin" };
        state.role = "admin";
        state.isLoggedIn = true;
        return;
      }

      // Trường hợp user đã đăng ký
      const user = state.users.find(
        (u) => u.username === username && u.password === password
      );

      if (user) {
        state.currentUser = user;
        state.role = "user";
        state.isLoggedIn = true;
      } else {
        state.currentUser = null;
        state.role = null;
        state.isLoggedIn = false;
      }
    },

    logoutUser: (state) => {
      state.currentUser = null;
      state.role = null;
      state.isLoggedIn = false;
    },
  },
});

export const { registerUser, loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;

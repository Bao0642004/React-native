import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [], // danh sách tài khoản đã đăng ký
  currentUser: null, // người dùng hiện tại
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      const { username, password } = action.payload;
      const exist = state.users.find((u) => u.username === username);
      if (!exist) {
        state.users.push({ username, password });
      }
    },
    loginUser: (state, action) => {
      const { username, password } = action.payload;
      const user = state.users.find(
        (u) => u.username === username && u.password === password
      );
      if (user) {
        state.currentUser = user;
      } else {
        state.currentUser = null;
      }
    },
    logoutUser: (state) => {
      state.currentUser = null;
    },
  },
});

export const { registerUser, loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./src/Redux/TaskManager";
import userReducer from "./src/Redux/userSlice";

const store = configureStore({
  reducer: {
    task: taskReducer,
    user: userReducer,
  },
});

export default store;

import { createSlice } from "@reduxjs/toolkit";
import { tasks as initialTasks } from "../../data/task"; // import tasks

export const TaskSlice = createSlice({
  name: "task",
  initialState: {
    tasks: initialTasks,
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: Date.now().toString(), // Tạo ID duy nhất
        title: action.payload.title,
        details: action.payload.details || "",
        startDate: action.payload.startDate || null,
        endDate: action.payload.endDate || null,
        time: action.payload.time || null,
        expectedResult: action.payload.expectedResult || "Chưa có yêu cầu",
        categoryId: Number(action.payload.categoryId), // 🔥 Dùng categoryId để hiển thị đúng loại công việc
        priority: action.payload.priority || 3,
        status: action.payload.status || "Chờ",
        completed: false,
      });

      state.tasks.sort((a, b) => {
        const dateA = a.startDate ? new Date(a.startDate) : new Date(0);
        const dateB = b.startDate ? new Date(b.startDate) : new Date(0);
        return dateA - dateB;
      });
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload.id);
    },
    updateTask: (state, action) => {
      const index = state.tasks.findIndex((t) => t.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = { ...state.tasks[index], ...action.payload };
      }
    },
  },
});

export const { addTask, toggleTask, updateTask, deleteTask } =
  TaskSlice.actions;

export default TaskSlice.reducer;

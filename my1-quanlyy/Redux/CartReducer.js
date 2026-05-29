import { createSlice } from "@reduxjs/toolkit";

export const CartReducer = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    Hoadon: [],
    currentOrder: null,
    unreadNotifications: 0,
    selectedAddress: null,
  },
  reducers: {
    addToCart: (state, action) => {
      const itemPresent = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemPresent) {
        itemPresent.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.cart = [];
    },
    increaseQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) item.quantity++;
    },
    decreaseQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (!item) return;
      if (item.quantity === 1) {
        state.cart = state.cart.filter((it) => it.id !== action.payload.id);
      } else {
        item.quantity--;
      }
    },
    cleanCart: (state) => {
      if (state.cart.length === 0) return;

      const total = state.cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      const now = new Date();
      const B = {
        Sanpham: [...state.cart],
        id: state.Hoadon.length + 1,
        ngaygio: {
          day: now.getDate(),
          month: now.getMonth() + 1,
          year: now.getFullYear(),
        },
        total: total + 9,
        createdAt: now.toISOString(),
        address: state.selectedAddress,
        step: 0,
      };

      state.Hoadon.unshift(B);
      state.currentOrder = {
        id: B.id,
        startedAt: B.createdAt,
        step: 0,
      };
      state.unreadNotifications = 1;
      state.cart = [];
    },
    DeleteCart: (state, action) => {
      const { id } = action.payload;
      state.cart = state.cart.filter((item) => item.id !== id);
    },
    setOrderStep: (state, action) => {
      if (!state.currentOrder) return;
      state.currentOrder.step = action.payload;
      const idx = state.Hoadon.findIndex((h) => h.id === state.currentOrder.id);
      if (idx !== -1) state.Hoadon[idx].step = action.payload;
      state.unreadNotifications = 1;
    },
    clearCurrentOrder: (state) => {
      state.currentOrder = null;
    },
    markNotificationsRead: (state) => {
      state.unreadNotifications = 0;
    },
    setSelectedAddress: (state, action) => {
      state.selectedAddress = action.payload;
    },
    clearSelectedAddress: (state) => {
      state.selectedAddress = null;
    },

    // 🆕 reducers bổ sung
    updateOrderAddress: (state, action) => {
      if (!state.currentOrder) return;
      const idx = state.Hoadon.findIndex((h) => h.id === state.currentOrder.id);
      if (idx !== -1) {
        state.Hoadon[idx].address = action.payload;
      }
      state.selectedAddress = action.payload;
    },
    deleteOrder: (state, action) => {
      const id = action.payload;
      state.Hoadon = state.Hoadon.filter((h) => h.id !== id);
      if (state.currentOrder?.id === id) {
        state.currentOrder = null;
      }
    },
    getAllOrders: (state) => {
      return state.Hoadon;
    },
    getOrderById: (state, action) => {
      return state.Hoadon.find((h) => h.id === action.payload) || null;
    },
    resetCartState: (state) => {
      state.cart = [];
      state.Hoadon = [];
      state.currentOrder = null;
      state.unreadNotifications = 0;
      state.selectedAddress = null;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
  cleanCart,
  DeleteCart,
  setOrderStep,
  clearCurrentOrder,
  markNotificationsRead,
  setSelectedAddress,
  clearSelectedAddress,
  updateOrderAddress,
  deleteOrder,
  getAllOrders,
  getOrderById,
  resetCartState,
} = CartReducer.actions;

export default CartReducer.reducer;

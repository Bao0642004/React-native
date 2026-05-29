import { createSlice } from "@reduxjs/toolkit";

export const AddressReducer = createSlice({
  name: "address",
  initialState: {
    selectedAddress: "Chưa chọn địa chỉ",
  },
  reducers: {
    setAddress: (state, action) => {
      state.selectedAddress = action.payload;
    },
    clearAddress: (state) => {
      state.selectedAddress = "Chưa chọn địa chỉ";
    },
  },
});

export const { setAddress, clearAddress } = AddressReducer.actions;
export default AddressReducer.reducer;

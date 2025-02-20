import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    selectedDish: null,
  },
  reducers: {
    open: (state, action) => {
      state.isOpen = true;
      state.selectedDish = action.payload;
    },
    close: (state) => {
      state.isOpen = false;
      state.selectedDish = null;
    },
  },
});

export const { open, close } = modalSlice.actions;
export default modalSlice.reducer;

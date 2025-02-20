import { createSlice } from "@reduxjs/toolkit";

const offcanvasSlice = createSlice({
  name: "offcanvas",
  initialState: {
    isOpen: false,
    component: null,
  },
  reducers: {
    open: (state, action) => {
      state.isOpen = true;
      state.component = action.payload;
    },
    close: (state) => {
      state.isOpen = false;
      state.component = null;
    },
  },
});

export const { open, close } = offcanvasSlice.actions;
export default offcanvasSlice.reducer;

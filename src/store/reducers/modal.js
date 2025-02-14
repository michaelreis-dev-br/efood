import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modalIsOpen: false,
    selectedDish: null,
  },
  reducers: {
    openModal: (state, action) => {
      state.modalIsOpen = true;
      state.selectedDish = action.payload;
    },
    closeModal: (state) => {
      state.modalIsOpen = false;
      state.selectedDish = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;

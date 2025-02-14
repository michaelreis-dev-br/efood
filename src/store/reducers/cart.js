import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    cartIsOpen: false,
  },
  reducers: {
    addItem: (state, action) => {
      const dishe = state.items.find((item) => item.id === action.payload.id);

      if (!dishe) {
        state.items.push(action.payload);
      } else {
        alert("O item já está no carrinho!");
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    openCart: (state) => {
      state.cartIsOpen = true;
    },
    closeCart: (state) => {
      state.cartIsOpen = false;
    },
  },
});

export const { addItem, removeItem, openCart, closeCart } = cartSlice.actions;
export default cartSlice.reducer;

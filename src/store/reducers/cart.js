import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    add: (state, action) => {
      const dishe = state.items.find((item) => item.id === action.payload.id);

      if (!dishe) {
        state.items.push(action.payload);
      } else {
        alert("O item já está no carrinho!");
      }
    },
    remove: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clear: (state) => {
      state.items = [];
    },
  },
});

export const { add, remove, clear } = cartSlice.actions;
export default cartSlice.reducer;

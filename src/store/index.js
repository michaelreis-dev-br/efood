import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cart";
import modalReducer from "./reducers/modal";
import offcanvasReducer from "./reducers/offcanvas";
import api from "../services/api";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
    offcanvas: offcanvasReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;

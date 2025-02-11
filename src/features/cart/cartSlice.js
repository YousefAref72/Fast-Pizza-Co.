import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
  // cart: [
  //   {
  //     pizzaId: 12,
  //     name: 'Mediterranean',
  //     quantity: 2,
  //     unitPrice: 16,
  //     totalPrice: 32,
  //   },
  // ],
};
const cartSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const found = state.cart.find((item) => item.pizzaId === action.payload);
      found.quantity++;
      found.totalPrice += found.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const found = state.cart.find((item) => item.pizzaId === action.payload);
      found.quantity--;
      found.totalPrice -= found.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export default cartSlice.reducer;
export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export const getCart = (state) => state.cart.cart;

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;

export const getTotalQuantity = function (state) {
  return state.cart.cart.reduce(
    (acc, currentValue) => acc + currentValue.quantity,
    0
  );
};

export const getTotalPrice = function (state) {
  return state.cart.cart.reduce(
    (acc, currentValue) => acc + currentValue.totalPrice,
    0
  );
};

import { createSlice } from "@reduxjs/toolkit";

const WishListSlice = createSlice({
  name: "wishlist",
  initialState: { items: [] },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, deleteItem } = WishListSlice.actions;
export default WishListSlice.reducer;

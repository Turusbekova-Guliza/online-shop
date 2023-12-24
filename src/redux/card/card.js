import { createSlice } from "@reduxjs/toolkit";

const Card = createSlice({
  name: "card",
  initialState: { datas: [] },
  reducers: {
    addCard: (state, action) => {
      state.datas.push(action.payload);
    },
    removeCard: (state, action) => {
      state.datas = state.datas.filter((data) => data.id !== action.payload);
    },
  },
});

export const { addCard, removeCard } = Card.actions;
export default Card.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { arcadeImg } from "../public/assets/images/index";
const planCard = createSlice({
  initialState: {
    cardNumber: 1,
    name: "arcade",
    img: arcadeImg,
    monthPrice: 9,
    yearPrice: 90,
  },
  name: "planCard",
  reducers: {
    addPlanInfo: (state, { payload }) => {
      state = payload;
      return state;
    },
  },
});
export default planCard.reducer;
export const { addPlanInfo } = planCard.actions;

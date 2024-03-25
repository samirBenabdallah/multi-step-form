import { createSlice } from "@reduxjs/toolkit";

const appSetting = createSlice({
  initialState: {
    pageNumber: 1,
    isMonth: true,
  },
  name: "appSetting",
  reducers: {
    changePageNumber: (state, { payload }) => {
      state.pageNumber = payload;
    },
    changeTO: (state, { payload }) => {
      state.isMonth = payload;
    },
    toggleType: (state) => {
      state.isMonth = !state.isMonth;
      return state ;
    },
  },
});
export default appSetting.reducer;
export const { changePageNumber, changeTO, toggleType } = appSetting.actions;

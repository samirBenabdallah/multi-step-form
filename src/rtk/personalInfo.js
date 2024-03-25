import { createSlice } from "@reduxjs/toolkit";
const personalInfo = createSlice({
  initialState: {
    name: "",
    email: "",
    phone: "",
  },
  name: "personalInfo",
  reducers: {
    changePersonalInfo: (state, { payload }) => {
      state = payload;
      return state;
    },
  },
});

export default personalInfo.reducer;
export const { changePersonalInfo } = personalInfo.actions;

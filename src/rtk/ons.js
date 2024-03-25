import { createSlice } from "@reduxjs/toolkit";

const ons = createSlice({
  initialState: [
    {
      isSelected: true,
      name: "Online service",
      id: "Online service",
      paragraphe: "Access to multiplayer games",
      monthPrice: 1,
      yearPrice: 10,
    },
    {
      isSelected: true,
      name: "Larger storage",
      id: "Larger_storage",
      paragraphe: "Extra 1TB of cloud save",
      monthPrice: 2,
      yearPrice: 20,
    },
    {
      isSelected: false,
      name: "Customizable Profile",
      id: "Customizable_Profile",
      paragraphe: "Custom theme on your profile",
      monthPrice: 2,
      yearPrice: 20,
    },
  ],
  name: "ons",
  reducers: {
    toggleCheckBox: (state, { payload }) => {
      state.map((ele) => {
        if (ele.id === payload) ele.isSelected = !ele.isSelected;
      });
    },
  },
});
export default ons.reducer;
export const { toggleCheckBox } = ons.actions;

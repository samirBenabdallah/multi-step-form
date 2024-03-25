import { configureStore } from "@reduxjs/toolkit";
import ons from "./ons";
import appSetting from "./appSetting";
import personalInfo from "../rtk/personalInfo";
import planCard from "../rtk/cardInfo";
const store = configureStore({
  reducer: {
    appSetting,
    personalInfo,
    planCard,
    ons
  },
});

export default store;

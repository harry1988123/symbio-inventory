import { configureStore } from "@reduxjs/toolkit";
import activeTabReducer from "../features/activeTabSlice";
import itemReducer from "../features/itemsSlice";

export const store = configureStore({
  reducer: {
    activeTabReducer,
    itemReducer,
  },
});

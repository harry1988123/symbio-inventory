import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  activeTab: "4",
};

export const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload.activeTab;
    },
  },
});

export const { setActiveTab } = inventorySlice.actions;
export const selectedActiveTab = (state) => state.activeTabReducer.activeTab;

export default inventorySlice.reducer;

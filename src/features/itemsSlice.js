import { createSlice } from "@reduxjs/toolkit";
import data from '../Data.json'

const initialState = {
  item: data,
  categories: [],
};

export const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    setNewItem: (state, action) => {
      state.item.push(action.payload);
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { setNewItem, setCategories } = itemSlice.actions;

export const selectedItems = (state) => state.itemReducer.item;
export const selectedCategoryList = (state) => state.itemReducer.categories;

export default itemSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

interface Props {
  savedItems: any[];
}

let INITIAL_STATE: Props = {
  savedItems: [
    {
      id: 1,
      name: "Burger",
      value: "burger",
      image: require("../../assets/icons/burger.png"),
    },
    {
      id: 2,
      name: "Veggies",
      value: "veggies",
      image: require("../../assets/icons/veggie.png"),
    },
  ],
};

const SavedItemsSlice = createSlice({
  name: "SavedItemsSlice",
  initialState: INITIAL_STATE,
  reducers: {
    addSavedItem(state, { payload }: PayloadAction<any>) {
      const existingData = JSON.parse(JSON.stringify(state.savedItems));
      const newData = [...existingData, payload];
      state.savedItems = newData;
    },
    removeSavedItem(state, { payload }: PayloadAction<any>) {
      const existingData = JSON.parse(JSON.stringify(state.savedItems));
      const newData = existingData.filter((item:any) => item?.id !== payload);
      state.savedItems = newData;
    },
  },
});

export default SavedItemsSlice.reducer;

export const { addSavedItem, removeSavedItem } = SavedItemsSlice.actions;

export const useSavedItemsStore = (state: RootState) => state.currentSavedItems;

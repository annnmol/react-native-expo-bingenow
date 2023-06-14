import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

interface Props {
  savedItems: any[];
}

let INITIAL_STATE: Props = {
  savedItems: [
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
    replaceSavedItem(state, { payload }: PayloadAction<any>) {
      state.savedItems = payload;
    },
    removeSavedItem(state, { payload }: PayloadAction<any>) {
      const existingData = JSON.parse(JSON.stringify(state.savedItems));
      const newData = existingData.filter((item:any) => item?.id !== payload);
      state.savedItems = newData;
    },
  },
});

export default SavedItemsSlice.reducer;

export const { addSavedItem, removeSavedItem, replaceSavedItem } = SavedItemsSlice.actions;

export const useSavedItemsStore = (state: RootState) => state.currentSavedItems;

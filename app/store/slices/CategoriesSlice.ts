import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { ImageSourcePropType } from "react-native";

interface Props {
  availableCateories: {
    name: string;
    value: string;
    image: ImageSourcePropType;
  }[];
  activeCategory: string;
}

let INITIAL_STATE: Props = {
  availableCateories: [
    {
      name: "Burger",
      value: "burger",
      image: require("../../assets/icons/burger.png"),
    },
    {
      name: "Veggies",
      value: "veggies",
      image: require("../../assets/icons/veggie.png"),
    },
    {
      name: "Pizza",
      value: "pizza",
      image: require("../../assets/icons/pizza.png"),
    },
    {
      name: "Ice Cream",
      value: "icecream",
      image: require("../../assets/icons/icecream.png"),
    },
    {
      name: "Meat",
      value: "meat",
      image: require("../../assets/icons/meat.png"),
    },
  ],
  activeCategory: "burger",
};

const CategoriesSlice = createSlice({
  name: "CategoriesSlice",
  initialState: INITIAL_STATE,
  reducers: {
    setAvailableCateories(state, { payload }: PayloadAction<any>) {
      const existingData = JSON.parse(JSON.stringify(state.availableCateories));
      const newData = [...existingData, payload];
      state.availableCateories = newData;
    },
    // setUserSelectedSkills(state, { payload }: PayloadAction<any>) {
    //   if (!Array.isArray(payload) && typeof payload === "object") {
    //     payload = [payload];
    //   }
    //   const existingData = JSON.parse(
    //     JSON.stringify(state.availableCodingSkills)
    //   );
    //   const newData = [...existingData, ...payload];
    //   state.userSelectedSkills = newData;
    // },
    setActiveCategory(state, { payload }: PayloadAction<any>) {
      state.activeCategory = payload;
    },
  },
});

export default CategoriesSlice.reducer;

export const { setActiveCategory, setAvailableCateories } =
  CategoriesSlice.actions;

export const useCategoriesStore = (state: RootState) => state.currentCategories;

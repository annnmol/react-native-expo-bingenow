import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../../../store";
import {
  setActiveCategory,
  useCategoriesStore,
} from "../../../store/slices/CategoriesSlice";
import AppText from "../../components/AppText";
import CategoryListingCard from "./CategoryListingCard";

interface Props {}

const CategoriesListingSection: React.FC<Props> = ({}) => {
  const dispatch = useAppDispatch();
  const { availableCateories, activeCategory } =
    useAppSelector(useCategoriesStore);
  return (
    <View>
      <AppText>CategoriesListingSection</AppText>
      <FlatList
        data={availableCateories}
        renderItem={({ item, index }) => {
          return (
            <CategoryListingCard
              image={item?.image}
              isActive={item.value === activeCategory}
              onPress={() => dispatch(setActiveCategory(item.value))}
            />
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => (
          <View style={{ backgroundColor: "transparent", height: 28 }} />
        )}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        numColumns={3}
      />
    </View>
  );
};

export default CategoriesListingSection;

const styles = StyleSheet.create({});

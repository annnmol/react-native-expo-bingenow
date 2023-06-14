import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "../../components/AppText";
import CategoryCard from "./CategoryCard";
import {
  setActiveCategory,
  useCategoriesStore,
} from "../../../store/slices/CategoriesSlice";
import { useAppDispatch, useAppSelector } from "../../../store";

interface Props {}

const CategoriesSection: React.FC<Props> = ({}) => {
  const dispatch = useAppDispatch();
  const { availableCateories, activeCategory } =
    useAppSelector(useCategoriesStore);
  return (
    <View>
      <AppText>CategoriesSection</AppText>
      <FlatList
        data={availableCateories}
        renderItem={({ item, index }) => {
          return (
            <CategoryCard
              image={item?.image}
              isActive={item.value === activeCategory}
              onPress={() => dispatch(setActiveCategory(item.value))}
            />
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => (
          <View style={{ backgroundColor: "transparent", width: 10 }} />
        )}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
};

export default CategoriesSection;

const styles = StyleSheet.create({});

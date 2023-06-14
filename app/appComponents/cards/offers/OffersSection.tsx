import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "../../components/AppText";
import OfferCard from "./OfferCard";
import {
  setActiveCategory,
  useCategoriesStore,
} from "../../../store/slices/CategoriesSlice";
import { useAppDispatch, useAppSelector } from "../../../store";

interface Props {}

const OffersSection: React.FC<Props> = ({}) => {
  const dispatch = useAppDispatch();
  const { availableCateories, activeCategory } =
    useAppSelector(useCategoriesStore);
  return (
    <View>
      <AppText>OffersSection</AppText>
      <FlatList
        data={availableCateories}
        renderItem={({ item, index }) => {
          return (
            <OfferCard
              image={item?.image}
              isActive={item.value === activeCategory}
              onPress={() => dispatch(setActiveCategory(item.value))}
            />
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => (
          <View style={{ backgroundColor: "transparent", width: 16 }} />
        )}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
};

export default OffersSection;

const styles = StyleSheet.create({});

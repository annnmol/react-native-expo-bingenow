import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import CategoriesSection from "../../appComponents/cards/categories/CategoriesSection";
import AppButton from "../../appComponents/components/AppButton";
import AppSafeViewScreen from "../../appComponents/components/AppSafeViewScreen";
import AppText from "../../appComponents/components/AppText";
import { useFirebaseDBService } from "../../services/firebase";
import { colors } from "../../themes";
import { authUserStore } from "../../store/slices/AuthUserSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  replaceSavedItem,
  useSavedItemsStore,
} from "../../store/slices/SavedItemsSlice";

const FavoritesScreen = () => {
  const { authUser } = useAppSelector(authUserStore);
  const dispatch = useAppDispatch();

  const { getFirebase } = useFirebaseDBService();
  const { savedItems } = useAppSelector(useSavedItemsStore);
  const getSavedItems = () => {
    getFirebase(`savedMovies`)
      .then((res) => {
        dispatch(replaceSavedItem(res));
      })
      .catch((err) => {
        console.warn("err", err);
      });
  };

  useEffect(() => {
    getSavedItems();
  }, []);

  return (
    <AppSafeViewScreen>
      <AppText>Favorites</AppText>

      {savedItems?.map((item, index) => {
        // console.log("item", item)
        return (
          <View key={index}>
            <AppText>{item?.title}</AppText>
          </View>
        );
      })}

      <CategoriesSection />
      {/* <OffersSection/>
      <CategoriesListingSection/>
      <SearchSection/> */}
      {/* <View
        style={{ height: 100, width: 200, backgroundColor: colors.bgColor50 }}
      />
      <View
        style={{ height: 100, width: 200, backgroundColor: colors.bgColor100 }}
      />
      <View
        style={{ height: 100, width: 200, backgroundColor: colors.bgColor300 }}
      />
      <View
        style={{ height: 100, width: 200, backgroundColor: colors.bgColor500 }}
      />
      <View
        style={{ height: 100, width: 200, backgroundColor: colors.bgColor700 }}
      />
      <View
        style={{ height: 100, width: 200, backgroundColor: colors.bgColor900 }}
      />
      <View
        style={{ height: 100, width: 200, backgroundColor: colors.bgColor }}
      /> */}
    </AppSafeViewScreen>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({});

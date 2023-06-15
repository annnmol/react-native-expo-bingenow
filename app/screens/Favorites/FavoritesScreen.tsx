import React, { useEffect } from "react";
import { StyleSheet, ToastAndroid } from "react-native";
import ThreeByThreeSection from "../../appComponents/cards/threeByThree/ThreeByThreeSection";
import AppSafeViewScreen from "../../appComponents/components/AppSafeViewScreen";
import { useFirebaseDBService } from "../../services/firebase";
import { useAppDispatch, useAppSelector } from "../../store";
import { authUserStore } from "../../store/slices/AuthUserSlice";
import {
  replaceSavedItem,
  useSavedItemsStore,
} from "../../store/slices/SavedItemsSlice";

const FavoritesScreen = () => {
  const { authUser } = useAppSelector(authUserStore);
  const dispatch = useAppDispatch();
  const [pageNumber, setPageNumber] = React.useState<number>(1);
  const [hasMoreData, setHasMoreData] = React.useState<boolean>(true);
  const [isDataLoading, setIsDataLoading] = React.useState<boolean>(false);
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

  const handleFetchMore = () => {
    if (!hasMoreData) {
      ToastAndroid.show("No more data to fetch", ToastAndroid.SHORT);
      return;
    }
    if (savedItems?.length >= 180) {
      setHasMoreData(false);
      return;
    }
  };

  const handleRefresh = () => {
    // console.log("refresh page");
    // getMoreData(1);
    // setPageNumber(1);
    return;
  };

  return (
    <AppSafeViewScreen>
      <ThreeByThreeSection
        data={savedItems}
        title="Favroites"
        handleFetchMore={handleFetchMore}
        handleRefresh={handleRefresh}
        isLoading={isDataLoading}
      />
    </AppSafeViewScreen>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({});

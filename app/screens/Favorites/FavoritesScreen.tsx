import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import CategoriesSection from "../../appComponents/cards/categories/CategoriesSection";
import AppButton from "../../appComponents/components/AppButton";
import AppSafeViewScreen from "../../appComponents/components/AppSafeViewScreen";
import AppText from "../../appComponents/components/AppText";
import { useFirebaseDBService } from "../../services/firebase";
import { colors } from "../../themes";
import { authUserStore } from "../../store/slices/AuthUserSlice";
import { useAppSelector } from "../../store";

const FavoritesScreen = () => {
  const { authUser } = useAppSelector(authUserStore);

  const { getFirebase, postFirebase, deleteFirebase, updateFirebase } =
    useFirebaseDBService();
  const [savedItems, setSavedItems] = React.useState<any[]>([]);
  const getSavedItems = () => {
    getFirebase(`savedJobs`)
      .then((res) => {
        console.log("get res", res);
        setSavedItems(res);
      })
      .catch((err) => {
        console.warn("err", err);
      });
  };

  const addSavedItems = () => {
    let data = {
      title: "Singh Anmol",
      created_on: new Date(Date.now()),
    };
    postFirebase("savedJobs", data)
      .then((res) => {
        console.log("res post", res);
        getSavedItems();
      })
      .catch((err) => {
        console.warn("err", err);
      });
  };
  const deleteSavedItem = (id: string) => {
    deleteFirebase("savedJobs", id)
      .then((res) => {
        console.log("res delte", res);
        getSavedItems();
      })
      .catch((err) => {
        console.warn("err", err);
      });
  };

  const updateSavedItem = (item: any) => {
    let data = {
      title: "udpate hogya",
      created_on: new Date(Date.now()),
    };
    updateFirebase("savedJobs", item?.id, data)
      .then((res) => {
        console.log("res delte", res);
        getSavedItems();
      })
      .catch((err) => {
        console.warn("err", err);
      });
  };

  useEffect(() => {
    // getSavedItems();
  }, []);

  return (
    <AppSafeViewScreen>
      <AppText>Favorites</AppText>

      {/* <AppButton onPress={() => addSavedItems()}>Add Item</AppButton>
      {savedItems?.map((item, index) => {
        return (
          <View key={index}>
            <AppText>
              {" "}
              {item?.title} {item.id}, uid:{" "}
              {item?.uid === authUser?.uid ? "true" : "false"}
            </AppText>
            <AppButton onPress={() => deleteSavedItem(item.id)}>
              Delete item
            </AppButton>

            <AppButton onPress={() => updateSavedItem(item)}>
              update item
            </AppButton>
          </View>
        );
      })} */}

      <CategoriesSection />
      {/* <OffersSection/>
      <CategoriesListingSection/>
      <SearchSection/> */}
      <View
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
      />
    </AppSafeViewScreen>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({});

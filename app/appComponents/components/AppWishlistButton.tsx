import React, { useEffect } from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  addSavedItem,
  removeSavedItem,
  replaceSavedItem,
  useSavedItemsStore,
} from "../../store/slices/SavedItemsSlice";
import { colors } from "../../themes";
import AppExpoIcons from "../icons/AppExpoIcons";
import AppIconButton from "../icons/AppIconButton";
import { useFirebaseDBService } from "../../services/firebase";

interface Props {
  style?: StyleProp<ViewStyle>;
  item: any;
}

const AppWishlistButton: React.FC<Props> = ({ style, item }) => {
  const dispatch = useAppDispatch();

  const { postFirebase, deleteFirebase, getFirebase } = useFirebaseDBService();
  const { savedItems } = useAppSelector(useSavedItemsStore);
  const [isActive, setIsActive] = React.useState<boolean>(false);

  useEffect(() => {
    const found = savedItems?.find((i: any) => i?.id === item?.id);
    if (found) {
      setIsActive(true);
    }
  }, [savedItems]);

  const handleClick = (item: any) => {
    if (isActive) {
      deleteSavedItem(item?.id);
    } else {
      createSavedItem(item);
    }
  };

  const getSavedItems = () => {
    getFirebase(`savedMovies`)
      .then((res) => {
        dispatch(replaceSavedItem(res));
      })
      .catch((err) => {
        console.warn("err", err);
      });
  };

  const createSavedItem = (item: any) => {
    let data = {
      ...item,
      created_on: new Date(Date.now()),
    };

    postFirebase("savedMovies", data)
      .then((res) => {
        getSavedItems();
        setIsActive(true);
        console.log("res post", res);
      })
      .catch((err) => {
        console.warn("err", err);
      });
  };

  const deleteSavedItem = (id: string) => {
    const reduxFirebaseItem = savedItems?.find((i: any) => i?.id === item?.id);
    if (!reduxFirebaseItem?.firebaseId) {
      dispatch(removeSavedItem(id));
      setIsActive(false);

      return;
    }
    deleteFirebase("savedMovies", reduxFirebaseItem?.firebaseId)
      .then((res) => {
        getSavedItems();
        setIsActive(false);
      })
      .catch((err) => {
        console.warn("err", err);
      });
  };

  return (
    <AppIconButton
      style={[
        styles.iconBtn,
        // { backgroundColor: isActive ? colors.bgColor500 : "transparent" },
        style && style,
      ]}
      onPress={() => handleClick(item)}
    >
      <AppExpoIcons
        name={isActive ? "favorite" : "favorite-outline"}
        size={20}
        color={isActive ? colors.light600 : colors.light600}
      />
    </AppIconButton>
  );
};

export default AppWishlistButton;

const styles = StyleSheet.create({
  iconBtn: {
    // position: "absolute",
    zIndex: 1,
    width: 36,
    height: 36,
    borderRadius: 8,
    // backgroundColor: colors.light100,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});

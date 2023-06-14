import React, { useEffect } from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  addSavedItem,
  removeSavedItem,
  useSavedItemsStore,
} from "../../store/slices/SavedItemsSlice";
import { colors } from "../../themes";
import AppExpoIcons from "../icons/AppExpoIcons";
import AppIconButton from "../icons/AppIconButton";

interface Props {
  style?: StyleProp<ViewStyle>;
  item: any;
}

const AppWishlistButton: React.FC<Props> = ({ style, item }) => {
  const dispatch = useAppDispatch();
  const { savedItems } = useAppSelector(useSavedItemsStore);
  const [isActive, setIsActive] = React.useState<boolean>(false);

  useEffect(() => {
    const found = savedItems?.find((i: any) => i?.id === item?.id);
    if (found) {
      setIsActive(true);
    }
  }, [savedItems]);

  const handleClick = () => {
    if (isActive) {
      dispatch(removeSavedItem(item?.id));
      setIsActive(false);
    } else {
      dispatch(addSavedItem(item));
      setIsActive(true);
    }
  };

  return (
    <AppIconButton
      style={[
        styles.iconBtn,
        { backgroundColor: isActive ? colors.bgColor500 : "transparent" },
        style && style,
      ]}
      onPress={() => handleClick()}
    >
      <AppExpoIcons
        name={isActive ? "favorite" : "favorite-outline"}
        size={20}
        color={isActive ? colors.light100 : colors.dark600}
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
    backgroundColor: colors.light100,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});

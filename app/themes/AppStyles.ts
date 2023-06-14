import { StyleSheet } from "react-native";
import constants from "./constants";

export const AppStyles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: constants.appBackgroundColor,
    width: constants.windowWidth,
    height: constants.windowHeight,

    paddingHorizontal: constants.paddingHorizontalApp,
    paddingVertical: constants.paddingVerticalApp,
    overflow: "hidden",
  },

  styledIconButton: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    overflow: "hidden",
  },

  backgroundGradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
    zIndex: 1,
  },
});

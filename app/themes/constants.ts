import { Dimensions, Platform, StatusBar } from "react-native";
import colors from "./colors";

const constants = {
  paddingHorizontalApp: 16,
  paddingVerticalApp: 16,
  marginHorizontalApp: 16,
  marginVerticalApp: 16,

  appBackgroundColor: colors.bgColor50,
  statusBarStyle: Platform.OS === "ios" ? "dark-content" : "light-content",
  statusBarBackgroundColor: "#ffffff",
  statusBarHeight: Platform.OS === "ios" ? 20 : StatusBar.currentHeight,
  windowWidth: Dimensions.get("window").width,
  windowHeight: Dimensions.get("window").height,
};

export default constants;

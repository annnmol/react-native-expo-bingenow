import { Dimensions, Platform, StatusBar } from "react-native";
import { getContrastTextColorHex } from "../utils";

const theme: ThemeProps = {
  palette: {
    primary: {
      main: "#1C58F2",
      light: "#7986cb",
      dark: "#303f9f",
      contrastText: getContrastTextColorHex("#1C58F2"),
    },
    secondary: {
      main: "#f50057",
      light: "#ff4081",
      dark: "#c51162",
      contrastText: getContrastTextColorHex("#f50057"),
    },
    default: {
      black: "#000000",
      white: "#ffffff",
      whiteLight: "#f2f2f2",
      text: "#212121",
      textBody: "#757575",
      grey: " #CBCDD3",
      darkGrey: "#7E8392",
    },
    error: {
      main: "#f44336",
      light: "#e57373",
      dark: "#d32f2f",
      backgroundColor: "rgba(255, 0, 0, 0.01)",
    },
    success: {
      main: "#4caf50",
      light: "#81c784",
      dark: "#388e3c",
      backgroundColor: "rgba(0, 128, 0, 0.04)",
    },
    info: {
      main: "#2196f3",
      light: "#64b5f6",
      dark: "#1976d2",
    },
    grey: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#d5d5d5",
      A200: "#aaaaaa",
      A400: "#303030",
      A700: "#616161",
    },
  },
  typography: {
    fontFamily: "Roboto",
    fontSizeTitle: 24,
    fontSizeSubTitle: 20,
    fontSizeBody1: 16,
    fontSizeBody2: 14,
    fontSizeCaption: 12,
  },
  global: {
    active: "rgba(0, 0, 0, 0.54)",
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    selected: "rgba(0, 0, 0, 0.08)",
    disabled: "rgba(0, 0, 0, 0.26)",
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
    selectedOpacity: 0.08,

    paddingHorizontalApp: 16,
    paddingVerticalApp: 16,
    marginHorizontalApp: 16,
    marginVerticalApp: 16,

    appBackgroundColor: "#ffffff",
    statusBarStyle: Platform.OS === "ios" ? "dark-content" : "light-content",
    statusBarBackgroundColor: "#ffffff",
    statusBarHeight: Platform.OS === "ios" ? 20 : StatusBar.currentHeight,
    windowWidth: Dimensions.get("window").width,
    windowHeight: Dimensions.get("window").height,
  },
};

// export default theme;




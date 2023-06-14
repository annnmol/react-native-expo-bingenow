interface ThemeProps {
  palette: {
    primary: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    secondary: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    default: {
      black: string;
      white: string;
      whiteLight:string,
      text: string;
      textBody: string;
      grey: string;
      darkGrey: string;
    };
    error: {
      main: string;
      light: string;
      dark: string;
      backgroundColor: string;
    };
    success: {
      main: string;
      light: string;
      dark: string;
      backgroundColor: string;
    };
    info: {
      main: string;
      light: string;
      dark: string;
    };
    grey: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      A100: string;
      A200: string;
      A400: string;
      A700: string;
    };
  };
  typography: {
    fontFamily: string;
    fontSizeTitle: number;
    fontSizeSubTitle: number;
    fontSizeBody1: number;
    fontSizeBody2: number;
    fontSizeCaption: number;
  };
  global: {
    active: string;
    hover: string;
    hoverOpacity: number;
    selected: string;
    disabled: string;
    disabledBackground: string;
    disabledOpacity: number;
    focus: string;
    focusOpacity: number;
    activatedOpacity: number;
    selectedOpacity: number;

    statusBarStyle: string;
    statusBarBackgroundColor: string;
    statusBarHeight: number;
    windowWidth:number;
    windowHeight:number;
    appBackgroundColor: string;
    paddingHorizontalApp: number;
    paddingVerticalApp: number;
    marginHorizontalApp: number;
    marginVerticalApp: number;
  };
}

const COLOR_SCHEME_NUMBER = 6;

const getContrastTextColorRgb = (rbg: string) => {
  const [r, g, b, a] = rbg.match(/\d+/g).map(Number);
  // Get YIQ ratio
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  const color = yiq >= 128 ? "#282828" : "#f1f1f1";
  // Check contrast
  return color;
};

const pallete = [
  {
    // blue
    text: "rgba(10, 77, 166, 1)",
    bgColor: `rgba(10, 77, 166, 1)`,
    bgColor50: `rgba(10, 77, 166, 0.025)`,
    bgColor100: `rgba(10, 77, 166, 0.1)`,
    bgColor300: `rgba(10, 77, 166, 0.3)`,
    bgColor500: `rgba(10, 77, 166, 0.5)`,
    bgColor700: `rgba(10, 77, 166, 0.7)`,
    bgColor900: `rgba(10, 77, 166, 0.85)`,
    contrastText: getContrastTextColorRgb(`rgb(10, 77, 166)`),
  },
  {
    // orange
    text: "rgba(251, 146, 60, 1)",
    bgColor: `rgba(251, 146, 60, 1)`,
    bgColor50: `rgba(251, 146, 60, 0.05)`,
    bgColor100: `rgba(251, 146, 60, 0.1)`,
    bgColor300: `rgba(251, 146, 60, 0.3)`,
    bgColor500: `rgba(251, 146, 60, 0.5)`,
    bgColor700: `rgba(251, 146, 60, 0.7)`,
    bgColor900: `rgba(251, 146, 60, 0.85)`,
    contrastText: getContrastTextColorRgb(`rgb(251, 146, 60)`),
  },
  {
    // dark grey
    text: "rgba(30, 41, 59, 1)",
    bgColor: `rgba(30, 41, 59, 1)`,
    bgColor50: `rgba(30, 41, 59, 0.05)`,
    bgColor100: `rgba(30, 41, 59, 0.1)`,
    bgColor300: `rgba(30, 41, 59, 0.3)`,
    bgColor500: `rgba(30, 41, 59, 0.5)`,
    bgColor700: `rgba(30, 41, 59, 0.7)`,
    bgColor900: `rgba(30, 41, 59, 0.85)`,
    contrastText: getContrastTextColorRgb(`rgb(30, 41, 59)`),
  },
  {
    // purple
    text: "rgba(167, 139, 250, 1)",
    bgColor: `rgba(167, 139, 250, 1)`,
    bgColor50: `rgba(167, 139, 250, 0.05)`,
    bgColor100: `rgba(167, 139, 250, 0.1)`,
    bgColor300: `rgba(167, 139, 250, 0.3)`,
    bgColor500: `rgba(167, 139, 250, 0.5)`,
    bgColor700: `rgba(167, 139, 250, 0.7)`,
    bgColor900: `rgba(167, 139, 250, 0.85)`,
    contrastText: getContrastTextColorRgb("rgb(167, 139, 250)"),
  },
  {
    // green
    text: "rgba(0, 179, 89, 1)",
    bgColor: `rgba(0, 179, 89, 1)`,
    bgColor50: `rgba(0, 179, 89, 0.05)`,
    bgColor100: `rgba(0, 179, 89, 0.1)`,
    bgColor300: `rgba(0, 179, 89, 0.3)`,
    bgColor500: `rgba(0, 179, 89, 0.5)`,
    bgColor700: `rgba(0, 179, 89, 0.7)`,
    bgColor900: `rgba(0, 179, 89, 0.85)`,
    contrastText: getContrastTextColorRgb("rgb(0, 179, 89)"),
  },
  {
    // green
    text: "rgba(57, 235, 183, 1)",
    bgColor: `rgba(57, 235, 183, 1)`,
    bgColor50: `rgba(57, 235, 183, 0.05)`,
    bgColor100: `rgba(57, 235, 183, 0.1)`,
    bgColor300: `rgba(57, 235, 183, 0.3)`,
    bgColor500: `rgba(57, 235, 183, 0.5)`,
    bgColor700: `rgba(57, 235, 183, 0.7)`,
    bgColor900: `rgba(57, 235, 183, 0.85)`,
  contrastText: getContrastTextColorRgb('rgb(57, 235, 183)'),
  },

  {
    // teal
    text: "rgba(45, 212, 191, 1)",
    bgColor: `rgba(45, 212, 191, 1)`,
    bgColor50: `rgba(45, 212, 191, 0.05)`,
    bgColor100: `rgba(45, 212, 191, 0.1)`,
    bgColor300: `rgba(45, 212, 191, 0.3)`,
    bgColor500: `rgba(45, 212, 191, 0.5)`,
    bgColor700: `rgba(45, 212, 191, 0.7)`,
    bgColor900: `rgba(45, 212, 191, 0.85)`,
    contrastText: getContrastTextColorRgb("rgb(45, 212, 191)"),
  },

  {
    // red
    text: "rgba(248, 113, 113, 1)",
    bgColor: `rgba(248, 113, 113, 1)`,
    bgColor50: `rgba248, 113, 113,, 0.05)`,
    bgColor100: `rgba(248, 113, 113, 0.1)`,
    bgColor300: `rgba(248, 113, 113, 0.3)`,
    bgColor500: `rgba(248, 113, 113, 0.5)`,
    bgColor700: `rgba(248, 113, 113, 0.7)`,
    bgColor900: `rgba(248, 113, 113, 0.85)`,
    contrastText: getContrastTextColorRgb("rgb(248, 113, 113)"),
  },
];

const colors = {
  ...pallete[COLOR_SCHEME_NUMBER],
  // primary100: "#042959",
  // primary200: "#0A4DA6",
  // primary300: "#2c7ce6",
  // primary400: "#79C4F2",
  // primary500: "#c7e3f0",
  // primary600: "#E2EEFE",

  //dark
  dark100: "#121212",
  dark200: "#282828",
  dark300: "#3f3f3f",
  dark400: "#575757",
  dark500: "#717171",
  dark600: "#8b8b8b",
  //light
  light100: "#f1f1f1",
  light200: "#f3f3f3",
  light300: "#f4f4f4",
  light400: "#f6f6f6",
  light500: "#f7f7f7",
  light600: "#f9f9f9",

  //other
  error: "#fb2349",
  success: "#2d5e44",
  warning: "#dab801",
};

export default colors;

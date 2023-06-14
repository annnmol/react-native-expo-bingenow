import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import { colors } from "../../themes";


export const StyledForms = StyleSheet.create({
  StyledForm: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    gap: 12,
  },

  errorText: {
    color: "#f34e4e",
    fontSize: 14,
    marginLeft: 2,
  },

  labelText: {
    color: colors.dark200,
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.5,
  },

  formControl: {
    flexDirection: "column",
    width: "100%",
    gap: 4,
  },

  inputField: {
    width: "100%",
    height: 44,
    backgroundColor: "#f5f5f5",
    borderRadius: 4,
    paddingRight: 10,
    paddingLeft: 48,
    fontSize: 15,
    paddingVertical:0,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  inputFieldFocused: {
    borderLeftWidth: 2,
    borderColor: colors.dark300,
  },
  inputFieldError: {
    borderLeftWidth: 2,
    borderColor: colors.error,
    // backgroundColor: theme.palette.error.backgroundColor,
  },
  inputFieldSuccess: {
    borderLeftWidth: 2,
    borderColor: colors.success,
    // backgroundColor: theme.palette.success.backgroundColor,
  },

  endIcon: {
    position: "absolute",
    top: 35,
    right: 8,
    zIndex: 1,
    borderRightWidth: 1,
    borderRightColor: colors.dark500,
    width: 32,
    color: colors.dark500,
  },

  leftIcon: {
    position: "absolute",
    top: 35,
    left: 8,
    zIndex: 1,
    borderRightWidth: 1,
    borderRightColor: colors.dark500,
    width: 32,
    color: colors.dark500,
  },

  leftIconError: {
    color: colors.error,
  },
  leftIconSuccess: {
    color: colors.success,
  },

  submitBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.bgColor,
    width: 300,
    marginVertical: 6,
  },
  submitBtnDisabled: {
    backgroundColor: colors.dark500,
  },

  submitBtnText: {
    color: colors.light100,
    fontSize: 16,
  },

  switchField: {
    width: "15%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

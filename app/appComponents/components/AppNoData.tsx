import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { colors, constants } from "../../themes";
import AppExpoIcons from "../icons/AppExpoIcons";
import AppText from "./AppText";

interface Props {
  style?: StyleProp<ViewStyle>;
}

const AppNoData: React.FC<Props> = ({ style }) => {
  return (
    <View style={[styles.container, style && style]}>
      <AppExpoIcons
        name={"timer-sand-empty"}
        size={20}
        color={colors.dark600}
      />
      <AppText
        numberOfLines={2}
        style={{ textAlign: "center", lineHeight: 24 }}
      >
        Oopsie-doodle! Looks like the data went on vacation and forgot to come
        back. 🏝️🤷‍♂️
      </AppText>
    </View>
  );
};

export default AppNoData;

const styles = StyleSheet.create({
  container: {
    padding: constants.paddingHorizontalApp,
    width: constants.windowWidth,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    gap: 12,
  },
});

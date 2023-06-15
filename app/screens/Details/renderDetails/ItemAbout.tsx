import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../../../appComponents/components/AppText";
import { colors, constants, typography } from "../../../themes";

interface Props {
  about: string;
  title: string;
}

const ItemAbout: React.FC<Props> = ({ about, title = "Summary" }) => {
  return (
    <View style={styles.container}>
      <AppText style={styles.title}>{title}:</AppText>
      <AppText style={styles.captionText}>{about}</AppText>
    </View>
  );
};

export default ItemAbout;

const styles = StyleSheet.create({
  container: {
    width: constants.windowWidth,
    paddingHorizontal: constants.paddingHorizontalApp ,
    gap: 2,
  },
  title: {
    fontSize: typography.text1REM,
    color: colors.dark300,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  captionText: {
    fontSize: typography.textR,
    lineHeight: 24,
    textAlign: "left",
  },
});

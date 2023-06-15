import React from "react";
import { ImageSourcePropType, StyleSheet, View } from "react-native";
import AppFastImage from "../../../appComponents/components/AppFastImage";
import AppText from "../../../appComponents/components/AppText";
import { colors, constants, typography } from "../../../themes";

import { AppStyles } from "../../../themes/AppStyles";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
  image: ImageSourcePropType;
  title: string;
  tagLine?: string;
  caption1?: string;
  caption2?: string;
  caption3?: string;
  caption4?: string;
  caption5?: string;
  caption6?: string;
}

const ItemInfo: React.FC<Props> = ({
  title,
  image,
  tagLine,
  caption1,
  caption2,
  caption3,
  caption4,
  caption5,
  caption6,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <LinearGradient
          colors={["rgba(0,0,0,0.1)", "transparent", "rgba(0,0,0,0.8)"]}
          style={AppStyles.backgroundGradient}
        />
        <AppFastImage source={image} style={styles.image} contentFit="fill" />
        <View style={styles.titleBox}>
          <AppText style={styles.title} numberOfLines={2}>
            {title}
          </AppText>
          <AppText style={styles.tagLine} numberOfLines={2}>
            {tagLine}
          </AppText>
        </View>
      </View>
      <View style={styles.infoBox}>
        
        <AppText style={styles.captionText} numberOfLines={2}>
          {caption1}
        </AppText>
        <AppText style={styles.captionText} numberOfLines={2}>
          {caption2}
        </AppText>
        <AppText style={styles.captionText} numberOfLines={2}>
          {caption3}
        </AppText>
        <AppText style={styles.captionText} numberOfLines={2}>
          {caption4}
        </AppText>
        <AppText style={styles.captionText} numberOfLines={2}>
          {caption5}
        </AppText>
        <AppText style={styles.captionText} numberOfLines={2}>
          {caption6}
        </AppText>
      </View>
    </View>
  );
};

export default ItemInfo;

const styles = StyleSheet.create({
  container: {
    width: constants.windowWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: constants.windowWidth,
    height: constants.windowHeight / 2.5,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  titleBox: {
    width: "80%",
    position: "absolute",
    bottom: 6,
    zIndex: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: colors.light100,
    textAlign: "center",
  },
  tagLine: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.light100,
    textAlign: "center",
  },

  infoBox: {
    width: constants.windowWidth / 1.2,
    paddingHorizontal: constants.paddingHorizontalApp,
    paddingVertical: 8,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  captionText: {
    fontSize: typography.textS,
    textAlign: "center",
  },
});

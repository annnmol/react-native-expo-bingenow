import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors, constants, typography } from "../../../themes";
import { LinearGradient } from "expo-linear-gradient";
import AppFastImage from "../../components/AppFastImage";
import { placeholderImage } from "../../../utils";
import { movieImageUrl500, movieImageUrlOriginal } from "../../../services/ApiService";
import AppText from "../../components/AppText";
import AppButton from "../../components/AppButton";
import AppWishlistButton from "../../components/AppWishlistButton";
interface Props {
  item: any;
  onPress: (item: any) => void;
  ctaBtnText?: string;
}

const SliderCard: React.FC<Props> = ({ item, onPress, ctaBtnText = "Watch Now", }) => {
  return (
    <View style={styles.sliderWrapper}>
      <LinearGradient
        colors={[
          "rgba(0,0,0,0.5)",
          "rgba(0,0,0,0.2)",
          "transparent",
          "rgba(0,0,0,0.7)",
          "rgba(0,0,0,0.9)",
        ]}
        style={styles.backgroundGradient}
      />
      <TouchableOpacity disabled={true} style={styles.touchable}>
        <AppFastImage
          source={
            movieImageUrl500(item?.backdrop_path) ?? placeholderImage
          }
          style={styles.image}
        />
      </TouchableOpacity>

      <View style={styles.cardInfoWrapper}>
        <AppText style={styles.title} numberOfLines={1}>
          {item?.title}
        </AppText>
        <AppText style={styles.caption} numberOfLines={2}>
          {item?.overview}
        </AppText>
        <View style={styles.buttonWrapper}>
          <AppButton
            style={styles.ctaButton}
            textStyle={{ fontSize: 14 }}
            onPress={() => {
              onPress(item);
            }}
          >
            {ctaBtnText}
          </AppButton>
          {/* <AppWishlistButton item={item} style={{ width: 28, height: 28 }} /> */}
        </View>
      </View>
    </View>
  );
};

export default SliderCard;

const styles = StyleSheet.create({
  sliderWrapper: {
    width: constants.windowWidth,
    height: constants.windowHeight / 2.7,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  touchable: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  backgroundGradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
    zIndex: 1,
  },

  cardInfoWrapper: {
    width: constants.windowWidth,
    justifyContent: "flex-end",
    gap: 12,
    position: "absolute",
    zIndex: 2,
    bottom: 24,
    paddingHorizontal: 20,
    paddingVertical: 4,
  },

  buttonWrapper: {
    flexDirection: "row",
    gap: 10,
    height: 28,
    justifyContent: "flex-start",
    alignItems: "center",
    overflow: "hidden",
  },
  ctaButton: {
    backgroundColor: colors.bgColor900,
    width: 110,
    height: 28,
    borderRadius: 8,
  },
  title: {
    fontSize: typography.textM,
    fontWeight: "500",
    lineHeight: 22,
    letterSpacing: 1,
    color: colors.light100,
  },
  caption: {
    fontSize: typography.textES,
    marginTop: -12,
    fontWeight: "400",
    letterSpacing: 0.5,
    color: colors.light600,
  },
});

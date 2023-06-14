import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  FlatList,
  Image,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { colors, constants, typography } from "../../themes";
import { placeholderImage } from "../../utils";
import AppExpoIcons from "../icons/AppExpoIcons";
import AppIconButton from "../icons/AppIconButton";
import AppButton from "./AppButton";
import AppText from "./AppText";
import { movieImageUrl500, movieImageUrlOriginal } from "../../services/ApiService";

interface Props {
  data: any[];
  showPagination?: boolean;
  onPress: (item: any) => void;
  onPressSecondayBtn: (item: any) => void;
  ctaBtnText?: string;
  renderItem?: (item: any) => JSX.Element;
}

const AppSlider: React.FC<Props> = ({
  data,
  onPressSecondayBtn,
  onPress,
  ctaBtnText = "Watch Now",
  showPagination = true,
}) => {
  const flatlistRef = React.useRef<any>(null);
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const goToNextSlide = () => {
    flatlistRef.current.scrollToIndex({
      index: currentIndex + 1 >= data.length ? 0 : currentIndex + 1,
      animated: true,
    });
  };

  return (
    <View style={[styles.container]}>
      <FlatList
        data={data}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={(e) => {
          const x = e.nativeEvent.contentOffset.x;
          let foundIndex = Math.round(x / constants.windowWidth);
          setCurrentIndex(foundIndex);
        }}
        horizontal
        ref={flatlistRef}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
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
                <Image
                  source={{ uri: movieImageUrlOriginal(item?.backdrop_path) ?? placeholderImage }}
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
                  <AppIconButton
                    onPress={() => {
                      onPressSecondayBtn(item);
                    }}
                  >
                    <AppExpoIcons
                      name="plus"
                      size={16}
                      color={colors.light100}
                    />
                  </AppIconButton>
                </View>
              </View>
            </View>
          );
        }}
      />

      <View style={styles.paginationWrapper}>
        {data.map((item, index) => {
          return (
            <View
              key={index.toString()}
              style={[
                styles.paginationDot,
                currentIndex == index && styles.activePaginationDot,
              ]}
            />
          );
        })}
      </View>
    </View>
  );
};

export default AppSlider;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: -16,
    alignItems: "center",
    position: "relative",
  },

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
  paginationWrapper: {
    flexDirection: "row",
    width: constants.windowWidth,
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    position: "absolute",
    bottom: 10,
  },

  activePaginationDot: {
    width: 20,
    backgroundColor: colors.light100,
  },
  paginationDot: {
    width: 5,
    height: 2,
    borderRadius: 4,
    backgroundColor: colors.dark600,
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
    gap: 20,
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

import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { colors, constants } from "../../../themes";

import { useNavigation } from "@react-navigation/native";
import { ROUTES_NAMES } from "../../../navigation/Routes";
import SliderCard from "./SliderCard";
import AppActivityIndicator from "../../loaders/AppActivityIndicator";
import AppNoData from "../../components/AppNoData";

interface Props {
  data: any[];
  isLoading?: boolean;
  showPagination?: boolean;
}

const AppSlider: React.FC<Props> = ({ data, showPagination = true, isLoading=false }) => {
  const navigation = useNavigation<any>();

  const flatlistRef = React.useRef<any>(null);
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);

  const goToNextSlide = () => {
    flatlistRef.current.scrollToIndex({
      index: currentIndex + 1 >= data.length ? 0 : currentIndex + 1,
      animated: true,
    });
  };

  const handleCardClick = (item: any) => {
    let mediaType = item?.hasOwnProperty("first_air_date") ? "tv" : "movie";
    navigation.navigate(ROUTES_NAMES.DETAILS, {
      id: item?.id,
      mediaType: mediaType,
    });
  };

  return (
    <View style={[styles.container]}>
      {!isLoading ? (
        <FlatList
          data={data}
          ListEmptyComponent={<AppNoData/>}
          initialNumToRender={10}
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
              <SliderCard
                onPress={() => handleCardClick(item)}
                ctaBtnText={"Watch Now"}
                item={item}
                key={index}
              />
            );
          }}
        />
      ) : (
        <AppActivityIndicator
          style={{ height: constants.windowHeight / 2.7 }}
          showText={true}
        />
      )}

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
    alignItems: "center",
    position: "relative",
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
});

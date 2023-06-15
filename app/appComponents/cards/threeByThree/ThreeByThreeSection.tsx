import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { ROUTES_NAMES } from "../../../navigation/Routes";
import { movieImageUrl500 } from "../../../services/ApiService";
import { colors, constants, typography } from "../../../themes";
import { placeholderImage } from "../../../utils";
import AppExpoIcons from "../../icons/AppExpoIcons";
import AppIconButton from "../../icons/AppIconButton";
import AppActivityIndicator from "../../loaders/AppActivityIndicator";
import ThreeByThreeCard from "./ThreeByThreeCard";
import AppNoData from "../../components/AppNoData";

interface Props {
  data: any[];
  title?: string;
  isLoading?: boolean;
  handleFetchMore: () => void;
  handleRefresh: () => void;
}

const ThreeByThreeSection: React.FC<Props> = ({
  data,
  title = "Trending",
  isLoading = false,
  handleFetchMore,
  handleRefresh,
}) => {
  const navigation = useNavigation<any>();

  // const handleFetchMore = () => {
  //   console.log("pageChanged")
  // };

  const handleCardClick = (item: any) => {
    let mediaType = item?.hasOwnProperty("first_air_date") ? "tv" : "movie";
    navigation.navigate(ROUTES_NAMES.DETAILS, {
      id: item?.id,
      mediaType: mediaType,
    });
  };

  // return null;
  return (
    <View style={[styles.container]}>
      {data?.length > 0 ? (
        <FlatList
          data={data}
          ListEmptyComponent={<AppNoData />}
          initialNumToRender={10}
          snapToStart={true}
          snapToAlignment={"center"}
          numColumns={3}
          columnWrapperStyle={{
            justifyContent: "space-between",
            paddingHorizontal: 16,
          }}
          renderItem={({ item, index }) => {
            return (
              <ThreeByThreeCard
                image={{
                  uri: movieImageUrl500(item?.poster_path) ?? placeholderImage,
                }}
                onPress={() => handleCardClick(item)}
                renderPremiumIcon={
                  item?.vote_average > 7.5 ? (
                    <AppIconButton
                      style={[
                        styles.premiumIconBtn,
                        index === 0 && {
                          marginLeft: constants.paddingHorizontalApp,
                        },
                      ]}
                      onPress={() => console.log("")}
                    >
                      <AppExpoIcons
                        name="crown-circle-outline"
                        color={colors.warning}
                        size={20}
                      />
                    </AppIconButton>
                  ) : null
                }
              />
            );
          }}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => (
            <View style={{ backgroundColor: "transparent", height: 24 }} />
          )}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          onEndReached={() => handleFetchMore()}
          onEndReachedThreshold={0.1}
          refreshing={isLoading}
          onRefresh={() => handleRefresh()}
          // horizontal
        />
      ) : (
        <AppActivityIndicator
          style={[{ height: constants.windowHeight / 2 }]}
          showText={true}
        />
      )}
    </View>
  );
};

export default ThreeByThreeSection;

const styles = StyleSheet.create({
  container: {
    gap: 8,
    position: "relative",
    paddingVertical: 8,
  },

  infoBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: typography.text1REM,
    color: colors.dark300,
    fontWeight: "600",
    letterSpacing: 0.5,
  },

  premiumIconBtn: {
    zIndex: 1,
    width: 36,
    height: 36,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    position: "absolute",
    left: 0,
    top: 0,
  },
});

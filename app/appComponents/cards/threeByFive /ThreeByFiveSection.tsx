import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { ROUTES_NAMES } from "../../../navigation/Routes";
import { movieImageUrl500 } from "../../../services/ApiService";
import { colors, constants, typography } from "../../../themes";
import { placeholderImage } from "../../../utils";
import AppText from "../../components/AppText";
import AppWishlistButton from "../../components/AppWishlistButton";
import AppExpoIcons from "../../icons/AppExpoIcons";
import AppIconButton from "../../icons/AppIconButton";
import ThreeByFiveCard from "./ThreeByFiveCard";

interface Props {
  data: any[];
  title?: string;
}

const ThreeByFiveSection: React.FC<Props> = ({ data, title = "Trending" }) => {
  const navigation = useNavigation<any>();

  const handleSeeALlBtn = () => {
    navigation.navigate(ROUTES_NAMES.DETAILS, {
      id: title,
    });
  };
  const handleCardClick = (id: string) => {
    navigation.navigate(ROUTES_NAMES.DETAILS, {
      id: id,
    });
  };

  return (
    <View style={[styles.container]}>
      <View style={[styles.infoBox]}>
        <AppText style={[styles.sectionTitle]}>{title}</AppText>
        <AppIconButton onPress={() => handleSeeALlBtn()}>
          <AppExpoIcons
            name={"chevron-right"}
            size={20}
            color={colors.dark300}
          />
        </AppIconButton>
      </View>
      <FlatList
        data={data}
        snapToStart={true}
        snapToAlignment={"center"}
        renderItem={({ item, index }) => {
          return (
            <ThreeByFiveCard
              image={{
                uri: movieImageUrl500(item?.poster_path) ?? placeholderImage,
              }}
              onPress={() => handleCardClick(item?.id)}
              style={[
                index === 0 && { marginLeft: constants.paddingHorizontalApp },
                index === data?.length - 1 && {
                  marginRight: constants.paddingHorizontalApp,
                },
              ]}
              renderSaveIcon={
                <AppWishlistButton
                  item={item}
                  style={[
                    { position: "absolute", right: 0, top: 0 },
                    index === data?.length - 1 && {
                      marginRight: constants.paddingHorizontalApp,
                    },
                  ]}
                />
              }
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
          <View style={{ backgroundColor: "transparent", width: 16 }} />
        )}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
};

export default ThreeByFiveSection;

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    gap: 8,
    position: "relative",
  },

  infoBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: constants.paddingHorizontalApp,
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

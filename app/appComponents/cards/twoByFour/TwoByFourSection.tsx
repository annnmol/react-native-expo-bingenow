import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { movieImageUrl500 } from "../../../services/ApiService";
import { useAppDispatch, useAppSelector } from "../../../store";
import { useCategoriesStore } from "../../../store/slices/CategoriesSlice";
import { colors, constants, typography } from "../../../themes";
import { placeholderImage } from "../../../utils";
import AppText from "../../components/AppText";
import AppWishlistButton from "../../components/AppWishlistButton";
import AppExpoIcons from "../../icons/AppExpoIcons";
import AppIconButton from "../../icons/AppIconButton";
import TwoByFourCard from "./TwoByFourCard";

interface Props {
  data: any[];
  onPress: (item: any) => void;
}

const TwoByFourSection: React.FC<Props> = ({ data, onPress }) => {
  const dispatch = useAppDispatch();

  const { availableCateories, activeCategory } =
    useAppSelector(useCategoriesStore);

  const handleSeeALlBtn = () => {
    console.log("seeeee all clicked");
  };

  return (
    <View style={[styles.container]}>
      <View style={[styles.infoBox]}>
        <AppText style={[styles.sectionTitle]}>FourBySixSection</AppText>
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
            <TwoByFourCard
              image={{
                uri: movieImageUrl500(item?.poster_path) ?? placeholderImage,
              }}
              onPress={() => onPress(item)}
              style={
                index === 0 && { marginLeft: constants.paddingHorizontalApp }
              }
              renderItem={
                <AppWishlistButton
                  item={item}
                  style={{ position: "absolute", right: 0, top: 0 }}
                />
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

export default TwoByFourSection;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: -16,
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
  },
});

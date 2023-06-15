import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { ROUTES_NAMES } from "../../../navigation/Routes";
import { movieImageUrl500 } from "../../../services/ApiService";
import { colors, constants, typography } from "../../../themes";
import { placeholderImage } from "../../../utils";
import AppNoData from "../../components/AppNoData";
import AppText from "../../components/AppText";
import AppExpoIcons from "../../icons/AppExpoIcons";
import AppIconButton from "../../icons/AppIconButton";
import AppActivityIndicator from "../../loaders/AppActivityIndicator";
import UserPictureCard from "./UserPictureCard";

interface Props {
  data: any[];
  title?: string;
  searchSlug?: string;
}

const UserPictureSection: React.FC<Props> = ({
  data,
  title = "Cast",
  searchSlug,
}) => {
  const navigation = useNavigation<any>();

  const handleSeeALlBtn = () => {
    if(!searchSlug) return ;
    navigation.navigate(ROUTES_NAMES.VIEW_ALL_LISTINGS, {
      id: title,
      searchSlug: searchSlug ?? title,
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
        {
          searchSlug ? (

            <AppIconButton onPress={() => handleSeeALlBtn()}>
          <AppExpoIcons
            name={"chevron-right"}
            size={20}
            color={colors.dark300}
            />
        </AppIconButton>
            
          ) : null
        }
      </View>
      {data?.length > 0 ? (
        <FlatList
          data={data}
          initialNumToRender={10}
          snapToStart={true}
          snapToAlignment={"center"}
          ListEmptyComponent={<AppNoData />}
          renderItem={({ item, index }) => {
            return (
              <UserPictureCard
                image={{
                  uri: movieImageUrl500(item?.profile_path) ?? placeholderImage,
                }}
                title={item?.name}
                subTitle={item?.character}
                onPress={() => handleCardClick(item?.id)}
                style={[
                  index === 0 && { marginLeft: constants.paddingHorizontalApp },
                  index === data?.length - 1 && {
                    marginRight: constants.paddingHorizontalApp,
                  },
                ]}
               
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
      ) : (
        <AppActivityIndicator
          style={[{ height: constants.windowHeight / 6 }]}
          showText={true}
        />
      )}
    </View>
  );
};

export default UserPictureSection;

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

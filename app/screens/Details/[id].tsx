import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import AppText from "../../appComponents/components/AppText";
import { useNavigation } from "@react-navigation/native";
import {
  ApiNetworkService,
  movieImageUrlOriginal,
} from "../../services/ApiService";
import AppActivityIndicator from "../../appComponents/loaders/AppActivityIndicator";
import { colors, constants } from "../../themes";
import ItemInfo from "./renderDetails/ItemInfo";
import ItemAbout from "./renderDetails/ItemAbout";
import ThreeByFiveSection from "../../appComponents/cards/threeByFive /ThreeByFiveSection";
import UserPictureSection from "../../appComponents/cards/userPicture/UserPictureSection";
import { simplifyWatchProviders } from "../../utils/utils";
import RectChipsSection from "../../appComponents/cards/rectChips/RectChipsSection";

interface Props {}

const DetailsScreen = ({ route }) => {
  const navigation = useNavigation<any>();
  const { id, mediaType } = route.params;
  const [isDataLoading, setIsDataLoading] = React.useState<boolean>(false);
  const [data, setData] = React.useState<any>(null);
  const [similarMovies, setSimiliarMovies] = React.useState<any>([]);
  const [recommendationsMovies, setRecommendationsMovies] = React.useState<any>(
    []
  );
  const [movieCast, setMovieCast] = React.useState<any>([]);
  const [watchProviders, setWatchProviders] = React.useState<any>([]);

  const getDataById = () => {
    let endpoint: string = `${mediaType}/${id}`;
    setIsDataLoading(true);
    ApiNetworkService.getMovies(endpoint)
      .then((res) => {
        setData(res?.data);
      })
      .catch((err) => {
        console.warn("something went wrong", err);
      })
      .finally(() => {
        setIsDataLoading(false);
      });
  };
  const getSimilarMovies = () => {
    let endpoint: string = `${mediaType}/${id}/similar`;
    ApiNetworkService.getMovies(endpoint)
      .then((res) => {
        setSimiliarMovies(res?.data?.results);
      })
      .catch((err) => {
        console.warn("something went wrong", err);
      });
  };

  const getRecommendationsMovies = () => {
    let endpoint: string = `${mediaType}/${id}/recommendations`;
    ApiNetworkService.getMovies(endpoint)
      .then((res) => {
        setRecommendationsMovies(res?.data?.results);
      })
      .catch((err) => {
        console.warn("something went wrong", err);
      });
  };
  const getCastDetails = () => {
    let endpoint: string = `${mediaType}/${id}/credits`;
    ApiNetworkService.getMovies(endpoint)
      .then((res) => {
        setMovieCast(res?.data?.cast?.slice(0, 10));
      })
      .catch((err) => {
        console.warn("something went wrong", err);
      });
  };
  const getWatchProviders = () => {
    let endpoint: string = `${mediaType}/${id}/watch/providers`;
    ApiNetworkService.getMovies(endpoint)
      .then((res) => {
        const temp: any[] = simplifyWatchProviders(res?.data?.results);

        setWatchProviders(temp);
      })
      .catch((err) => {
        console.warn("something went wrong", err);
      });
  };

  useEffect(() => {
    if (id && mediaType) {
      getDataById();
      getSimilarMovies();
      getRecommendationsMovies();
      getCastDetails();
      getWatchProviders();
    }
  }, [id, mediaType]);
  // console.log("id && mediaType", id, mediaType, data?.networks);
  if (!id) {
    navigation.back();
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {!isDataLoading ? (
        <>
          <ItemInfo
            title={data?.title ?? data?.name}
            tagLine={data?.tagline}
            image={{ uri: movieImageUrlOriginal(data?.poster_path) }}
            caption1={data?.status}
            caption2={
              data?.release_date
                ? "| " + data?.release_date?.slice(0,4)
                : "| " + data?.first_air_date?.slice(0,4)
            }
            caption3={
              data?.runtime
                ? "| " + data?.runtime + " mins"
                : "| " + data?.number_of_seasons + " Season"
            }
            caption4={"| "  + data?.genres?.[0]?.name}
            caption5={"| "  + data?.genres?.[1]?.name}
            caption6={
              data?.genres?.[2]?.name
                ? "| " + data?.genres?.[2]?.name
                : "| " + data?.type
            }
          />
          <ItemAbout
            about={data?.overview ?? "No summary available."}
            title="Summary"
          />

          <RectChipsSection
            data={data?.networks ?? watchProviders}
            title="Available on"
            searchSlug={""}
          />
          <UserPictureSection data={movieCast} title="Cast" searchSlug={""} />
          <ThreeByFiveSection
            data={similarMovies}
            title="Similar Movies"
            searchSlug={""}
          />
          <ThreeByFiveSection
            data={recommendationsMovies}
            title="Recommendations"
            searchSlug={""}
          />
        </>
      ) : (
        <AppActivityIndicator
          style={[{ height: constants.windowHeight }]}
          showText={true}
        />
      )}
    </ScrollView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12,

    // backgroundColor:'red',
    // justifyContent: "center",
    // alignItems: "center",
    // height:
    backgroundColor: constants.appBackgroundColor,
    // paddingBottom:10,
  },
});

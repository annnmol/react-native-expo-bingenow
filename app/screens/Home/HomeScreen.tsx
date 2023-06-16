import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { RefreshControl, StyleSheet } from "react-native";
import AppSlider from "../../appComponents/cards/slider/AppSlider";
import TwoByFourSection from "../../appComponents/cards/twoByFour/TwoByFourSection";
import { ApiNetworkService, Endpoints } from "../../services/ApiService";
import { useFirebaseDBService } from "../../services/firebase";
import { useAppDispatch, useAppSelector } from "../../store";
import { replaceSavedItem } from "../../store/slices/SavedItemsSlice";

import { ScrollView } from "react-native-gesture-handler";
import OneByOneSection from "../../appComponents/cards/oneByOne/OneByOneSection";
import ThreeByFiveSection from "../../appComponents/cards/threeByFive /ThreeByFiveSection";
import { constants } from "../../themes";
import {
  nowPlayingMoviesStore,
  setData as setNowPlayingMovies,
  setLoading as setNowPlayingMoviesLoading,
} from "../../store/slices/movies/NowPlayingMoviesSlice";
import {
  trendingAllStore,
  setData as setTrendingMovies,
  setLoading as setTrendingMoviesLoading,
} from "../../store/slices/movies/TrendingAllSlice";
import {
  topRatedStore,
  setData as setTopRated,
  setLoading as setTopRatedLoading,
} from "../../store/slices/movies/TopRatedSlice";
import {
  freshTvStore,
  setData as setFreshTv,
  setLoading as setFreshTvLoading,
} from "../../store/slices/movies/FreshTvSlice";
import {
  upcomingMoviesStore,
  setData as setUpcomingMovies,
  setLoading as setUpcomingMoviesLoading,
} from "../../store/slices/movies/UpcomingMoviesSlice";
import {
  ultimateMoviesStore,
  setData as setUltimateMovies,
  setLoading as setUltimateMoviesLoading,
} from "../../store/slices/movies/UltimateMoviesSlice";
import {
  popularMoviesStore,
  setData as setPopularMovies,
  setLoading as setPopularMoviesLoading,
} from "../../store/slices/movies/PopularMoviesSlice";
import { getVotedMovie } from "../../utils/utils";

const HomeScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);
  const navigation = useNavigation<any>();
  const { getFirebase } = useFirebaseDBService();
  const dispatch = useAppDispatch();
  const { data: nowPlayingMovies, loading: nowPlayingMoviesLoading } =
    useAppSelector(nowPlayingMoviesStore);
  const { data: trendingAll, loading: trendingAllLoading } =
    useAppSelector(trendingAllStore);
  const { data: topRated, loading: topRatedLoading } =
    useAppSelector(topRatedStore);
  const { data: freshTv, loading: freshTvLoading } =
    useAppSelector(freshTvStore);
  const { data: upcomingMovies, loading: upcomingMoviesLoading } =
    useAppSelector(upcomingMoviesStore);
  const { data: ultimateMovies, loading: ultimateMoviesLoading } =
    useAppSelector(ultimateMoviesStore);
  const { data: popularMovies, loading: popularMoviesLoading } =
    useAppSelector(popularMoviesStore);

  const getNowPlayingMovies = (pageNumber: number = 1) => {
    dispatch(setNowPlayingMoviesLoading(true));
    let endpoint: string = `${Endpoints.NOW_PLAYING_MOVIES}?region=IN&page=${pageNumber}&sort_by=revenue.desc`;
    ApiNetworkService.getMovies(endpoint)
      .then((res) => {
        dispatch(setNowPlayingMovies(res?.data?.results));
      })
      .catch((err) => {
        console.warn("something went wrong", err);
      })
      .finally(() => {
        dispatch(setNowPlayingMoviesLoading(false));
      });
  };
  const getTrendingAll = (pageNumber: number = 1) => {
    dispatch(setTrendingMoviesLoading(true));

    let endpoint: string = `${Endpoints.TRENDING_ALL}?region=IN&page=${pageNumber}&sort_by=popularity.desc`;
    ApiNetworkService.getMovies(endpoint)
      .then((res) => {
        dispatch(setTrendingMovies(res?.data?.results));
      })
      .catch((err) => {
        console.warn("something went wrong", err);
      })
      .finally(() => {
        dispatch(setTrendingMoviesLoading(false));
      });
  };
  const getPopularMovies = (pageNumber: number = 1) => {
    dispatch(setPopularMoviesLoading(true));

    let endpoint: string = `${Endpoints.POPULAR_MOVIES}?page=${pageNumber}&sort_by=popularity.desc`;
    ApiNetworkService.getMovies(endpoint)
      .then((res) => {
        dispatch(setPopularMovies(res?.data?.results));
      })
      .catch((err) => {
        console.warn("something went wrong", err);
      })
      .finally(() => {
        dispatch(setPopularMoviesLoading(false));
      });
  };

  const getTopRatedAll = (pageNumber: number = 1) => {
    dispatch(setFreshTvLoading(true));
    let endpoint: string = `${Endpoints.TOP_RATED_MOVIES}?region=IN&page=${pageNumber}&sort_by=popularity.desc`;
    ApiNetworkService.getMovies(endpoint)
      .then((res) => {
        dispatch(setTopRated(res?.data?.results));
      })
      .catch((err) => {
        console.warn("something went wrong", err);
      })
      .finally(() => {
        dispatch(setTopRatedLoading(false));
      });
  };

  const getFreshTv = (pageNumber: number = 1) => {
    dispatch(setFreshTvLoading(true));

    let endpoint: string = `${Endpoints.TRENDING_TV}?include_null_first_air_dates=false&region=IN&page=${pageNumber}&sort_by=popularity.desc`;
    ApiNetworkService.getMovies(endpoint)
      .then((res) => {
        dispatch(setFreshTv(res?.data?.results));
      })
      .catch((err) => {
        console.warn("something went wrong", err);
      })
      .finally(() => {
        dispatch(setFreshTvLoading(false));
      });
  };
  const getUpcomingMovies = (pageNumber: number = 1) => {
    dispatch(setUpcomingMoviesLoading(true));

    let endpoint: string = `${Endpoints.UPCOMING_MOVIES}?region=IN&page=${pageNumber}&sort_by=popularity.desc`;
    ApiNetworkService.getMovies(endpoint)
      .then((res) => {
        dispatch(setUpcomingMovies(res?.data?.results));
      })
      .catch((err) => {
        console.warn("something went wrong", err);
      })
      .finally(() => {
        dispatch(setUpcomingMoviesLoading(false));
      });
  };

  const getUltimateMovies = (pageNumber: number = 1) => {
    let endpoint: string = `${Endpoints.DISCOVER_MOVIES}?page=${pageNumber}&sort_by=popularity.desc&vote_average.gte=8.4&vote_count.gte=10000`;
    ApiNetworkService.getMovies(endpoint)
      .then((res) => {
        dispatch(setUltimateMovies(res?.data?.results));
      })
      .catch((err) => {
        console.warn("something went wrong", err);
      })
      .finally(() => {
        dispatch(setUltimateMoviesLoading(false));
      });
  };

  useEffect(() => {
    getNowPlayingMovies();
    getSavedItems();
    getTrendingAll();
    getTopRatedAll();
    getFreshTv();
    getUpcomingMovies();
    getUltimateMovies();
    getPopularMovies();
  }, [refreshing]);

  const getSavedItems = () => {
    getFirebase(`savedMovies`)
      .then((res) => {
        dispatch(replaceSavedItem(res));
      })
      .catch((err) => {
        console.warn("err", err);
      });
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <AppSlider data={nowPlayingMovies} isLoading={nowPlayingMoviesLoading} />
      <TwoByFourSection
        data={trendingAll}
        title="Trending in India"
        searchSlug={Endpoints.TRENDING_ALL}
        isLoading={nowPlayingMoviesLoading}
      />
      <ThreeByFiveSection
        data={popularMovies}
        title="Top Picks"
        searchSlug={Endpoints.POPULAR_MOVIES}
        isLoading={nowPlayingMoviesLoading}
      />
      <ThreeByFiveSection
        data={topRated}
        title="Top Rated Originals ✨"
        searchSlug={Endpoints.TOP_RATED_MOVIES}
        isLoading={nowPlayingMoviesLoading}
      />
      <OneByOneSection
        data={getVotedMovie(trendingAll)}
        title="Hot Right Now 🔥"
        isLoading={nowPlayingMoviesLoading}
      />
      <TwoByFourSection
        data={freshTv}
        title="Fresh TV Shows 📺"
        searchSlug={Endpoints.TRENDING_TV}
        isLoading={nowPlayingMoviesLoading}
      />
      <ThreeByFiveSection
        data={ultimateMovies}
        title="The Ultimate Hollywood 🍿"
        searchSlug={Endpoints.DISCOVER_MOVIES}
        isLoading={nowPlayingMoviesLoading}
      />
      <ThreeByFiveSection
        data={upcomingMovies}
        title="Upcoming"
        searchSlug={Endpoints.UPCOMING_MOVIES}
        isLoading={nowPlayingMoviesLoading}
      />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 0,
    marginHorizontal: 0,
    flex: 1,
    backgroundColor: constants.appBackgroundColor,
    width: constants.windowWidth,
    height: constants.windowHeight,
    gap: 12,
    overflow: "hidden",
  },
});

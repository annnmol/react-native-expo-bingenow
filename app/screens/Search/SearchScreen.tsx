import React from "react";
import AppSafeViewScreen from "../../appComponents/components/AppSafeViewScreen";
import AppSearchBar from "../../appComponents/components/AppSearchBar";
import AppText from "../../appComponents/components/AppText";
import useDebounce from "../../appComponents/hooks/useDebounce";
import { ApiNetworkService, Endpoints } from "../../services/ApiService";
import { objToQueryString } from "../../utils/utils";
import { StyleSheet, ToastAndroid, View } from "react-native";
import ThreeByThreeSection from "../../appComponents/cards/threeByThree/ThreeByThreeSection";
import { constants } from "../../themes";

const SearchScreen = () => {
  const [search, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const [searchLoading, setSearchLoading] = React.useState(false);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [hasMoreData, setHasMoreData] = React.useState<boolean>(true);

  const debouncedSearchTerm = useDebounce<string>(search, 1000);

  const getSearchMovies = (searchValue: string, pageNumber: number = 1) => {
    if(pageNumber === 1){
      setSearchLoading(true);
    }
    let endpoint: string = `${Endpoints.SEARCH_All}?${searchValue}&page=${pageNumber}&sort_by=popularity.desc`;
    ApiNetworkService.getMovies(endpoint)
      .then((res) => {
        setSearchResults(res?.data?.results);
        // console.log("res", res?.data?.results);
      })
      .catch((err) => {
        console.warn("something went wrong", err);
      })
      .finally(() => {
        setSearchLoading(false);
      });
  };

  React.useEffect(() => {
    if (debouncedSearchTerm && search?.length > 0) {
      const temp = objToQueryString({ query: debouncedSearchTerm });
      // console.log("temp", temp)
      getSearchMovies(temp, 1);
    } else {
      setSearchResults([]);
      setSearchLoading(false);
    }
  }, [debouncedSearchTerm]);

  const handleFetchMore = () => {
    if (searchResults?.length >= 19) {
      return;
    }

    if (!hasMoreData) {
      ToastAndroid.show("No more data to fetch", ToastAndroid.SHORT);
      return;
    }
    if (searchResults?.length >= 140) {
      setHasMoreData(false);
      return;
    }
    if (debouncedSearchTerm && hasMoreData && !searchLoading) {
      getSearchMovies(debouncedSearchTerm, pageNumber + 1);
      setPageNumber(pageNumber + 1);
    }
  };

  const handleRefresh = () => {
    // console.log("refresh page");
    // getMoreData(1);
    // setPageNumber(1);
    return;
  };
  return (
    <AppSafeViewScreen style={styles.container}>
      <View style={styles.headerBox}>
        <AppText>Search needs to be implemented</AppText>
        <AppSearchBar
          value={search}
          setValue={setSearchTerm}
          divStyle={styles.searchBarView}
        />
      </View>
      {debouncedSearchTerm ? (
        <ThreeByThreeSection
          data={searchResults}
          title="Search Results"
          handleFetchMore={handleFetchMore}
          handleRefresh={handleRefresh}
          isLoading={searchLoading}
        />
      ) : null}
    </AppSafeViewScreen>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 0,
    paddingVertical: 16,
  },
  searchBarView: {},
  headerBox: {
    paddingHorizontal: constants.paddingHorizontalApp,
    gap: 8,
  },
});

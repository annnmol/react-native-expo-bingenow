import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { StyleSheet, ToastAndroid } from "react-native";
import ThreeByThreeSection from "../../appComponents/cards/threeByThree/ThreeByThreeSection";
import AppSafeViewScreen from "../../appComponents/components/AppSafeViewScreen";
import AppText from "../../appComponents/components/AppText";
import AppExpoIcons from "../../appComponents/icons/AppExpoIcons";
import { ApiNetworkService } from "../../services/ApiService";
import { colors } from "../../themes";

const ViewAllListings = ({ route }) => {
  const navigation = useNavigation<any>();

  const { id, searchSlug } = route.params;
  const [data, setData] = React.useState<any[]>([]);
  const [pageNumber, setPageNumber] = React.useState<number>(1);
  const [hasMoreData, setHasMoreData] = React.useState<boolean>(true);
  const [isDataLoading, setIsDataLoading] = React.useState<boolean>(false);
  const getMoreData = (pageNumber: number = 1) => {
    let endpoint: string = `${searchSlug}?page=${pageNumber}&sort_by=popularity.desc`;
    setIsDataLoading(true);
    ApiNetworkService.getMovies(endpoint)
      .then((res) => {
        if (data.length > 0 && res?.data?.results?.length > 0) {
          setData([...data, ...res?.data?.results]);
        } else {
          setData(res?.data?.results);
        }
        if (data?.length >= res?.data?.total_results) {
          setHasMoreData(false);
        }
      })
      .catch((err) => {
        console.warn("something went wrong", err);
      })
      .finally(() => {
        setIsDataLoading(false);
      });
  };
  useEffect(() => {
    if (id && searchSlug) {
      getMoreData();
    }
  }, [id, searchSlug, pageNumber]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerBackImage: (props: any) => (
        <AppExpoIcons
          {...props}
          name={"chevron-left"}
          style={{ color: colors.light600, fontSize: 24 }}
        />
      ),

      headerLeftStyle: { marginLeft: 16, color: colors.light600, fontSize: 24 },
      headerTitle: (props: any) => (
        <AppText
          {...props}
          style={{
            color: colors.light600,
            fontWeight: "bold",
            letterSpacing: 1,
            fontSize: 15,
          }}
        >
          {id}
        </AppText>
      ),
      headerStyle: {
        backgroundColor: colors.bgColor, //Set Header color,
        height: 44,
      },
      headerTintColor: colors.light600, //Set Header text color
    });
  }, [navigation]);

  const handleFetchMore = () => {
    if (!hasMoreData) {
      ToastAndroid.show("No more data to fetch", ToastAndroid.SHORT);
      return;
    }
    if (data?.length >= 140) {
      setHasMoreData(false);
      return;
    }
    if (id && searchSlug && hasMoreData && !isDataLoading) {
      getMoreData(pageNumber + 1);
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
      <ThreeByThreeSection
        data={data}
        title="Upcoming"
        handleFetchMore={handleFetchMore}
        handleRefresh={handleRefresh}
        isLoading={isDataLoading}
      />
    </AppSafeViewScreen>
  );
};

export default ViewAllListings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
});

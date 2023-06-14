import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import TwoByFourSection from "../../appComponents/cards/twoByFour/TwoByFourSection";
import AppSlider from "../../appComponents/components/AppSlider";
import { ROUTES_NAMES } from "../../navigation/Routes";
import { ApiNetworkService } from "../../services/ApiService";
import { useFirebaseDBService } from "../../services/firebase";
import { useAppDispatch } from "../../store";
import { replaceSavedItem } from "../../store/slices/SavedItemsSlice";

import { ScrollView } from "react-native-gesture-handler";
import ThreeByFiveSection from "../../appComponents/cards/threeByFive /ThreeByFiveSection";
import { constants } from "../../themes";
import OneByOneSection from "../../appComponents/cards/oneByOne/OneByOneSection";
import ThreeByThreeSection from "../../appComponents/cards/threeByThree/ThreeByThreeSection";

const HomeScreen = () => {
  const navigation = useNavigation<any>();
  const { getFirebase } = useFirebaseDBService();
  const dispatch = useAppDispatch();

  const [data, setData] = React.useState<any[]>([]);
  const getNowPlayingMovies = () => {
    ApiNetworkService.getNowPlayingMovies()
      .then((res) => {
        // console.log("response", res?.data?.results);
        setData(res?.data?.results);
        console.log("first item", res?.data?.results?.[0]);
      })
      .catch((err) => {
        console.warn("something went wrong", err);
      });
  };
  useEffect(() => {
    getNowPlayingMovies();
    getSavedItems();
  }, []);

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
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <AppSlider
        data={data}
        onPress={(item: any) =>
          navigation.navigate(ROUTES_NAMES.DETAILS, {
            id: item?.id,
          })
        }
        onPressSecondayBtn={(item: any) =>
          console.log("onPressSecondayBtn", item)
        }
        ctaBtnText="Read more"
      />
      <TwoByFourSection data={data} title="Trending in India" />
      <OneByOneSection data={data} title="Hot Right Now 🔥" />
      <ThreeByFiveSection data={data} title="Top Picks"/>
      <TwoByFourSection data={data} title="Top Rated Originals ✨"/>
      <ThreeByFiveSection data={data} title="The Ultimate Line Up 🍿"/>
      <TwoByFourSection data={data} title="Fresh TV Shows 📺"/>
      <ThreeByFiveSection data={data} title="The Hollywood "/>
      {/* <ThreeByThreeSection data={data} title="The Hollywood "/> */}
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
    // backgroundColor: "red",
    width: constants.windowWidth,
    height: constants.windowHeight,
    gap:12,
    // paddingHorizontal: constants.paddingHorizontalApp,
    // paddingVertical: constants.paddingVerticalApp,
    overflow: "hidden",
  },
});

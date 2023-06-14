import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import AppSafeViewScreen from "../../appComponents/components/AppSafeViewScreen";
import AppText from "../../appComponents/components/AppText";
import { ApiNetworkService } from "../../services/ApiService";
import AppSlider from "../../appComponents/components/AppSlider";
import { ROUTES_NAMES } from "../../navigation/Routes";
import TwoByFourSection from "../../appComponents/cards/twoByFour/TwoByFourSection";

const HomeScreen = () => {
  const navigation = useNavigation<any>();
  const [data, setData] = React.useState<any[]>([]);
  const getNowPlayingMovies = () => {
    ApiNetworkService.getNowPlayingMovies()
      .then((res) => {
        // console.log("response", res?.data?.results);
        setData(res?.data?.results);
        // console.log("first item", res?.data?.results?.[0]);
      })
      .catch((err) => {
        console.warn("something went wrong", err);
      });
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return (
    <AppSafeViewScreen style={styles.container}>
      <AppSlider
        data={data}
        onPress={(item:any) => navigation.navigate(ROUTES_NAMES.DETAILS,{
          id: item?.id,
        })}
        onPressSecondayBtn={(item: any) =>
          console.log("onPressSecondayBtn", item)
        }
        ctaBtnText="Read more"
      />
      <TwoByFourSection data={data} onPress={(item:any) => navigation.navigate(ROUTES_NAMES.DETAILS,{
          id: item?.id,
        })}/>
    </AppSafeViewScreen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container:{
    paddingVertical:0,
  }
});


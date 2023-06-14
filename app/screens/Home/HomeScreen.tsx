import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { FlatList, View } from "react-native";
import AppSafeViewScreen from "../../appComponents/components/AppSafeViewScreen";
import AppText from "../../appComponents/components/AppText";
import { ApiNetworkService } from "../../services/ApiService";

const HomeScreen = () => {
  const navigation = useNavigation<any>();
  const [data, setData] = React.useState<any[]>([]);
  const getUsers = () => {
    ApiNetworkService.getGithubUsers()
      .then((res) => {
        console.log("response", res?.data?.results);
        setData(res?.data?.results);
      })
      .catch((err) => {
        console.warn("something went wrong", err);
      });
  };
  useEffect(() => {
    // getUsers();
  }, []);

  return (
    <AppSafeViewScreen>
      <AppText>HomeScreen {data?.length}</AppText>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <View>
              <AppText numberOfLines={1}>{item?.title}</AppText>
            </View>
          );
        }}
      />
      {/* <AppSlider data={carouselData} onPress={(item:any)=>console.log("item cllicke", item)}  onPressSecondayBtn={(item:any)=>console.log("onPressSecondayBtn", item)}/> */}
    </AppSafeViewScreen>
  );
};

export default HomeScreen;

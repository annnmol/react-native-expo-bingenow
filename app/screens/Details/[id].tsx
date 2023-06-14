import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../../appComponents/components/AppText";
// import AppActivityIndicator from "../../appComponents/components/AppActivityIndicator";
// import { ApiNetworkService } from "../../services/ApiService";
// import { theme } from "../../themes";
// import DetailsFooter from "./renderComponents/DetailsFooter";
// import DetailsHeader from "./renderComponents/DetailsHeader";
// import DetailsTabs from "./renderComponents/DetailsTabs";
// import DetailsTabsContent from "./renderComponents/DetailsTabsContent";
interface Props {}

const tabOptions = [
  "About",
  "Qualifications",
  "Responsibilities",
  "Benefits",
  "Skills",
  // "Teams",
  // "Followers",
  // "Following",
  // "Projects",
];
const DetailsScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const [activeTab, setActiveTab] = useState<string>("About");

  const [data, setData] = React.useState<any>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const getJobDetailsById = () => {
    // setIsLoading(true);
    // const params = {
    //   job_id: id,
    //   extended_publisher_details: true,
    // };
    // ApiNetworkService.jobDetailsById(params)
    //   .then((res) => {
    //     setData(res?.data?.data?.[0]);
    //   })
    //   .catch((err) => {
    //     console.warn("something went wrong", err);
    //   })
    //   .finally(() => setIsLoading(false));
  };
  // useEffect(() => {
  //   if (id) getJobDetailsById();
  // }, [id]);

  // if (!id) {
  //   navigation.back();
  // }
  return (
    <View style={styles.container}>
      <AppText>id: {id}</AppText>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // height:
    // backgroundColor:'green',
    // paddingBottom:10,
  },
});

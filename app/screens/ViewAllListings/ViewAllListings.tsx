import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "../../appComponents/components/AppText";

const ViewAllListings = ({ route, navigation }) => {
  const { id } = route.params;
  return (
    <View style={styles.container}>
      <AppText>id: {id}</AppText>
    </View>
  );
};

export default ViewAllListings;

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

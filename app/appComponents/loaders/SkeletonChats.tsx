import React from "react";
import { StyleSheet, View } from "react-native";
import {
  Placeholder,
  PlaceholderLine,
  PlaceholderMedia,
  ShineOverlay,
} from "rn-placeholder";

interface Props {
  length?: number;
}
const SkeletonChats: React.FC<Props> = ({ length = 12 }) => {
  let data = Array.from({ length: length }, () =>
    Math.floor(Math.random() * 40)
  );
  return (
    <>
      <Placeholder
        Animation={(props:any) => (
          <ShineOverlay {...props} size="medium"/>
        )}
      >
        {data?.map((item, index) => {
          return (
            <View style={styles.container} key={index.toString()}>
              <View style={styles.avatarContainer}>
                <PlaceholderMedia style={styles.avatar} />
              </View>
              <View style={styles.detailsContainer}>
                <PlaceholderLine width={80} height={10} />
                <PlaceholderLine width={45} height={8} />
              </View>
            </View>
          );
        })}
      </Placeholder>
    </>
  );
};

export default SkeletonChats;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 4,
    borderColor: "#f1f1f1",
    width: "100%",
  },
  avatarContainer: {
    marginRight: 14,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 25,
  },
  detailsContainer: {
    marginTop: 6,
    gap: 2,
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
});

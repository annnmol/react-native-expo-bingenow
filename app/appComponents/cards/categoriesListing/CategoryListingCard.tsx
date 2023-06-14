import React from "react";
import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../../../themes";
import AppText from "../../components/AppText";

interface Props {
  image: ImageSourcePropType;
  isActive?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
}

const CategoryListingCard: React.FC<Props> = ({
  image,
  onPress,
  isActive = false,
}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
      <View style={[styles.container, isActive && styles.active]}>
        <Image source={image} style={styles.icon} />
        <AppText style={styles.title1} numberOfLines={1}>
           Pizza ssad sdfsd
          </AppText>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryListingCard;

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.light100,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    paddingHorizontal: 8,
    paddingVertical: 8,
    flex:1,
    marginHorizontal: 16,
  },
  active: {
    backgroundColor: colors.bgColor300,
  },
  icon: {
    width:40,
    height: 40,
    resizeMode: "contain",
  },

  title1: { fontSize: 13, width:'70%', textAlign:'center' },
});

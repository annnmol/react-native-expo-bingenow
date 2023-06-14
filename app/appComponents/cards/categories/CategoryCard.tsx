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

interface Props {
  image: ImageSourcePropType;
  isActive?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
}

const CategoryCard: React.FC<Props> = ({
  image,
  onPress,
  isActive = false,
}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
      <View style={[styles.container, isActive && styles.active]}>
        <Image source={image} style={styles.icon} />
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    borderRadius: 16,
    backgroundColor: colors.light100,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  active: {
    backgroundColor: colors.bgColor300,
  },
  icon: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

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
import AppExpoIcons from "../../icons/AppExpoIcons";

interface Props {
  image: ImageSourcePropType;
  isActive?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
}

const SearchCard: React.FC<Props> = ({ image, onPress, isActive = false }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
      <View style={[styles.container, isActive && styles.active]}>
        <View style={styles.leftBox}>
        <Image source={image} style={styles.icon} />
        
        </View>
        <View style={styles.rightBox}>
          <AppText style={styles.title2} numberOfLines={2}>
            Free box of Fries asas sd sdsd sd
          </AppText>
        <AppText style={styles.title1} numberOfLines={1}>
            Today’s Offer
          </AppText>
        </View>
        <AppExpoIcons name="chevron-right"/>
      </View>
    </TouchableOpacity>
  );
};

export default SearchCard;

const styles = StyleSheet.create({
  container: {
    width: 320,
    height: 72,
    borderRadius: 8,
    backgroundColor: colors.light100,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 12,
    overflow: "hidden",
    paddingHorizontal: 10,
    paddingVertical: 8,
    flexDirection: "row",
    borderBottomColor: colors.dark600,
    borderBottomWidth: 0.5,
  },
  active: {
    backgroundColor: colors.bgColor300,
  },
  icon: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },

  leftBox: {
    width: 48,
    height: 48,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  rightBox: {


    height: "100%",
    overflow: "hidden",
    alignItems: "flex-start",
    paddingVertical:5,
    gap:4,
    justifyContent: "flex-start",
    width: "70%",
  },

  title1: { fontSize: 14 },
  title2: { fontSize: 16, fontWeight: "600" },
});

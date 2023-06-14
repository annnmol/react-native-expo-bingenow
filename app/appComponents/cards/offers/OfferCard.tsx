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

const OfferCard: React.FC<Props> = ({ image, onPress, isActive = false }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
      <View style={[styles.container, isActive && styles.active]}>
        <View style={styles.leftBox}>
          <AppText style={styles.title1} numberOfLines={1}>
            Today’s Offer
          </AppText>
          <AppText style={styles.title2} numberOfLines={2}>
            Free box of Fries asas sd sdsd sds
          </AppText>
          <AppText style={styles.title3} numberOfLines={1}>
            on all orders above $150
          </AppText>
        </View>
        <View style={styles.rightBox}>
          <Image source={image} style={styles.icon} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OfferCard;

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 120,
    borderRadius: 16,
    backgroundColor: colors.light100,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    overflow: "hidden",
    paddingHorizontal: 10,
    paddingVertical: 12,
    flexDirection: "row",
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
    height: "100%",
    overflow: "hidden",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "55%",
  },
  rightBox: {
    width: 110,
    height: 110,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },

  title1: { fontSize: 16 },
  title2: { fontSize: 18, fontWeight: "600" },
  title3: { fontSize: 14 },
});

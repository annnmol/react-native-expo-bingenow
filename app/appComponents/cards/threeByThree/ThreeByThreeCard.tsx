import { LinearGradient } from "expo-linear-gradient";
import React, { ReactNode } from "react";
import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { colors, constants } from "../../../themes";
import { AppStyles } from "../../../themes/AppStyles";
import AppFastImage from "../../components/AppFastImage";

interface Props {
  image: ImageSourcePropType;
  isActive?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  renderSaveIcon?: ReactNode;
  renderPremiumIcon: ReactNode;
}

const ThreeByThreeCard: React.FC<Props> = ({
  image,
  onPress,
  isActive = false,
  style,
  renderSaveIcon,
  renderPremiumIcon,
}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
      <View style={[styles.container, isActive && styles.active, style]}>
        <LinearGradient
          colors={["rgba(0,0,0,0.4)", "transparent", "rgba(0,0,0,0.1)"]}
          style={AppStyles.backgroundGradient}
        /> <AppFastImage
        source={
          image
        }
        style={styles.icon}
      />
      </View>
      {renderSaveIcon}
      {renderPremiumIcon}
    </TouchableOpacity>
  );
};

export default ThreeByThreeCard;

const styles = StyleSheet.create({
  container: {
    // width: constants.windowWidth / 2.6,
    // height: constants.windowHeight / 4.4,
    width: constants.windowWidth / 3.6,
    height: constants.windowHeight / 6,
    borderRadius: 16,
    backgroundColor: colors.light600,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
    // marginHorizontal: 8,
  },
  active: {
    backgroundColor: colors.bgColor300,
  },
  icon: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },
});

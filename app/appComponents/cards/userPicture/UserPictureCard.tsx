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
import { colors, constants, typography } from "../../../themes";
import { AppStyles } from "../../../themes/AppStyles";
import AppText from "../../components/AppText";
import AppFastImage from "../../components/AppFastImage";

interface Props {
  image: ImageSourcePropType;
  title: string;
  subTitle?: string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
}

const UserPictureCard: React.FC<Props> = ({
  image,
  title,
  subTitle,
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
      <View style={[styles.container, style]}>
        <AppFastImage source={image} style={styles.icon} contentFit="cover" />
        <AppText style={styles.tagLine} numberOfLines={2}>
          {title}
        </AppText>
        <AppText style={styles.captionText} numberOfLines={2}>
          {subTitle}
        </AppText>
      </View>
    </TouchableOpacity>
  );
};

export default UserPictureCard;

const styles = StyleSheet.create({
  container: {
    width: constants.windowWidth / 4.5,
    // height: constants.windowHeight / 6,
    borderRadius: 16,
    // backgroundColor: colors.light600,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
    // gap:4,
  },
  active: {
    backgroundColor: colors.bgColor300,
  },
  icon: {
    width: 60,
    height: 60,
    resizeMode: "cover",
    borderRadius: 30,
  },

  tagLine: {
    marginTop: 4,
    fontSize: typography.textR,
    fontWeight: "600",
    textAlign: "center",
  },

  captionText: {
    fontSize: typography.textS,
    textAlign: "center",
  },
});

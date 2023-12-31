import React from "react";
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
import AppFastImage from "../../components/AppFastImage";
import AppText from "../../components/AppText";

interface Props {
  image: ImageSourcePropType;
  title:string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;

}

const RectChipsCard: React.FC<Props> = ({
  image,
  title,
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
      <View style={[styles.container,style]}>
      <Image
          source={
            image
          }
          style={styles.icon}
        />
          {/* <AppText style={styles.title}>{title}</AppText> */}
      </View>
    </TouchableOpacity>
  );
};

export default RectChipsCard;

const styles = StyleSheet.create({
  container: {
    // width: constants.windowWidth / 5,
    // height: 48,
    // borderRadius: 12,
    // backgroundColor: colors.bgColor50,
    // alignItems: "center",
    // justifyContent: "center",
    // overflow: "hidden",
    // position: "relative",
    

    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: colors.bgColor50,
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
    width: '100%',
    height: '100%',
    resizeMode: "stretch",
    borderRadius: 4,
  },
  title:{
    textAlign:"center",
    fontSize:12,
  }
});

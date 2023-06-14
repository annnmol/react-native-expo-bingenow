import React from "react";
import {
  GestureResponderEvent,
  StyleProp,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { AppStyles } from "../../themes/AppStyles";

interface Props {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  [otherProps: string]: unknown;
  onPress: (event: GestureResponderEvent) => void;
}

const AppIconButton: React.FC<Props> = ({ onPress, style, children }) => {
  return (
    <TouchableOpacity
      style={[AppStyles.styledIconButton, style && style]}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

export default AppIconButton;

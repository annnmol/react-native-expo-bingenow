import React from "react";
import { SafeAreaView, StyleProp } from "react-native";
import { AppStyles } from "../../themes/AppStyles";

interface Props {
  style?: StyleProp<any>;
  children?: React.ReactNode;
  [otherProps: string]: any;
}

const AppSafeViewScreen: React.FC<Props> = ({
  style,
  children,
  ...otherProps
}) => {
  return (
    <SafeAreaView style={[AppStyles.appContainer, style && style]} {...otherProps}>
      {children}
    </SafeAreaView>
  );
};

export default AppSafeViewScreen;

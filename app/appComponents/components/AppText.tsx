import React from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";
import { colors } from "../../themes";

interface Props {
  style?: StyleProp<TextStyle>
  variant?: 'body' | 'title';
  children?: React.ReactNode;
  [otherProps: string]: any;
}

const AppText: React.FC<Props> = ({
  style,
  variant,
  children,
  ...otherProps
}) => {
  if (variant === "body") {
    return (
      <Text style={[styles.body, style && style]} {...otherProps}>
        {children}
      </Text>
    );
  }
  if (variant === "title") {
    return (
      <Text style={[styles.text, {fontSize:20}, style && style]} {...otherProps}>
        {children}
      </Text>
    );
  }

  return (
    <Text style={[styles.text, style && style]} {...otherProps}>
      {children}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: colors.dark200,
  },
  body: {
    fontSize: 14,
    color: colors.dark300,
    lineHeight: 22,
  },
});

import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  ViewStyle
} from "react-native";
import { colors } from "../../themes";


interface Props {
  textStyle?: StyleProp<any>;
  variant?: 'outline' | 'round' | 'text' | 'outlineRound' | 'TouchableHighlight' | 'roundDisabled' ;
  style?: StyleProp<ViewStyle>;
  onPress: () => void
  children: React.ReactNode;
  [otherProps: string]: any;
}

const AppButton: React.FC<Props> = ({
  style,
  textStyle,
  variant,
  children,
  onPress,
  ...otherProps
}) => {
  if( variant === 'TouchableHighlight')
  return (
    <TouchableHighlight onPress={()=>onPress()} activeOpacity={0.7} style={[styles.primaryButton, style && style]}  {...otherProps}>
      <Text style={[styles.primarytext, textStyle && textStyle]}>{children}</Text>
    </TouchableHighlight>
  );

  if( variant === 'outline')
  return (
    <TouchableHighlight  onPress={()=>onPress()} underlayColor={colors.bgColor300} activeOpacity={0.7} style={[styles.outlineButton, style && style]} {...otherProps}>
    <Text style={[styles.outlineText, textStyle && textStyle]}>{children}</Text>
  </TouchableHighlight>
  );

  if( variant === 'outlineRound')
  return (
    <TouchableOpacity  onPress={()=>onPress()} activeOpacity={0.7} style={[styles.outlineButton, {borderRadius:40},style && style]} {...otherProps}>
    <Text style={[styles.outlineText, textStyle && textStyle]}>{children}</Text>
  </TouchableOpacity>
  );

  if( variant === 'round')
  return (
    <TouchableOpacity  onPress={()=>onPress()} activeOpacity={0.7} style={[styles.primaryButton,{borderRadius:40}, style && style]} {...otherProps}>
    <Text style={[styles.primarytext, textStyle && textStyle]}>{children}</Text>
  </TouchableOpacity>
  );
  if( variant === 'roundDisabled')
  return (
    <TouchableOpacity  onPress={()=>onPress()} activeOpacity={0.7} style={[styles.disabledButton,{borderRadius:40}, style && style]} {...otherProps}>
    <Text style={[styles.primarytext, textStyle && textStyle]}>{children}</Text>
  </TouchableOpacity>
  );

  if( variant === 'text')
  return (
    <TouchableOpacity  onPress={()=>onPress()} activeOpacity={0.7} style={[styles.textButton, style && style]} {...otherProps}>
    <Text style={[styles.outlineText, textStyle && textStyle]}>{children}</Text>
  </TouchableOpacity>
  );

  return (
    <TouchableOpacity  onPress={()=>onPress()} activeOpacity={0.7} style={[styles.primaryButton, style && style]} {...otherProps}>
      <Text style={[styles.primarytext, textStyle && textStyle]}>{children}</Text>
    </TouchableOpacity>
  );

};

export default AppButton;

const styles = StyleSheet.create({

  //* primary btn
  primarytext: {
    color: colors.light100,
    fontSize: 15,
    letterSpacing: 1,
    fontWeight:'400',
    textAlign:'center',
  },

  primaryButton: {
    backgroundColor: colors.bgColor,
    width: '100%',
    height: 44,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },

  //*outline
  outlineButton: {
    backgroundColor: colors.light100,
    width: '100%',
    height: 44,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.bgColor500,
    borderStyle: 'solid',
    borderWidth: 1,
  },

  outlineText: {
    color: colors.bgColor500,
    fontSize: 16,
    letterSpacing: 1,
    fontWeight:'600',
  },

  textButton: {
    backgroundColor: colors.light100,
    width: '100%',
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },


  disabledButton: {
    backgroundColor: colors.dark600,
    width: '100%',
    height: 44,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    // marginVertical:4,
  },
 
});

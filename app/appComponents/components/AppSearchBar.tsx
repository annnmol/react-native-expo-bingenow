import React from "react";
import { StyleProp, TextInput, TextStyle, View } from "react-native";

import { StyledForms } from "../forms/StyledForms";
import AppExpoIcons from "../icons/AppExpoIcons";

interface Props {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
  disabled?: boolean;
  divStyle?: StyleProp<TextStyle>;
  onChangeCallbackFn?: (value: unknown) => void;
  handleSearchBtn?: (value: unknown) => void;
  [otherProps: string]: unknown;
}
const AppSearchBar: React.FC<Props> = ({
  value,
  setValue,
  placeholder = "What are you looking for? ...",
  divStyle,
  onChangeCallbackFn,
  handleSearchBtn,
  disabled = false,
  ...otherProps
}) => {

  return (
    <View style={[StyledForms.formControl, divStyle && divStyle]}>
      <AppExpoIcons
        name={"search"}
        size={20}
        style={[StyledForms.leftIcon, { top: 12}]}
      />
      <TextInput
        id={"search"}
        value={value}
        onChangeText={(e: string) => {
          setValue(e);
          if (onChangeCallbackFn) onChangeCallbackFn(e);
        }}
        style={[StyledForms.inputField]}
        placeholder={placeholder}
        editable={!disabled}
        {...otherProps}
      />
    </View>
  );
};

export default AppSearchBar;

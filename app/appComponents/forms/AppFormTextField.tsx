import React, { useState } from "react";
import { Controller, useController } from "react-hook-form";
import {
  KeyboardTypeOptions,
  TextInput,
  View
} from "react-native";

import AppExpoIcons, { IconName } from "../icons/AppExpoIcons";
import AppFormError from "./AppFormError";
import AppFormLabel from "./AppFormLabel";
import { StyledForms } from "./StyledForms";

interface Props extends TextFieldProps {
  keyboardType?: KeyboardTypeOptions;
  icon?: IconName;
}
const AppFormTextField: React.FC<Props> = ({
  name,
  label,
  divStyle,
  control,
  keyboardType = "default",
  icon,
  onChangeCallbackFn,
  ...otherProps
}) => {
  const {
    field: { value },
    fieldState: { invalid, error, isTouched, isDirty },
  } = useController({
    name,
  });

  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
  const dynamicFieldStyle = {}
  //   isInputFocused && !isTouched && !invalid
  //     ? StyledForms.inputFieldFocused
  //     : isTouched && invalid && error?.message
  //     ? StyledForms.inputFieldError
  //     : isTouched && !invalid && value
  //     ? StyledForms.inputFieldSuccess
  //     : {};
  const dynamicIconStyle = {}
  //   isTouched && invalid && error?.message
  //     ? StyledForms.leftIconError
  //     : isTouched && !invalid && value
  //     ? StyledForms.leftIconSuccess
  //     : {};

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value, ref },
        fieldState: { error, isTouched, invalid },
      }) => (
        <View style={[StyledForms.formControl, divStyle && divStyle]}>
          <AppFormLabel label={label} />
          {icon ? (
            <AppExpoIcons
              name={icon}
              size={20}
              style={[StyledForms.leftIcon, dynamicIconStyle]}
            />
          ) : null}

          <TextInput
            value={value}
            onChangeText={(e: string) => {
              onChange(e);
              if (onChangeCallbackFn) onChangeCallbackFn(e);
            }}
            onBlur={(e: any) => {
              e?.onBlur;
              onBlur();
              setIsInputFocused(false);
            }}
            onFocus={(e: any) => {
              e?.onFocus;
              setIsInputFocused(true);
            }}
            ref={ref}
            style={[
              StyledForms.inputField,
              dynamicFieldStyle,
              { paddingLeft: icon ? 48 : 16 },
            ]}
            keyboardType={keyboardType}
            {...otherProps}
          />
          <AppFormError
            visible={error && invalid}
            error={error?.message as string}
          />
        </View>
      )}
    />
  );
};

export default AppFormTextField;

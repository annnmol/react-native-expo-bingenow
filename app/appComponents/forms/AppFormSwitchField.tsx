import React from "react";
import { Controller } from "react-hook-form";
import { Switch, View } from "react-native";

import AppFormError from "./AppFormError";
import AppFormLabel from "./AppFormLabel";
import { StyledForms } from "./StyledForms";

const AppFormSwitchField: React.FC<TextFieldProps> = ({
  name,
  label,
  divStyle,
  control,
  onChangeCallbackFn,
  ...otherProps
}) => {
 
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value, ref },
        fieldState: { error, isTouched, invalid },
      }) => (
        <View style={[StyledForms.formControl, divStyle && divStyle,]}>
          <AppFormLabel label={label} />
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={value ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={(e: boolean) => {
              onChange(e);
              if (onChangeCallbackFn) onChangeCallbackFn(e);
            }}
            value={value}
            style={[StyledForms.switchField]}
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

export default AppFormSwitchField;

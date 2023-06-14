import React from "react";
import { Controller } from "react-hook-form";
import {
  Text,
  View
} from "react-native";

import Checkbox from "expo-checkbox";
import AppFormError from "./AppFormError";
import AppFormLabel from "./AppFormLabel";
import { StyledForms } from "./StyledForms";

interface Props extends TextFieldProps {
  text: string;
}

const AppFormCheckboxField: React.FC<Props> = ({
  name,
  label,
  divStyle,
  control,
  text,
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
        <View style={[StyledForms.formControl, divStyle && divStyle]}>
          <AppFormLabel label={label} />
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Checkbox
              value={value}
              onValueChange={(e: boolean) => {
                onChange(e);
                if (onChangeCallbackFn) onChangeCallbackFn(e);
              }}
              {...otherProps}
            />
            <Text>{text}</Text>
          </View>

          <AppFormError
            visible={error && invalid}
            error={error?.message as string}
          />
        </View>
      )}
    />
  );
};

export default AppFormCheckboxField;

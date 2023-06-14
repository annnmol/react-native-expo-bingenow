import React, { useRef, useState } from "react";
import { Controller, useController } from "react-hook-form";
import { View } from "react-native";

import { Picker } from "@react-native-picker/picker";
import AppFormError from "./AppFormError";
import AppFormLabel from "./AppFormLabel";
import { StyledForms } from "./StyledForms";

interface Props extends SelectFieldProps {
}

const AppFormSelectField: React.FC<Props> = ({
  name,
  label,
  divStyle,
  control,
  options,
  onChangeCallbackFn,
  ...otherProps
}) => {
  const pickerRef = useRef<any>();

  const handleOpenPicker = () => {
    pickerRef?.current?.focus();
  };
  const handleClosePicker = () => {
    pickerRef?.current?.blur();
  };

  const {
    field: { value },
    fieldState: { invalid, error, isTouched, isDirty },
  } = useController({
    name,
  });

  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
  const dynamicFieldStyle = {}
    // isInputFocused && !isTouched && !invalid
    //   ? StyledForms.inputFieldFocused
    //   : isTouched && invalid && error?.message
    //   ? StyledForms.inputFieldError
    //   : isTouched && !invalid && value
    //   ? StyledForms.inputFieldSuccess
    //   : {};
  const dynamicIconStyle = {}
    // isTouched && invalid && error?.message
    //   ? StyledForms.leftIconError
    //   : isTouched && !invalid && value
    //   ? StyledForms.leftIconSuccess
    //   : {};

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
        
          <Picker
            testID={name}
            selectedValue={value}
            onValueChange={(itemValue, itemIndex) => {
              onChange(itemValue);
              if (onChangeCallbackFn) onChangeCallbackFn(itemValue);
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
            style={[StyledForms.inputField, dynamicFieldStyle]}
            {...otherProps}
          >
             <Picker.Item label={"Select an option"} value={'0'} key={'select'}/>
            {
              options?.length > 0 && options.map((option: any, index:number) => {
                return(
                  <Picker.Item label={option?.label || option?.name} value={option?.value} key={index.toString()}/>
                )
              })
            }
           
          </Picker>
          <AppFormError
            visible={error && invalid}
            error={error?.message as string}
          />
        </View>
      )}
    />
  );
};

export default AppFormSelectField;

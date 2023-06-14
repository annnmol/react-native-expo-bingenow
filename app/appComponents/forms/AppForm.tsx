import React from "react";
import { FormProvider } from "react-hook-form";
import { KeyboardAvoidingView } from "react-native";
import { StyledForms } from "./StyledForms";

const AppForm: React.FC<AppFormProps> = ({
  // onSubmit,
  style,
  methods,
  children,
  ...otherProps
}) => {
  return (
    <FormProvider {...methods}>
      <KeyboardAvoidingView style={[StyledForms.StyledForm, style && style]}>
        {/* <Form ={methods?.handleSubmit(onSubmit)} {...otherProps}> */}
        {children}
        {/* </Form> */}
      </KeyboardAvoidingView>
    </FormProvider>
  );
};

export default AppForm;

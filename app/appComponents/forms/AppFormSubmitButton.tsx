import React from "react";
import { useFormContext } from "react-hook-form";
import { ToastAndroid } from "react-native";
import AppButton from "../components/AppButton";

const AppFormSubmitButton: React.FC<FormButtonProps> = ({
  title,
  style,
  children,
  handleSubmit,
}) => {
  const {
    watch,
    trigger,
    formState: { errors, isLoading, isSubmitting, isValid, isSubmitted,isValidating,isSubmitSuccessful },
  } = useFormContext();

  let isDisabled = isSubmitting || isLoading;
  
  const handleErrorToast = () => {
    ToastAndroid.show("Fill the required fileds.", ToastAndroid.SHORT);
    console.warn("errors", errors);
  };
  return (
    <AppButton
      onPress={() => { trigger();
        isValid ?  handleSubmit(watch()) : handleErrorToast();
      }}
      disabled={isDisabled}
      underlayColor={"transparent"}
      // variant={isDisabled ? "roundDisabled" : 'round'}
      style={style}
    >
      {children}
    </AppButton>
  );
};

export default AppFormSubmitButton;

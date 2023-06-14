import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastAndroid } from "react-native";
import { AppForm } from "../../appComponents/forms";
import AppFormPasswordField from "../../appComponents/forms/AppFormPasswordField";
import AppFormSubmitButton from "../../appComponents/forms/AppFormSubmitButton";
import AppFormTextField from "../../appComponents/forms/AppFormTextField";
import { ROUTES_NAMES } from "../../navigation/Routes";
import { getRefinedFirebaseAuthErrorMessage } from "../../services/firebase";
import useFirebaseAuthService from "../../services/firebase/useFirebaseAuthService";
import { useAppDispatch } from "../../store";
import { setAuthUser } from "../../store/slices/AuthUserSlice";
import { LoginSchema } from "./contants";

const LoginScreen = () => {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const { logInUser } = useFirebaseAuthService();

  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    delayError: 300,
    mode: "onChange",
    defaultValues: userInput,
    values: userInput,
  });

  const {
    control,
    setError,
    formState: { errors },
  } = methods;

  const handleSubmit = (data: any) => {
    console.info({ data, errors });
    logInUser(data.email, data.password)
      .then((res) => {
        navigation.navigate(ROUTES_NAMES.TABS_NAVIGATOR);
        ToastAndroid.show("User Logged In", ToastAndroid.SHORT);
      })
      .catch((err) => {
        const message = getRefinedFirebaseAuthErrorMessage(err?.message);
        if (message?.includes("email") || message?.includes("Email")) {
          setError("email", { message: message });
        }
        ToastAndroid.show(message, ToastAndroid.SHORT);
      })
      .finally(() => {});
    dispatch(
      setAuthUser({
        email: data?.email,
        password: data?.password,
      })
    );
    navigation.navigate(ROUTES_NAMES.TABS_NAVIGATOR);
    ToastAndroid.show("User Logged In", ToastAndroid.SHORT);
  };

  return (
    <AppForm methods={methods}>
      <AppFormTextField
        name="email"
        control={control}
        label="Email"
        keyboardType={"email-address"}
        caretHidden={false}
        textContentType="emailAddress"
        autoComplete={"email"}
        icon="alternate-email"
      />
      <AppFormPasswordField
        name="password"
        control={control}
        label="Password"
        placeholder={"******"}
        icon="lock"
      />

      <AppFormSubmitButton handleSubmit={handleSubmit} style={{marginVertical:10}}> Login </AppFormSubmitButton>
    </AppForm>
  );
};

export default LoginScreen;

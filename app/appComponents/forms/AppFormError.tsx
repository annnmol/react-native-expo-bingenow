import React from "react";
import { Text } from "react-native";
import { StyledForms } from "./StyledForms";

const AppFormError: React.FC<AppFormErrorProps> = ({
  error,
  visible = false,
  divStyle,
}) => {
  if (!visible || !error || typeof error !== "string") return null;

  return (
    <Text style={[StyledForms.errorText, divStyle && divStyle]}>{error}</Text>
  );
};

export default AppFormError;
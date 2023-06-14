import React from "react";
import { Text } from "react-native";
import { StyledForms } from "./StyledForms";

const AppFormLabel: React.FC<AppFormLabelProps> = ({ label, divStyle }) => {
  return (
    <Text style={[StyledForms.labelText, divStyle && divStyle]}>{label}</Text>
  );
};

export default AppFormLabel;
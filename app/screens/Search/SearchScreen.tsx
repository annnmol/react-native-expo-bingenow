import React from 'react';
import AppSafeViewScreen from "../../appComponents/components/AppSafeViewScreen";
import AppText from "../../appComponents/components/AppText";
import { TextInput } from 'react-native';
import { StyledForms } from '../../appComponents/forms/StyledForms';

const SearchScreen = () => {
  const [search, setSearchTerm] = React.useState('');
  return (
    <AppSafeViewScreen>
    <AppText>Search needs to be implemented</AppText>
    <TextInput
      style={[StyledForms.inputField,{paddingLeft:16}]}
      onChangeText={text => setSearchTerm(text)}
      value={search}
      />
  </AppSafeViewScreen>
  )
}

export default SearchScreen


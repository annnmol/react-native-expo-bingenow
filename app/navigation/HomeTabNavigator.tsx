import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/Home/HomeScreen";
import { ROUTES_NAMES } from "./Routes";
import SearchScreen from "../screens/Search/SearchScreen";
import DetailsScreen from "../screens/Details/[id]";
import ViewAllListings from "../screens/ViewAllListings/ViewAllListings";

const Stack = createStackNavigator();

const HomeTabNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerTintColor: 'white',
      headerTitleAlign: "center",
      headerPressOpacity:1,
      headerBackTitleStyle: false,
      gestureEnabled: true,
      presentation: 'card',
      
      // headerShown: false,
    }} initialRouteName={ROUTES_NAMES.HOMESCREEN}>

    <Stack.Screen name={ROUTES_NAMES.HOMESCREEN} component={HomeScreen} options={{presentation:'card', headerShown:false}}/>
    <Stack.Screen name={ROUTES_NAMES.DETAILS} component={DetailsScreen} options={{presentation:'modal', headerShown:false}}/>
    <Stack.Screen name={ROUTES_NAMES.SEARCH} component={SearchScreen} options={{presentation:'modal', headerShown:false}}/>
    <Stack.Screen name={ROUTES_NAMES.VIEW_ALL_LISTINGS} component={ViewAllListings} options={{presentation:'card', headerShown:true}}/>
  </Stack.Navigator>
  )
}

export default HomeTabNavigator;
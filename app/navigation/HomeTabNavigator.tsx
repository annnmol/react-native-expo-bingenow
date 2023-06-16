import { createStackNavigator } from "@react-navigation/stack";

import ViewAllListings from "../screens/Details/ViewAllListings";
import DetailsScreen from "../screens/Details/[id]";
import CastDetailsScreen from "../screens/Details/cast[id]";
import HomeScreen from "../screens/Home/HomeScreen";
import SearchScreen from "../screens/Search/SearchScreen";
import { ROUTES_NAMES } from "./Routes";


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
    <Stack.Screen name={ROUTES_NAMES.CAST_DETAILS} component={CastDetailsScreen} options={{presentation:'modal', headerShown:false}}/>
  </Stack.Navigator>
  )
}

export default HomeTabNavigator;
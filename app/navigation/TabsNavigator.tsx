
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import AppExpoIcons from '../appComponents/icons/AppExpoIcons';
import FavoritesScreen from '../screens/Favorites/FavoritesScreen';
import HomeScreen from "../screens/Home/HomeScreen";
import SearchScreen from '../screens/Search/SearchScreen';
import UserAccountScreen from '../screens/UserAccount/UserAccountScreen';
import { ROUTES_NAMES } from "./Routes";
import { colors } from '../themes';


const Tab = createBottomTabNavigator();

const TabsNavigator = () => {

  return (
    <Tab.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerTitleAlign: "center",
        headerPressOpacity: 1,
        headerStyle: {
          backgroundColor: "green",
        },
        headerShown: false,
        tabBarActiveBackgroundColor: 'transparent',
        tabBarActiveTintColor: colors.bgColor,
        tabBarInactiveBackgroundColor: 'transparent',
        tabBarInactiveTintColor: colors.dark400,
        tabBarShowLabel: true,
       tabBarStyle:styles.customTabBarStyle,
       tabBarLabelStyle:styles.customTabBarLabelStyle,
        
      }}
      initialRouteName={ROUTES_NAMES.HOMESCREEN_NAVIGATOR}
    >
      {/* <Tab.Screen
        name={ROUTES_NAMES.HOMESCREEN_NAVIGATOR}
        component={HomeScreenNavigator}
        options={{
          tabBarIcon: ({ focused, size, color }) => <AppIcon name={focused ? 'home' : "home-outline"} size={size} color={color} />,
          tabBarLabel:'Home'
        }}
      /> */}
      <Tab.Screen name={ROUTES_NAMES.HOMESCREEN} component={HomeScreen}   options={{
          tabBarIcon: ({ focused, size, color, }) => <AppExpoIcons name={focused ? 'home' : "home-outline"} size={20} color={color} />,
          tabBarLabel:'Home'
        }}/>
      <Tab.Screen name={ROUTES_NAMES.SEARCH} component={SearchScreen}  options={{
          tabBarIcon: ({ focused, size, color }) => <AppExpoIcons name={focused ? 'explore' : "explore"} size={20} color={color} />,
        }}/>
      <Tab.Screen name={ROUTES_NAMES.FAVORITES} component={FavoritesScreen}  options={{
          tabBarIcon: ({ focused, size, color }) => <AppExpoIcons name={focused ? 'favorite' : "favorite-outline"} size={20} color={color} />,
        }}/>
      <Tab.Screen name={ROUTES_NAMES.ACCOUNT} component={UserAccountScreen}  options={{
          tabBarIcon: ({ focused, size, color }) => <AppExpoIcons name={focused ? 'person' : "person-outline"} size={20} color={color} />,
        }}/>
    </Tab.Navigator>
  );
};

export default TabsNavigator;

const styles = StyleSheet.create({
  customTabBarStyle: {
   borderTopWidth:0,
  //  backgroundColor:'red',
   paddingBottom:4,
   paddingTop:4,
  },
  customTabBarLabelStyle: {
   fontSize:12,
    fontWeight:'400',
    letterSpacing:0.5,
  }
});

// import { createNativeStackNavigator } from "@react-navigation/stack";
import { ROUTES_NAMES } from "./Routes";
import RegisterScreen from "../screens/Auth/RegisterScreen";
import LoginScreen from "../screens/Auth/LoginScreen";
import { createStackNavigator } from "@react-navigation/stack";
import TabsNavigator from "./TabsNavigator";
import WelcomeScreen from "../screens/Auth/WelcomeScreen";
import DrawerNavigator from "./DrawerNavigator";
import AuthScreen from "../screens/Auth/AuthScreen";

// const Stack = createNativeStackNavigator();
const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerTitleAlign: "center",
        headerPressOpacity: 1,
        headerStyle: {
          backgroundColor: "green",
        },
        headerBackTitleStyle: false,
        headerShown: false,
        gestureEnabled: true,
        presentation: "card",
      }}
      initialRouteName={ROUTES_NAMES.WELCOME}
    >
      <Stack.Screen name={ROUTES_NAMES.WELCOME} component={WelcomeScreen} />
      <Stack.Screen name={ROUTES_NAMES.LOGIN} component={LoginScreen} />
      {/* <Stack.Screen name={ROUTES_NAMES.SIGNUP} component={RegisterScreen} /> */}
      <Stack.Screen name={ROUTES_NAMES.SIGNUP} component={AuthScreen} />

      <Stack.Screen
        name={ROUTES_NAMES.TABS_NAVIGATOR}
        component={TabsNavigator}
      />
      <Stack.Screen
        name={ROUTES_NAMES.DRAWER_NAVIGATOR}
        component={DrawerNavigator}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;

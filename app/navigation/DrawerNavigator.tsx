import { createDrawerNavigator } from "@react-navigation/drawer";
import { ROUTES_NAMES } from "./Routes";

import HelpScreen from "../screens/Help/HelpScreen";
import TabsNavigator from "./TabsNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      useLegacyImplementation={false}
      initialRouteName={ROUTES_NAMES.TABS_NAVIGATOR}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name={ROUTES_NAMES.HELP} component={HelpScreen} />
      <Drawer.Screen
        name={ROUTES_NAMES.TABS_NAVIGATOR}
        component={TabsNavigator}
        options={{
          drawerItemStyle: { height: 0 },
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

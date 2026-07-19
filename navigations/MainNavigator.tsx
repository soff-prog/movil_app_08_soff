import { createDrawerNavigator } from "@react-navigation/drawer";
import HechiceroScreen from "../screens/GuardarScreen";
import HechizosScreen from "../screens/HechizoScreen";
import ListaHechicerosScreen from "../screens/ListaHechicerosScreen";
import { NavigationContainer } from "@react-navigation/native";
import ArenaScreen from "../screens/ArenaScreen";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#485685' }, headerTintColor: 'white',
        drawerActiveTintColor: 'white', drawerActiveBackgroundColor: '#485685',
        drawerStyle: { backgroundColor: '#535c7a' }

      }}
    >
      <Drawer.Screen name="Hechicero" component={HechiceroScreen} />
      <Drawer.Screen name="Hechizos" component={HechizosScreen} />
      <Drawer.Screen name="Lista Hechiceros" component={ListaHechicerosScreen} />
      <Drawer.Screen name="Arena" component={ArenaScreen}
      />
    </Drawer.Navigator>
  );
}

export function MainNavigator() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  )
}
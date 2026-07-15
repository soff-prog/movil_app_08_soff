import { createDrawerNavigator } from "@react-navigation/drawer";
import HechiceroScreen from "../screens/HechiceroScreen";
import HechizosScreen from "../screens/HechizosScreen";
import ListaHechicerosScreen from "../screens/ListaHechicerosScreen";
import { NavigationContainer } from "@react-navigation/native";

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
    </Drawer.Navigator>
  );
}

export function MainNavigator(){
    return (
        <NavigationContainer>
            <MyDrawer />
        </NavigationContainer>
    )
}
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { MainNavigator } from './navigations/MainNavigator';

import { LogBox } from 'react-native';

// Ocultar el warning de InteractionManager
LogBox.ignoreLogs([
  'InteractionManager has been deprecated',
]);


export default function App() {
  return (
  <MainNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AbastecimentosScreen from './screens/AbastecimentosScreen';
import FretesScreen from './screens/FretesScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Abastecimentos">
        <Drawer.Screen name="Abastecimentos" component={AbastecimentosScreen} />
        <Drawer.Screen name="Fretes" component={FretesScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import AbastecimentosScreen from './screens/AbastecimentosScreen';
import FretesScreen from './screens/FretesScreen';
import InfoScreen from './screens/InfoScreen';
import SairScreen from './screens/SairScreen'

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const Drawer = createDrawerNavigator();

export default function App( props ) {

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Abastecimentos" backBehavior="history" screenOptions={navigationStyle}>
        <Drawer.Screen name="Abastecimentos" component={AbastecimentosScreen} options={{drawerIcon: (props) => (<FontAwesome5 name="gas-pump" size={24}/>),}}/>
        <Drawer.Screen name="Fretes" component={FretesScreen} options={{drawerIcon: (props) => (<FontAwesome5 name="shuttle-van" size={24}/>),}}/>
        <Drawer.Screen name="Informações" component={InfoScreen} options={{drawerIcon: (props) => (<FontAwesome5 name="info" size={24}/>),}}/>
        <Drawer.Screen name="Sair" component={SairScreen} options={{drawerIcon: (props) => (<FontAwesome5 name="chevron-circle-left" size={24}/>),}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const navigationStyle = {
  // drawer styling
  drawerStyle: {
    backgroundColor: '#498013',
    width: "70%",  
  },
  drawerActiveTintColor: "#ffffff",
  // header styling
  headerStyle: {
    backgroundColor: '#F6F6F6',
  },
  headerTitleContainerStyle: {
    alignItems: "center",
    width: "50%",
  },
  headerTitleAlign: "center",
  headerRightContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerLeftContainerStyle: {
    justifyContent: "center",
    alignItems: "center"
  },
  headerTitleStyle: {
    fontWeight: "bold"
  },
}
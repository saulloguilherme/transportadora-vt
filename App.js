import React from 'react';
import { NavigationContainer, DrawerActions} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Pressable } from 'react-native';

import 'react-native-gesture-handler';

import AbastecimentosScreen from './screens/AbastecimentosScreen';
import AbastecimentoForm from './screens/AbastecimentoForm';

import FretesScreen from './screens/FretesScreen';

import InfoScreen from './screens/InfoScreen';
import SairScreen from './screens/SairScreen'

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FreteForm from './screens/FreteForm';

const Stack = createNativeStackNavigator();

function Abastecimento ({ navigation }) {
  return (
<Stack.Navigator initialRouteName='Abastecimento' screenOptions={navigationStyle}>
  <Stack.Screen name="Abastecimento" component={AbastecimentosScreen} options={{headerShown: true}} />
  <Stack.Screen name="AbastecimentoForm" component={AbastecimentoForm} options={{headerShown: true}} />
</Stack.Navigator>
)}

function Frete ({ navigation }) {
  return (
<Stack.Navigator initialRouteName='Fretes' screenOptions={navigationStyle}>
  <Stack.Screen name="Fretes" component={FretesScreen} options={{headerShown: true}} />
  <Stack.Screen name="FreteForm" component={FreteForm} options={{headerShown: true}} />
</Stack.Navigator>
)}

const Drawer = createDrawerNavigator();

export default function App( props ) {

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Abastecimento" backBehavior="history" screenOptions={navigationStyle}>
        <Drawer.Screen name="Abastecimentos" component={Abastecimento} options={{ headerShown: false, drawerIcon: (props) => (<FontAwesome5 name="gas-pump" size={24}/>),}}/>
        <Drawer.Screen name="Fretes" component={Frete} options={{ headerShown: false, drawerIcon: (props) => (<FontAwesome5 name="shuttle-van" size={24}/>),}}/>
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
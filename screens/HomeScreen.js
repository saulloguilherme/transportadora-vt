import React from 'react';
import { NavigationContainer, DrawerActions} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import 'react-native-gesture-handler';

import AbastecimentosScreen from './AbastecimentosScreen';
import AbastecimentoForm from './AbastecimentoForm';

import FretesScreen from './FretesScreen';

import InfoScreen from './InfoScreen';
import SairScreen from './SairScreen'

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FreteForm from './FreteForm';

const Stack = createNativeStackNavigator();

function Abastecimento ({ navigation }) {
  return (
<Stack.Navigator initialRouteName='Abastecimento' screenOptions={navigationStyle}>
  <Stack.Screen name="Abastecimentos" component={AbastecimentosScreen} options={{headerShown: true}} />
  <Stack.Screen name="AbastecimentoForm" component={AbastecimentoForm} options={{headerShown: true}} />
</Stack.Navigator>
)}

function Frete ({ navigation }) {
  return (
<Stack.Navigator initialRouteName='Frete' screenOptions={navigationStyle}>
  <Stack.Screen name="Fretes" component={FretesScreen} options={{headerShown: true}} />
  <Stack.Screen name="FreteForm" component={FreteForm} options={{headerShown: true}} />
</Stack.Navigator>
)}

const Drawer = createDrawerNavigator();

export default function HomeScreen( props ) {

  return (
      <Drawer.Navigator initialRouteName="Abastecimento" backBehavior="history" screenOptions={navigationStyle}>
        <Drawer.Screen name="Abastecimento" component={Abastecimento} options={{ headerShown: false, drawerIcon: (props) => (<FontAwesome5 name="gas-pump" size={24}/>),}}/>
        <Drawer.Screen name="Frete" component={Frete} options={{ headerShown: false, drawerIcon: (props) => (<FontAwesome5 name="shuttle-van" size={24}/>),}}/>
        <Drawer.Screen name="Informações" component={InfoScreen} options={{drawerIcon: (props) => (<FontAwesome5 name="info" size={24}/>),}}/>
        <Drawer.Screen name="Sair" component={SairScreen} options={{drawerIcon: (props) => (<FontAwesome5 name="chevron-circle-left" size={24}/>),}}/>
      </Drawer.Navigator>
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
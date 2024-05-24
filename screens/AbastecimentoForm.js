import React, { useState } from 'react'
import { View, Text, Pressable, TextInput, StyleSheet, Keyboard, FlatList, Button } from 'react-native'
import { StackActions } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import TextInputField from '../components/TextInputField';


export default function AbastecimentoForm({ navigation }) {
  const toBack = () => navigation.dispatch(StackActions.pop());
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "#899D74",
      },
      title: "Novo Registro",
      headerRight: (props) => (
        <FontAwesome5 name="gas-pump" size={32}/>
      ),
      headerLeft: (props) => (
        <Pressable  {...props} onPress={toBack}>
              <FontAwesome5 name="arrow-left" size={32}></FontAwesome5>
        </Pressable>
      ),
    });
  }, [navigation]);

  const abastecimentoList = [{
    id: 1,
    placa: "QEL5117",
    tipo: "Gasolina",
    posto: "Petrocem",
    autorizante: "Gustavo",
    valor: 2419.2,
  },{
    id: 2,
    placa: "QEL0319",
    tipo: "Gasolina",
    posto: "Ipiranga",
    autorizante: "Sara",
    valor: 2419.2,
  },{
    id: 3,
    placa: "PQW 3941",
    tipo: "Gasolina",
    posto: "Petromil",
    autorizante: "Gisele",
    valor: 2419.2,
  },{
    id: 4,
    placa: "KLS2123",
    tipo: "Diesel",
    posto: "Shell",
    autorizante: "Rogério",
    valor: 2419.2,
  }]

  const peopleList = [
    { id: 1, name: "João Silva" },
    { id: 2, name: "Maria Oliveira" },
    { id: 3, name: "Pedro Santos" },
    { id: 4, name: "Ana Souza" },
    { id: 5, name: "Carlos Pereira" },
  ];

  const [placa, setSelectedPlaca] = useState('')
  const [posto, setSelectedPosto] = useState('')
  const [autorizante, setSelectedAutorizante] = useState('')

  return (
    <View style={style.containter} onTouchStart={() => Keyboard.dismiss()}>
      <TextInputField placeholder={"Digite a placa do veículo"} objectList={abastecimentoList} column={"placa"} setSelectedVariable={setSelectedPlaca}></TextInputField>
      <TextInputField placeholder={"Digite o nome do posto"} objectList={abastecimentoList} column={"posto"} setSelectedVariable={setSelectedPosto}></TextInputField>
      <TextInputField placeholder={"Digite o autorizante do registro"} objectList={abastecimentoList} column={"autorizante"} setSelectedVariable={setSelectedAutorizante}></TextInputField>
      <Pressable style={style.enviar} /* TODO: listener observando campos para mudar a cor do botão caso não estejam preenchidos */> 
        <Text style={{ fontWeight: 'bold', fontSize: 20}}>Enviar</Text>  
      </Pressable>
    </View>
  )
}

const style = StyleSheet.create({
  containter: {
    width: "100%",
    height: "100%",
    backgroundColor: "#899D74"
  },
  enviar: {
    width: "90%",
    height: 60,
    alignItems: "center",
    backgroundColor: "#ffffff",
    alignSelf: 'center',
    margin: 10,
    justifyContent: 'center',
    borderWidth: 1,
    position: "absolute",
    bottom: "3%",
  },
})
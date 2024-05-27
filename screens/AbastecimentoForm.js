import React, { useState } from 'react'
import { View, Text, Pressable, TextInput, StyleSheet, Keyboard, FlatList, Button, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { StackActions } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import TextInputField from '../components/TextInputField';
import RadioComponent from '../components/RadioTwoOptions';
import RadioTwoOptions from '../components/RadioTwoOptions';
import NumericalInputField from '../components/NumericalInputField';


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

  const [placa, setSelectedPlaca] = useState('');
  const [validPlaca, setValidPlaca] = useState(false);

  const [posto, setSelectedPosto] = useState('');
  const [validPosto, setValidPosto] = useState(false);

  const [autorizante, setSelectedAutorizante] = useState('');
  const [validAutorizante, setValidAutorizante] = useState(false);

  const [dieselArla, setSelectedDieselArla] = useState('Somente Diesel');
  const variacoes = ["Somente Diesel", "Diesel e Arla"]
  const [validDieselArla, setValidDieselArla] = useState(false);

  const [diesel, setSelectedDiesel] = useState();
  const [validDiesel, setValidDiesel] = useState(false);

  const [arla, setSelectedArla] = useState();
  const [validArla, setValidArla] = useState(false);

  function allSelected() {
    return validPlaca && validPosto && validAutorizante && validDieselArla && validDiesel && (dieselArla == variacoes[1] ? validArla : true);
  };

  return (
  <KeyboardAvoidingView behavior={"position"} enabled={() => {return false;}}>
    <View style={style.containter} onTouchStart={() => Keyboard.dismiss()}>
      <Text>{placa}{posto}{autorizante}{dieselArla}</Text>
      <TextInputField placeholder={"Digite a placa do veículo"} objectList={abastecimentoList} column={"placa"} setSelectedVariable={setSelectedPlaca} setValidVariable={setValidPlaca}></TextInputField>
      <TextInputField placeholder={"Digite o nome do posto"} objectList={abastecimentoList} column={"posto"} setSelectedVariable={setSelectedPosto} setValidVariable={setValidPosto}></TextInputField>
      <TextInputField placeholder={"Digite o autorizante do registro"} objectList={abastecimentoList} column={"autorizante"} setSelectedVariable={setSelectedAutorizante} setValidVariable={setValidAutorizante}></TextInputField>
      <RadioTwoOptions options={variacoes} setSelectedVariable={setSelectedDieselArla} setValidVariable={setValidDieselArla}></RadioTwoOptions>
      <NumericalInputField placeholder={"Diesel"} variable={diesel} setSelectedVariable={setSelectedDiesel} setValidVariable={setValidDiesel}></NumericalInputField>
      {dieselArla == variacoes[1] ? <NumericalInputField placeholder={"Arla"} variable={arla} setSelectedVariable={setSelectedArla} setValidVariable={setValidArla}></NumericalInputField> : null} 
      <Pressable style={[style.enviar, allSelected() ? style.preenchido : style.nao_preenchido ]}> 
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Enviar</Text>  
      </Pressable>
    </View>
    </KeyboardAvoidingView>
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
    alignSelf: 'center',  
    margin: 10,
    justifyContent: 'center',
    borderWidth: 1,
    position: "absolute",
    bottom: "0%",
  },
  preenchido: {
    opacity: 1,
    backgroundColor: "#ffffff",
  },
  nao_preenchido: {
    backgroundColor: "#ffffff",
    opacity: 0.4,
  }
})
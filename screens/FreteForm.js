import { View, Text, StyleSheet, Keyboard, Pressable } from 'react-native'
import { StackActions } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import React, { useState } from 'react'
import TextInputField from '../components/TextInputField';

export default function FreteForm({ navigation }) {
    const toBack = () => navigation.dispatch(StackActions.pop());
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "#899D74",
      },
      title: "Novo Registro",
      headerRight: (props) => (
        <FontAwesome5 name="shuttle-van" size={32}/>
      ),
      headerLeft: (props) => (
        <Pressable  {...props} onPress={toBack}>
              <FontAwesome5 name="arrow-left" size={32}></FontAwesome5>
        </Pressable>
      ),
    });
  }, [navigation]);

  const freteList = [{
    id: 1,
    placa: "QEL5117",
    transportadora: "Ramos",
    origem: "São Miguel",
    destino: "Santana do Araguaia",
    material: "Soja"
  },{
    id: 2,
    placa: "QEP0117",
    transportadora: "Concreta",
    origem: "Belém",
    destino: "Aracaju",
    material: "Milho"
  },{
    id: 3,
    placa: "QEK3117",
    transportadora: "RDM",
    origem: "Porto de Santos",
    destino: "São Paulo",
    material: "Calcario"
  },{
    id: 4,
    placa: "REL5317",
    transportadora: "Lutano",
    origem: "Barcarena",
    destino: "Bacabau",
    material: "Minério"
  },]

  const [placa, setSelectedPlaca] = useState('');
  const [validPlaca, setValidPlaca] = useState(false);

  const [transportadora, setSelectedTransportadora] = useState('');
  const [validTransportadora, setValidTransportadora] = useState(false);

  const [origem, setSelectedOrigem] = useState('');
  const [validOrigem, setValidOrigem] = useState(false);

  const [destino, setSelectedDestino] = useState('');
  const [validDestino, setValidDestino] = useState(false);

  const [material, setSelectedMaterial] = useState('');
  const [validMaterial, setValidMaterial] = useState(false);

  // TODO INSERIR INPUT DE TEXTO

  function allSelected() {
    return validPlaca && validTransportadora && validOrigem && validDestino && validMaterial;
  };
  

  return (
    <View style={style.containter} onTouchStart={() => Keyboard.dismiss()}>
      <Text>{placa}{transportadora}{origem}{destino}{material}</Text>
      <TextInputField placeholder={"Digite a placa do veículo"} objectList={freteList} column={"placa"} setSelectedVariable={setSelectedPlaca} setValidVariable={setValidPlaca}></TextInputField>
      <TextInputField placeholder={"Digite a transportadora"} objectList={freteList} column={"transportadora"} setSelectedVariable={setSelectedTransportadora} setValidVariable={setValidTransportadora}></TextInputField>
      <TextInputField placeholder={"Digite a origem"} objectList={freteList} column={"origem"} setSelectedVariable={setSelectedOrigem} setValidVariable={setValidOrigem}></TextInputField>
      <TextInputField placeholder={"Digite o destino"} objectList={freteList} column={"destino"} setSelectedVariable={setSelectedDestino} setValidVariable={setValidDestino}></TextInputField>
      <TextInputField placeholder={"Digite o material transportado"} objectList={freteList} column={"material"} setSelectedVariable={setSelectedMaterial} setValidVariable={setValidMaterial}></TextInputField>
      <Pressable style={[style.enviar, allSelected() ? style.preenchido : style.nao_preenchido ]}> 
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Enviar</Text>  
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
import React, { useCallback, useEffect, useState } from 'react'
import { View, Text, Pressable, TextInput, StyleSheet, Keyboard, Button, KeyboardAvoidingView, Image, StatusBar } from 'react-native'
import { StackActions } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

import TextInputField from '../components/TextInputField';
import RadioTwoOptions from '../components/RadioTwoOptions';
import NumericalInputField from '../components/NumericalInputField';
import CameraModal from '../components/CameraModal';

import { supabase } from "../services/supabase"

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

  const [veiculosData, setVeiculosData] = useState([])

  const [autorizantesData, setAutorizantesData] = useState([])
  
  const [fornecedoresData, setFornecedoresData] = useState([])

  const getVeiculosData = async () => {
    // const { data, error } = await supabase.from('veiculo').select();
    // return data;
  }

  const getAutorizantesData = async () => {
    // const { data, error } = await supabase.from('autorizante').select();
    // return data;
  }

  const getFornecedoresData = async () => {
    // const { data, error } = await supabase.from('fornecedor').select();
    // return data;
  }

 /* useEffect(useCallback(()=>{
    setAutorizantesData(getAutorizantesData())
    setVeiculosData(getVeiculosData())
    setFornecedoresData(getFornecedoresData())
  }));
*/
  const [placa, setSelectedPlaca] = useState('');
  const [validPlaca, setValidPlaca] = useState(false);

  const [posto, setSelectedPosto] = useState('');
  const [validPosto, setValidPosto] = useState(false);

  const [autorizante, setSelectedAutorizante] = useState('');
  const [validAutorizante, setValidAutorizante] = useState(false);

  const [dieselArla, setSelectedDieselArla] = useState('Somente Diesel');
  const variacoes = ["Somente Diesel", "Diesel e Arla"]
  const [validDieselArla, setValidDieselArla] = useState(false);

  const [valorDiesel, setSelectedValorDiesel] = useState(0);
  const [litrosDiesel, setSelectedLitrosDiesel] = useState(0);
  const [validDiesel, setValidDiesel] = useState(false);

  const [valorArla, setSelectedValorArla] = useState(0);
  const [litrosArla, setSelectedLitrosArla] = useState(0);
  const [validArla, setValidArla] = useState(false);
  
  const [notaFiscal, setNotaFiscal] = useState("");
  const [isCameraModalVisible, setCameraModalVisible] = useState(false);

  function allSelected() {
    return validPlaca && validPosto && validAutorizante && validDieselArla && validDiesel && (dieselArla == variacoes[1] ? validArla : true);
  };

  return (
  <KeyboardAvoidingView behavior={"position"} enabled={false}>
    <View style={style.containter} onTouchStart={() => Keyboard.dismiss()}>
      <Text>{placa}{posto}{autorizante}{dieselArla}</Text>
      <TextInputField placeholder={"Digite a placa do veículo"} objectList={veiculosData} column={"placa"} setSelectedVariable={setSelectedPlaca} setValidVariable={setValidPlaca}></TextInputField>
      <TextInputField placeholder={"Digite o nome do posto"} objectList={fornecedoresData} column={"nome"} setSelectedVariable={setSelectedPosto} setValidVariable={setValidPosto}></TextInputField>
      <TextInputField placeholder={"Digite o autorizante do registro"} objectList={autorizantesData} column={"nome"} setSelectedVariable={setSelectedAutorizante} setValidVariable={setValidAutorizante}></TextInputField>
      <RadioTwoOptions options={variacoes} setSelectedVariable={setSelectedDieselArla} setValidVariable={setValidDieselArla}></RadioTwoOptions>
      <NumericalInputField placeholder={"Diesel"} setSelectedValue={setSelectedValorDiesel} SetSelectedLiters={setSelectedLitrosDiesel} setValidVariable={setValidDiesel}></NumericalInputField>
      {dieselArla == variacoes[1] ? <NumericalInputField placeholder={"Arla"} setSelectedValue={setSelectedValorArla} SetSelectedLiters={setSelectedLitrosArla} setValidVariable={setValidArla}></NumericalInputField> : null} 

      <View style={style.button_image}>
        <Pressable onPress={() => setCameraModalVisible(true)}>
          <Text>Escanear QR Code</Text>  
        </Pressable>
      </View>
      
      {isCameraModalVisible ? <CameraModal setVisible={setCameraModalVisible} isVisible={isCameraModalVisible} setNotaFiscal={setNotaFiscal}/> : null}
      {notaFiscal ? <Text style={{alignSelf: 'center'}}>{notaFiscal}</Text>: null}

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
    backgroundColor: "#899D74",
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
  },
  image: {
    padding: 0,
    margin: 0,
    width: 150,
    height: 200 ,
    alignSelf: 'center',
  },
  button_image: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#f7f7f7",
    width: "40%",
    height: "8%",
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: "center",
    borderRadius: 40
  }
})

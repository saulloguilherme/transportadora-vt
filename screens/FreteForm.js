import React, { useCallback, useEffect, useState } from 'react'
import { View, Text, StyleSheet, Keyboard, Pressable, Image } from 'react-native'
import { StackActions } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

import TextInputField from '../components/TextInputField';
import TextInputFieldWithoutChoices from '../components/TextInputFieldWithoutChoices';
import NumericalInputOneField from '../components/NumericalInputOneField';
import CameraModal from '../components/CameraModal';
import { supabase } from '../services/supabase';

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

  const [veiculosData, setVeiculosData] = useState([])

  const getVeiculosData = async () => {
    // const { data, error } = await supabase.from('veiculo').select();
    // return data;
  }

  /*
  useEffect(useCallback(()=>{
    setVeiculosData(getVeiculosData())
  }));
*/
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

  const [peso, setSelectedPeso] = useState(0);
  const [validPeso, setValidPeso] = useState(false);

  const [notaFiscal, setNotaFiscal] = useState("");
  const [isCameraModalVisible, setCameraModalVisible] = useState(false);

  function allSelected() {
    return validPlaca && validTransportadora && validOrigem && validDestino && validMaterial;
  };
  

  return (
    <View style={style.containter} onTouchStart={() => Keyboard.dismiss()}>
      <Text>{placa}{transportadora}{origem}{destino}{material}</Text>
      <TextInputField placeholder={"Digite a placa do veículo"} objectList={veiculosData} column={"placa"} setSelectedVariable={setSelectedPlaca} setValidVariable={setValidPlaca}></TextInputField>
      <TextInputFieldWithoutChoices placeholder={"Digite a transportadora"} setSelectedVariable={setSelectedTransportadora} setValidVariable={setValidTransportadora}/>
      <TextInputFieldWithoutChoices placeholder={"Digite a origem"} setSelectedVariable={setSelectedOrigem} setValidVariable={setValidOrigem}/>
      <TextInputFieldWithoutChoices placeholder={"Digite o destino"} setSelectedVariable={setSelectedDestino} setValidVariable={setValidDestino}/>
      <TextInputFieldWithoutChoices placeholder={"Digite o material transportado"} setSelectedVariable={setSelectedMaterial} setValidVariable={setValidMaterial} />
      <NumericalInputOneField placeholder={"Peso da Carga"} setSelectedVariable={setSelectedPeso} setValidVariable={setValidPeso} />

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
import { View, Text, TextInput, StyleSheet, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { TextInputMask } from 'react-native-masked-text';


export default function NumericalInputField ({ placeholder , setSelectedValue, SetSelectedLiters, setValidVariable }) {

  const [variableValue, setVariableValue] = useState("");
  const [variableLiters, setVariableLiters] = useState("");

  const [isValidValue, setValidValue] = useState(false);
  const [isValidLiters, setValidLiters] = useState(false);
  
  

  const Icon = () =>  {
    return isValidValue && isValidLiters ? <FontAwesome5 name="check-circle" size={18} color="black" /> : <FontAwesome5 name="exclamation-circle" size={18} color="yellow" />;
  }

  const onChangedValue = value => {
    setVariableValue(value);
    value = value.replace("R$ ", "");
    value = value.replace(".", "");
    value = value.replace(".", "");
    value = value.replace(",", ".");
    setSelectedValue(value);
    
    if (value > 0 ) {
      isValidLiters ? setValidVariable(true) : setValidVariable(false);
      setValidValue(true);
    } else {
      setValidVariable(false)
      setValidValue(false)
    }

  }

  const onChangedLiters = value => {
    setVariableLiters(value);
    value = value.replace("Lts ", "");
    value = value.replace(".", "");
    value = value.replace(".", "");
    value = value.replace(",", ".");
    SetSelectedLiters(value);
    

    if (value > 0) {
      isValidValue ? setValidVariable(true) : setValidVariable(false);
      setValidLiters(true);
    } else {
      setValidVariable(false);
      setValidLiters(false);
    }

  }

  return (
    <View style={style.container}>
      
      <View style={style.placeholder_line}>
        <Text style={style.placeholder_text}>{placeholder + " "}</Text>
        <Icon></Icon>
      </View>
      
      <View style={style.container_form}>

        <View style={style.form}>
          <TextInputMask style={style.input} placeholder='Valor' value={variableValue} type={'money'} onChangeText={onChangedValue} options={{
            precision: 2,
            separator: ',',
            delimiter: '.',
            unit: 'R$ ',
            suffixUnit: ''}}/>
        </View>

        <View style={style.form}>
          <TextInputMask style={style.input} placeholder='Litros' value={variableLiters} type={'money'} onChangeText={onChangedLiters} options={{
            precision: 2,
            separator: ',',
            delimiter: '.',
            unit: 'Lts ',
            suffixUnit: ''}}/>
        </View>

      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
      flexDirection: "column",
      width: "100%",
      justifyContent: 'center',
      alignItems: "center"
  },
  input: {
      width: "52%",
      height: 40,
      margin: 8,
      borderWidth: 1,
      padding: 10,
    },
  container_form: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-around',
  },
  form: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'center'
  },
  placeholder_line: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'center'
  },
  placeholder_text: {
    fontWeight: "bold",
    fontSize: 20
  }
})
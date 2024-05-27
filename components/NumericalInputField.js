import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome5 } from '@expo/vector-icons';

export default function NumericalInputField ({ placeholder, setSelectedValue, SetSelectedLiters, setValidVariable }) {

  const [variableValue, setVariableValue] = useState();
  const [variableLiters, setVariableLiters] = useState();

  function isValid(value) {
      const parsedQty = Number.parseFloat(value)
      if(Number.isNaN(parsedQty)){
          return false;
      } else if (parsedQty <= 0) {
          return false;
      } else {
          return true;
      }
  }

  const Icon = ({estado}) =>  {
    return estado(0.1) ? <FontAwesome5 name="check-circle" size={30} color="black" /> : <FontAwesome5 name="exclamation-circle" size={30} color="yellow" />;
  }

  return (
    <View style={style.container}>
      <View style={{flexDirection:"row", alignItems: 'center', justifyContent: 'space-evenly'}}>
      <TextInput style={style.input} placeholder={"Insira o valor do litro de " + placeholder} keyboardType='numeric' value={variableValue} ></TextInput>
      <Icon estado={isValid}></Icon>
      </View>
      <View style={{flexDirection:"row", alignItems: 'center', justifyContent: 'space-evenly'}}>
      <TextInput style={style.input} placeholder={"Insira a quantidade de litros de " + placeholder} keyboardType='numeric' value={variableLiters}></TextInput>
      <Icon estado={isValid}></Icon>
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
        width: "70%",
        height: 40,
        margin: 8,
        borderWidth: 1,
        padding: 10,
      },
})
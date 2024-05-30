import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome5 } from '@expo/vector-icons'

export default function RadioTwoOptions({ options, setSelectedVariable, setValidVariable }) {
  
  const [option1, setOption1] = useState(true);
  const [option2, setOption2] = useState(false);

  const Icon = ({ value }) =>  {
    return value ? <FontAwesome5 name="dot-circle" size={24} color="black" /> : <FontAwesome5 name="circle" size={24} color="black" />;
  }

  return (
    <View style={style.container}>
      <View style={style.opcao} onTouchStart={() => {
        setOption1(true);
        setOption2(false);
        setSelectedVariable(options[0]);
        setValidVariable(true);
      }}>
        <Icon value={option1}></Icon>
        <Text style={style.text}>{options[0]}</Text>
      </View>
      <View style={style.opcao} onTouchStart={() => {
        setOption1(false);
        setOption2(true);
        setSelectedVariable(options[1]);
        setValidVariable(true);
      }}>
        <Icon value={option2}></Icon>
        <Text style={style.text}>{options[1]}</Text>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "center",
    marginVertical: 6,
  },
  opcao: {
    flexDirection: "row",
  },
  text: {
    paddingLeft: 6,
  }
})
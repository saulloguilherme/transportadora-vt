import { View, Text, StyleSheet, TextInput, FlatList, Pressable, Keyboard } from 'react-native'
import React, { useState } from 'react'

export default function TextInputField({ placeholder, objectList, column, setSelectedVariable }) {


  const [searchText, setSearchText] = useState('');  
  const [filteredVariableList, setFilteredVariableList] = useState([]);
  
  const filterVariable = value => {
    setSearchText(value);
    let filteredData = objectList && objectList.length > 0 ? objectList.filter(objeto => objeto[column].toLowerCase().includes(value.toLowerCase())) : [];
    setFilteredVariableList([...filteredData]);
  };
  
  const onVariableSelected = value => {
    setSearchText(value)
    setSelectedVariable(value);
    setFilteredVariableList([]);
  };

  const closeList = () => {
    setFilteredVariableList([])
  }

  return (
    <View style={style.containter}>
      <TextInput style={style.input} value={searchText} placeholder={placeholder} onChangeText={filterVariable} onSubmitEditing={closeList} />
      <FlatList data={filteredVariableList} renderItem={({ item }) => (
          <Pressable onPress={() => onVariableSelected(item[column])}>
            <View style={style.itens}>
              <Text style={style.conteudo}>{item[column]}</Text>
            </View>
          </Pressable>
        )}
        keyExtractor={item => item.id.toString()} />
    </View>
  )
}

const style = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        marginBottom: 0
    },
    itens: {
      alignSelf: "center",
      width: "90%",
      height: 40,
      borderWidth: 1,
      paddingBottom: 10,
    },
    conteudo: {

    }
})
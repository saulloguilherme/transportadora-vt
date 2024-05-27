import { View, Text, StyleSheet, TextInput, FlatList, Pressable, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome5 } from '@expo/vector-icons';

export default function TextInputField({ placeholder, objectList, column, setSelectedVariable, setValidVariable }) {


  const [searchText, setSearchText] = useState('');  
  const [filteredVariableList, setFilteredVariableList] = useState([]);

  function validEntry(value) {
    for (let i = 0; i < objectList.length; i++) {
      if (String(objectList[i][column]).valueOf().toLowerCase() == String(value).valueOf().toLowerCase()) {
        return true;
      };
    }
    return false;
  };
  
  const filterVariable = value => {
    setSearchText(value);

    if (validEntry(value)) {
      setSelectedVariable(value);
      setFilteredVariableList([]);
      setValidVariable(true);
    } else {
      let filteredData = objectList && objectList.length > 0 ? objectList.filter(objeto => objeto[column].toLowerCase().includes(value.toLowerCase())) : [];
      setFilteredVariableList([...filteredData]);
      setValidVariable(false);
    }
  };
  
  const onVariableSelected = value => {
    setSearchText(value);
    setSelectedVariable(value);
    setFilteredVariableList([]);
    setValidVariable(true)
  };

  const closeList = () => {
    setFilteredVariableList([]);
  }

    const Icon = ({estado}) =>  {
    return estado(searchText) ? <FontAwesome5 name="check-circle" size={30} color="black" /> : <FontAwesome5 name="exclamation-circle" size={30} color="yellow" />;
  }

  return (
    <View style={style.containter}>
      <View style={ style.caixa_input }>
      <TextInput style={style.input} value={searchText} placeholder={placeholder} onChangeText={filterVariable} onSubmitEditing={closeList} />
      <View style={style.icon}>
        <Icon estado={validEntry}></Icon>
      </View>
      </View>
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
    width: "80%",
    height: 40,
    margin: 8,
    borderWidth: 1,
    padding: 10,
  },
  itens: {
    alignSelf: 'center',
    width: "70%",
    height: 40,
    borderWidth: 1,
    paddingBottom: 10,
  },
  conteudo: {

  },
  caixa_input: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  icon: {
    paddingRight: 12
  }
})
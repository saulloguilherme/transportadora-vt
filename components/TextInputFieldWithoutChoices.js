import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome5 } from '@expo/vector-icons';

export default function TextInputFieldWithoutChoices({ placeholder, setSelectedVariable, setValidVariable }) {
    
    const [searchText, setSearchText] = useState('');

    function validEntry(value) {
        if (value.length > 2) {
            return true;
        }

        return false;
    }
    
    const onChange = value   => {
        setSearchText(value);

        if (validEntry(value)) {    
          setSelectedVariable(value);
          setValidVariable(true);
        } else {
          setValidVariable(false);
        }
    };

    const Icon = ({estado}) =>  {
        return estado(searchText) ? <FontAwesome5 name="check-circle" size={30} color="black" /> : <FontAwesome5 name="exclamation-circle" size={30} color="yellow" />;
      }

  return (
    <View style={style.containter}>
      <View style={ style.caixa_input }>
        <TextInput style={style.input} value={searchText} placeholder={placeholder} onChangeText={onChange} />
        <View style={style.icon}>
          <Icon estado={validEntry}></Icon>
        </View>
      </View>
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
    caixa_input: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly'
    },
    icon: {
      paddingRight: 12
    }
  })
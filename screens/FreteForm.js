import { View, Text, StyleSheet, Keyboard, Pressable } from 'react-native'
import { StackActions } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react'

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
  

  return (
    <View style={style.containter} onTouchStart={() => Keyboard.dismiss()}>
      <Text>FreteForm</Text>
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
      backgroundColor: "#ffffff",
      alignSelf: 'center',
      margin: 10,
      justifyContent: 'center',
      borderWidth: 1,
      position: "absolute",
      bottom: "3%",
    },
})
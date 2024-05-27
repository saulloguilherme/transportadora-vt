import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native'
import { StackActions } from '@react-navigation/native';
import React from 'react'

export default function LoginScreen({ navigation }) {

    function toHome() {
        navigation.dispatch(StackActions.push('Home'))
      }

  return (
    <View style={style.page}>
        <View style={style.container}>
            <Text style={style.loginText}>Login</Text>
            <TextInput placeholder='Digite seu email' style={style.input}></TextInput>
            <TextInput placeholder='Digite sua senha' style={style.input}></TextInput>
            <Pressable style={style.botao} onPress={toHome}>
                <Text style={style.entrarText}>Entrar</Text>
            </Pressable>
        </View>
    </View>
  )
}

const style = StyleSheet.create({
    page: {
        width: "100%",
        height: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff"
    },
    container: {
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "80%",
        height: 300,
        backgroundColor: "#899D74",
        borderRadius: 20
    },
    loginText: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        width: "80%",
        height: 40,
        margin: 8,
        borderWidth: 1,
        padding: 10,
    },
    botao: {
        width: "60%",
        height: 40,
        borderRadius: 10,
        backgroundColor: "#498013",
        alignItems: 'center',
        justifyContent: "center"
    },
    entrarText: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})
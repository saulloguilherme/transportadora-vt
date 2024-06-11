import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function CardAbastecimento({ Placa, Tipo, Posto, Valor, Data, Hora }) {
  return (
    <View style={styles.parentContainer}>
        <Text style={styles.tempo}>{Data} - {Hora}</Text>
        <View style={styles.childContainer}>
            <Text style={styles.titulo}>Abastecimento Realizado</Text>
            <View style={styles.centralLine}>
                <Text>{Placa}</Text>
                <Text>{Tipo}</Text>
                <Text>{Posto}</Text>
            </View>
            <Text style={styles.valor}>Valor Total: {Valor}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    parentContainer: {
        display: "flex",
        flexDirection: 'column',
        alignContent: "center",
        justifyContent: 'center',
        width: "100%",
        paddingVertical: 15,
        rowGap: 8,
    },
    tempo: {
        paddingLeft: 20,
        fontSize: 12,
        textAlign: "left"
    },
    childContainer: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#B6C8A5",
        borderRadius: 10,
        width: "80%",
        alignSelf: 'center',
        rowGap: 10,
    },
    titulo: {
        alignSelf: 'center',
        fontWeight: 'bold',
        paddingTop: 10,
    },
    centralLine: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    valor: {
        alignSelf: 'center',
        paddingBottom: 10,
    }
})
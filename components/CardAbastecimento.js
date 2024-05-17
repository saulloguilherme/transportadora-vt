import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

var Abastecimento = {
    placa: "QEL 5117",
    tipo: "Gasolina",
    posto: "Petrocem",
    valor: 2419.2,
    data: "10/02/2023",
    hora: "10:54"
}

export default function CardAbastecimento() {
  return (
    <View style={styles.parentContainer}>
        <Text style={styles.tempo}>{Abastecimento.data} - {Abastecimento.hora}</Text>
        <View style={styles.childContainer}>
            <Text style={styles.titulo}>Abastecimento Realizado</Text>
            <View style={styles.centralLine}>
                <Text>{Abastecimento.placa}</Text>
                <Text>{Abastecimento.tipo}</Text>
                <Text>{Abastecimento.posto}</Text>
            </View>
            <Text style={styles.valor}>Valor Total: {Abastecimento.valor}</Text>
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
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

var Frete = {
    placa: "QEL 5117",
    cidadeSaida: "Petrolina",
    cidadeDestino: "Juazeiro",
    peso: "700KG",
    data: "10/02/2023",
    hora: "10:54"
}

export default function CardFrete() {
  return (
    <View style={styles.parentContainer}>
        <Text style={styles.tempo}>{Frete.data} - {Frete.hora}</Text>
        <View style={styles.childContainer}>
            <Text style={styles.titulo}>Frete Realizado</Text>
            <View style={styles.centralLine}>
                <Text>{Frete.cidadeSaida} {" > "} {Frete.cidadeDestino}</Text>
            </View>
            <View style={styles.ultimaLinha}>
                <Text>{Frete.placa}</Text><Text>{Frete.peso}</Text>
            </View>
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
    ultimaLinha: {
        flexDirection: "row",
        justifyContent: 'space-evenly',
        paddingBottom: 10,
    }
})
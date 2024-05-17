import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView} from 'react-native';

import TopBar from '../components/TopBar';
import CardAbastecimento from '../components/CardAbastecimento';
import AddButton from '../components/AddButton';

const telaAbastecimento = "Abastecimentos"

export default function AbastecimentosScreen() {
  return (
    <View style={styles.container}>
      <View>
        <TopBar style={styles.topMenu} CentralText={ telaAbastecimento } ></TopBar>
            <ScrollView>
              <CardAbastecimento></CardAbastecimento>
              <CardAbastecimento></CardAbastecimento>
              <CardAbastecimento></CardAbastecimento>
              <CardAbastecimento></CardAbastecimento>
              <CardAbastecimento></CardAbastecimento>
              <CardAbastecimento></CardAbastecimento>
              <CardAbastecimento></CardAbastecimento>
              <CardAbastecimento></CardAbastecimento>
              <CardAbastecimento></CardAbastecimento>
              <CardAbastecimento></CardAbastecimento>
              <CardAbastecimento></CardAbastecimento>
              <CardAbastecimento></CardAbastecimento>
            </ScrollView>
      </View>
      <View style={styles.button}>
        <AddButton></AddButton>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F6F6F6',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 40,
    },
    topMenu: {
      width: "100%",
      position: "absolute",
      top: "0%",
    },
    button: {
      paddingBottom: 40,
      paddingRight: 40,
      position: "absolute",
      bottom: "0%",
      alignSelf: 'flex-end',
    }
  });
import React, { useCallback, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, SafeAreaView, Pressable, Text } from 'react-native';
import { DrawerActions, StackActions } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';


import CardAbastecimento from '../components/CardAbastecimento';
import AddButton from '../components/AddButton';

import { supabase } from "../services/supabase"

export default function AbastecimentosScreen({ navigation }) {

  const openDrawer = () => navigation.dispatch(DrawerActions.openDrawer());
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: (props) => (
        <FontAwesome5 name="gas-pump" size={32}/>
      ),
      headerLeft: (props) => (
        <Pressable  {...props} onPress={openDrawer}>
              <FontAwesome5 name="bars" size={32}></FontAwesome5>
        </Pressable>
      ),
    });
  }, [navigation]);

  function toForm() {
    navigation.dispatch(StackActions.push('AbastecimentoForm'))
  }

  const abastecimentos = [{
    id: 1,
    placa: "QEL 5117",
    tipo: "Gasolina",
    posto: "Petrocem",
    valor: 2419.2,
    data: "10/02/2023",
    hora: "10:54"
}];

  function renderCards() {
    return (
        abastecimentos.map((abastecimento) => (
          <CardAbastecimento key={abastecimento.id} Placa={abastecimento.placa} Tipo={abastecimento.tipo} Posto={abastecimento.posto} Valor={abastecimento.valor} Data={abastecimento.data} Hora={abastecimento.hora}/>
        )
        )
    );
  };

  const getAbastecimentosData = async () => {
    // const { data, error } = await supabase.from('abastecimento').select();
    // console.log(data)
  }

  useEffect(useCallback(()=>{
    getAbastecimentosData();
  }));

  

  return (
    <View style={styles.container}>
      <ScrollView style={{width:"100%"}}>
        {renderCards()}
      </ScrollView>

      <View style={styles.button}>
          <AddButton navegar={toForm}></AddButton>
      </View>
      <StatusBar style="auto"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    height: "100%",
  },
  button: {
    paddingBottom: 40,
    paddingRight: 40,
    position: "absolute",
    bottom: "0%",
    alignSelf: 'flex-end',
  }
});

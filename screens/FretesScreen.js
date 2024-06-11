import React, { useCallback, useEffect } from 'react'
import { Text, View, Pressable, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { DrawerActions, StackActions } from '@react-navigation/native';

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import CardFrete from '../components/CardFrete';
import AddButton from '../components/AddButton';

import { supabase } from "../services/supabase"

export default function FretesScreen({ navigation }) {

  const openDrawer = () => navigation.dispatch(DrawerActions.openDrawer());
  
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: (props) => (
        <FontAwesome5 name="shuttle-van" size={32}/>
      ),
      headerLeft: (props) => (
        <Pressable  {...props} onPress={openDrawer}>
              <FontAwesome5 name="bars" size={32}></FontAwesome5>
        </Pressable>
      ),
    });
  }, [navigation]);

  function toForm() {
    navigation.dispatch(StackActions.push('FreteForm'))
  }

  const fretes = [{
    id: 1,
    placa: "QEL 5117",
    cidadeSaida: "Petrolina",
    cidadeDestino: "Juazeiro",
    peso: "700KG",
    data: "10/02/2023",
    hora: "10:54"
}]

  function renderCards() {
    return (
        fretes.map((frete) => (
          <CardFrete key={frete.id} Placa={frete.placa} CidadeSaida={frete.cidadeSaida} CidadeDestino={frete.cidadeDestino} Peso={frete.peso} Data={frete.data} Hora={frete.hora} />
          )
        )
    );
  };

  const getFretesData = async () => {
    // const { data, error } = await supabase.from('frete').select();
    // console.log(data)
  }

  useEffect(useCallback(()=>{
    getFretesData();
  }));


  return (
  <View style={styles.container}>
  <ScrollView style={{width:"100%"}}>
    {renderCards()}
  </ScrollView>

  <View style={styles.button}>
    <AddButton navegar={toForm}/>
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
width: "100%",
height: "100%",
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

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, SafeAreaView, Pressable, Text } from 'react-native';
import { DrawerActions, StackActions } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';


import CardAbastecimento from '../components/CardAbastecimento';
import AddButton from '../components/AddButton';

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

  return (
    <View style={styles.container}>
      <ScrollView style={{width:"100%"}}>
        <CardAbastecimento/>
        <CardAbastecimento/>
        <CardAbastecimento/>
        <CardAbastecimento/>
        <CardAbastecimento/>
        <CardAbastecimento/>
        <CardAbastecimento/>
      </ScrollView>

      <View style={styles.button}>
          <AddButton navegar={toForm}></AddButton>
      </View>
      <StatusBar style="auto"/>
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
    button: {
      paddingBottom: 40,
      paddingRight: 40,
      position: "absolute",
      bottom: "0%",
      alignSelf: 'flex-end',
    }
  });

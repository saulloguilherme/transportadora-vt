import React from 'react'
import { Text, View, Pressable, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import CardFrete from '../components/CardFrete';
import AddButton from '../components/AddButton';



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

  return (
  <View style={styles.container}>
  <ScrollView style={{width:"100%"}}>
    <CardFrete/>
    <CardFrete/>
    <CardFrete/>
    <CardFrete/>
    <CardFrete/>
    <CardFrete/>
    <CardFrete/>
    <CardFrete/>
  </ScrollView>

  <View style={styles.button}>
    <AddButton/>
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
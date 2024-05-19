import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function InfoScreen( { navigation } ) {

  const openDrawer = () => navigation.dispatch(DrawerActions.openDrawer());

  React.useLayoutEffect(() => {
    navigation.setOptions({
  headerLeft: (props) => (
        <Pressable  {...props} onPress={openDrawer}>
              <FontAwesome5 name="bars" size={32}></FontAwesome5>
        </Pressable>
      ),
    });
  }, [navigation]);
  

  return (
    <View>
      <Text>Informações</Text>
    </View>
  )
}
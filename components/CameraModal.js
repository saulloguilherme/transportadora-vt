import { View, Text, Modal, StyleSheet, Pressable } from 'react-native'
import * as ImagePicker from "expo-image-picker"
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

export default function CameraModal({ setVisible, isVisible, setImage }) {


    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [3, 4],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    };
  
    const takePicture = async () => {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        aspect: [3,4],
        quality: 1,
      });
      console.log(result);
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    };

    const closeModal = () => {
        setVisible(false);
    }

  return (
    <Modal isVisible={isVisible} animationType='fade' transparent={true}>
        <View style={style.screen}>
            <View style={style.container}>
                <Pressable onPress={takePicture}>
                    <View style={style.button}>
                    <Text>Tire uma foto </Text>
                    <FontAwesome5 name="camera" size={24} color="black" />
                    </View>
                </Pressable>
                <Pressable onPress={pickImage}>
                    <View style={style.button}>
                    <Text>Escolha uma imagem </Text>
                    <FontAwesome5 name="photo-video" size={24} color="black" />        
                    </View>
                </Pressable>
                <Pressable onPress={closeModal}>
                    <View style={style.button}>
                    <Text style={{color: "red"}}>Fechar</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    </Modal>
  )
}

const style = StyleSheet.create({
    screen: {
        flexDirection: "row",
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    container: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: 'center',
        width: "70%",
        height: "20%", 
        borderRadius: 40
    },
    button: {
    flexDirection: "row",
    margin: 5,
    backgroundColor: '#f7f7f7',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    }
})
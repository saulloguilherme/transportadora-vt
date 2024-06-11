import { View, Text, Modal, StyleSheet, Pressable, Button } from 'react-native'
import * as ImagePicker from "expo-image-picker"
import React, { useEffect, useState } from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { Camera, CameraView, useCameraPermissions } from 'expo-camera';

export default function CameraModal({ setVisible, isVisible, setNotaFiscal }) {

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [cameraVisibility, setCameraVisibility] = useState(false);

  

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    console.log(`Bar code with type ${type} and data ${data} has been scanned!`);
    setCameraVisibility(false);
    setNotaFiscal(data);
    closeModal();
  };

  /*
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  */

  const toggleCamera = () => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
      setCameraVisibility(true);
    };

    getCameraPermissions();
  };

  const closeModal = () => {
      setVisible(false);
  }
  
/*
  return (
    <View style={style.screen}>
      <CameraView onBarcodeScanned={scanned ? undefined : handleBarCodeScanned} barcodeScannerSettings={{ barcodeTypes: ["qr", "pdf417"], }} style={StyleSheet.absoluteFillObject} />
      {scanned && (<Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />)}
    </View>
  );
*/

  return (
    <Modal isVisible={isVisible} animationType='fade' transparent={true}>
        <View style={style.screen}>
          <View style={style.container_camera}>
            {cameraVisibility ? <CameraView style={style.camera} onBarcodeScanned={scanned ? undefined : handleBarCodeScanned} barcodeScannerSettings={{ barcodeTypes: ['aztec', 'ean13', 'ean8', 'qr', 'pdf417', 'upc_e', 'datamatrix', 'code39', 'code93', 'itf14', 'codabar', 'code128', 'upc_a'], }} /> : null}
          </View>
          <View style={style.container}>
              <Pressable onPress={toggleCamera}>
                  <View style={style.button}>
                  <Text>Abrir a câmera </Text>
                  <FontAwesome5 name="camera" size={24} color="black" />
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
      flexDirection: "column",
      width: "100%",
      height: "100%",
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)'
  },
  container: {
      flexDirection: "row",
      alignItems: "center",
      alignSelf: 'center',
      justifyContent: 'center',
      width: "70%",
      height: "20%", 
      borderRadius: 40,
      padding: 40
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
  },
  container_camera: {
    width: "90%",
    height: "60%"
  },
  camera: {
    width: "100%",
    height: "100%"
  }
})

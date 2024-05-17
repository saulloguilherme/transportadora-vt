import { Image, Pressable, StyleSheet, View } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

export default function AddButton() {
  return (
    <View>
        <Pressable style={styles.button} onPress={()=>alert('A')}>
          <FontAwesome5 name="plus" size={36} color="black" />
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    button: {
        width: 70,
        height: 70,
        borderRadius: 50,
        backgroundColor: '#498013',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
});

import { View, Text, StyleSheet, Pressable} from 'react-native'
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function TopBar({ CentralText}) {
  if (CentralText=="Abastecimentos") {
    return (
      <View style={styles.container}>
          <Pressable onPress={()=>alert('A')}>
            <FontAwesome5 name="bars" size={32}></FontAwesome5>
          </Pressable>
          <Text style={styles.text}>{CentralText}</Text>
          <FontAwesome5 name="gas-pump" size={32}></FontAwesome5>
      </View>
    )   
  } 

  return (
    <View style={styles.container}>
        <FontAwesome5 name="bars" size={32}></FontAwesome5>
        <Text style={styles.text}>{CentralText}</Text>
        <FontAwesome5 name="shuttle-van" size={32}></FontAwesome5>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 20,
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  }
});

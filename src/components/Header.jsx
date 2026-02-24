import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <view
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Text style={styles.logotipo}></Text>
        <Text style={styles.nome}>GUANABARA</Text>
      </view>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    width: "100%",
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  logotipo: {
    backgroundColor: "#ff00f2",
    height: 30,
    width: 30,
    borderRadius: 100,
  },

  nome: {
    color: "#fff",
    fontSize: 10,
    paddingLeft: 10,
  },
});

import { View, Text, StyleSheet, Image } from "react-native";

export default function Cards() {
  return (
    <View style={styles.container}>
      <view
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <View>
            <Image
                source={require('../../assets/avatar.png')} style={{ width: 50, height: 50, borderRadius: 25 }} 
            />
        </View>
        <View>
          <Text style={styles.nome}>John Doe</Text>
            <Text style={styles.email}>john.doe@example.com</Text>
        </View>
      </view>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    width: "70%",
    height: 80,
    marginBottom: 20,
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  nome: {
    color: "#fff",
    fontSize: 20,
    paddingLeft: 10,
  },

  email: {
    color: "#fff",
    fontSize: 10,
    paddingLeft: 10,
  },
});

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";

// ADD LOCAL ASSETS
// const icon = require("./assets/icon.png");

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Tenemos aquí la app</Text>
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Metacritic.svg/1024px-Metacritic.svg.png",
        }}
        style={{
          width: 100,
          height: 200,
          resizeMode: "contain",
        }}
      />
      <StatusBar style="light" />
      <Button title="Pulsa aquí" onPress={() => alert("Hola Mundo")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    color: "#fff",
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});

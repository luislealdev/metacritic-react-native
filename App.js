import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  // TouchableHighlight,
} from "react-native";
import { getLatestGames } from "./lib/metacritic";

// ADD LOCAL ASSETS
// const icon = require("./assets/icon.png");

export default function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <View style={styles.container}>
      {/* <Text style={{ color: "white" }}>Tenemos aquí la app</Text>
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Metacritic.svg/1024px-Metacritic.svg.png",
        }}
        style={{
          width: 100,
          height: 200,
          resizeMode: "contain",
        }}
      /> */}
      <StatusBar style="light" />
      {/* <Button
        color="yellow"
        title="Pulsa aquí"
        onPress={() => alert("Hola Mundo")}
      /> */}
      {/* <TouchableHighlight
        underlayColor={"#09f"}
        onPress={() => alert("Hola Mundo")}
      >
        <Text
          style={{
            padding: 10,
            borderRadius: 100,
            backgroundColor: "yellow",
          }}
        >
          Pulsa aquí
        </Text>
      </TouchableHighlight> */}
      {games.map((game) => (
        <View key={game.slug} style={styles.card}>
          <Image source={{ uri: game.image }} style={styles.image} />
          <Text style={styles.title}>{game.title}</Text>
          <Text style={styles.score}>{game.score}</Text>
          <Text style={styles.description}>{game.description}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    color: "#000",
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
  image: {
    width: 107,
    height: 147,
    resizeMode: "contain",
    borderRadius: 10,
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  score: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  description: {
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
  },
});

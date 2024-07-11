import { useEffect, useState } from "react";
import { ActivityIndicator, View, FlatList } from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { AnimatedGameCard } from "./GameCard";
import { Logo } from "./Logo";

// ADD LOCAL ASSETS
// const icon = require("./assets/icon.png");

export function Main() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <View>
      <Logo />
      {games.length === 0 ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator />
        </View>
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={(game, index) => (
            <AnimatedGameCard key={game.slug} game={game} index={index} />
          )}
        />
      )}
    </View>
  );
}

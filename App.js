import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { View, StyleSheet } from "react-native";
import { Main } from "./components/main";
import { SafeAreaProvider } from "react-native-safe-area-context";

// ADD LOCAL ASSETS
// const icon = require("./assets/icon.png");

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="light" />
        <Main />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    color: "#000",
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
  },
});

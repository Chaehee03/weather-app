import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.location}>
        <Text style={styles.locationName}>Seoul</Text>
      </View>
      <View style={styles.weather}>
        <Text style={styles.temperature}>27</Text>
        <Text style={styles.description}>Sunny</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bdcebe",
  },
  location: {
    flex: 1.25,
    alignItems: "center",
    justifyContent: "center",
  },
  locationName: {
    fontSize: 60,
    fontWeight: "450s",
  },
  weather: {
    flex: 3,
    alignItems: "center",
  },
  temperature: {
    marginTop: 100,
    fontSize: 100,
  },
  description: {
    fontSize: 40,
  },
});

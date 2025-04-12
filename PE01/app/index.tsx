import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Katelyn Ashworth</Text>
      <Text style={styles.subheader}>MSCS</Text>
      <Text style={styles.text}>City University of Seattle</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
  },
  header: {
    fontSize: 30,
    margin: 5,
    fontWeight: "bold",
  },
  subheader: {
    fontSize: 25,
    margin: 5,
  },
  text: {
    fontSize: 20,
    margin: 5,
  },
});
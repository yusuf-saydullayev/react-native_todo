import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My todos</Text>
      <Image source={require("./assets/favicon.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 100,
    paddingTop: 40,
    backgroundColor: "red",
  },
  title: {
    fontFamily: "sans-serif",
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
  },
});

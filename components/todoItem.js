import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";

export default function TodoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.id)}>
      <Text style={styles.item}>{item.text}</Text>
      <Image source="../assets/icon.png" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 15,
    marginTop: 16,
    borderColor: "black",
    borderWidth: 4,
    borderStyle: "dashed",
    borderRadius: 10,
    color: "green",
    fontSize: 18,
    backgroundColor: "yellow",
    textAlign: "center",
  },
});

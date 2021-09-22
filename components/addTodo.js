import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function TodoAdd({ SubmitHamdler }) {
  const [input, setInput] = useState("");

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Todo text"
        onChangeText={(val) => setInput(val)}
      />
      <Button
        onPress={(() => SubmitHamdler(input))}
        title="Add todo"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: "blue",
  },
});

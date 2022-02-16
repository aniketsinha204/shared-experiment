import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { commonCurrentDate, currentDateFunc } from "../common";

export default function App() {
  const [currentDate, setCurrentDate] = useState("");
  return (
    <View style={styles.container}>
      <Text>{currentDate}</Text>
      <Text>{commonCurrentDate}</Text>
      <StatusBar style="auto" />
      <TouchableHighlight
        style={{ backgroundColor: "pink", padding: 30, marginTop: 32 }}
        onPress={() => setCurrentDate(currentDateFunc())}
      >
        <Text>Click here</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

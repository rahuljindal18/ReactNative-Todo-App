import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 120,
    paddingTop: 38,
    backgroundColor: "coral",
  },
  title: {
    textAlign: "center",
    marginTop: 30,
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
  },
});

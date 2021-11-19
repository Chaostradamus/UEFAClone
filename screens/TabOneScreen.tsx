import * as React from "react";
import { StyleSheet, SafeAreaView, Pressable, Text } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import Field from "../components/Field";
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const viewPlayers = () => {
    console.warn("View Player");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Field />
      <Pressable
        onPress={viewPlayers}
        style={{
          backgroundColor: "orange",
          width: "90%",
          margin: 20,
          padding: 10,
          alignItems: "center",
          borderRadius: 50,
        }}
      >
        <Text> View players</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 50,
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

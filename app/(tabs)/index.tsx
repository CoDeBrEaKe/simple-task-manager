import { StyleSheet } from "react-native";

import { Form } from "@/components/form";
import { ThemedText } from "@/components/themed-text";
import { View } from "react-native";
export default function HomeScreen() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
      </View>
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#eef2ff",
    height: "100%",
    flexDirection: "column",
    padding: 20,
    alignItems: "stretch",
    gap: 10,
  },
  titleContainer: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});

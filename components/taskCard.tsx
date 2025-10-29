import { Ionicons } from "@expo/vector-icons"; // or react-native-vector-icons/Ionicons
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function TaskCard(props: {
  id: string;
  title: string;
  status: string;
  description: string;
  date: string;
}) {
  const { id, title, description, date, status } = props;
  const isCompleted = status === "completed";

  const setCompleted = (id: string) => {};
  const deleteTask = (id: string) => {};

  return (
    <View style={[styles.card, isCompleted && { opacity: 0.6 }]}>
      {/* Left: checkbox icon */}
      <Ionicons
        onPress={() => setCompleted(id)}
        name={isCompleted ? "checkmark-circle" : "ellipse-outline"}
        size={22}
        color={isCompleted ? "#4ade80" : "#d1d5db"}
        style={styles.iconLeft}
      />
      <View style={styles.textContainer}>
        <Text
          style={[
            styles.title,
            isCompleted && {
              textDecorationLine: "line-through",
              color: "#9ca3af",
            },
          ]}
        >
          {title}
        </Text>
        <Text
          style={[
            styles.description,
            isCompleted && {
              textDecorationLine: "line-through",
              color: "#9ca3af",
            },
          ]}
        >
          {description}
        </Text>
        <Text style={styles.date}>{date}</Text>
      </View>

      <Ionicons
        name="close"
        size={20}
        color="#f87171"
        style={styles.iconRight}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 2,
  },
  iconLeft: {
    marginRight: 10,
  },
  iconRight: {
    marginLeft: "auto",
  },
  textContainer: {
    flexDirection: "column",
    gap: 2,
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
    color: "#374151",
  },
  description: {
    fontSize: 13,
    color: "#9ca3af",
  },
  date: {
    fontSize: 12,
    color: "#d1d5db",
  },
});

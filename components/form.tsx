import { Task } from "@/types";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
export function Form() {
  const [taskDetails, setTaskDetails] = useState<Partial<Task>>({
    title: "",
    description: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const updateField = (field: keyof Task, value: string) => {
    setTaskDetails((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  const handleSubmit = () => {};
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.label}>Task Title</Text>
      <TextInput
        placeholder="Enter task title..."
        style={[styles.input, focusedField === "title" && styles.inputFocused]}
        value={taskDetails.title}
        onChangeText={(text: string) => updateField("title", text)}
        onFocus={() => setFocusedField("title")}
        onBlur={() => setFocusedField(null)}
        onSubmitEditing={handleSubmit}
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        placeholder="Enter task description (optional)"
        style={[
          styles.input,
          //   styles.textArea,
          focusedField === "description" && styles.inputFocused,
        ]}
        value={taskDetails.description}
        onChangeText={(text: string) => updateField("description", text)}
        onFocus={() => setFocusedField("description")}
        onBlur={() => setFocusedField(null)}
        multiline
        numberOfLines={3}
        textAlignVertical="top"
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    padding: 16,
  },

  label: {
    fontSize: 15,
    color: "#ddd",
  },
  input: {
    transitionDelay: "0",
    transitionDuration: "1s",
    transitionTimingFunction: "ease",

    width: "100%",

    padding: 12,
    borderRadius: 8,
    outlineColor: "rgba(0, 70, 255, 1)",
    fontSize: 16,
    marginBottom: 12,
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "#004AFF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  inputFocused: {
    // transitionDelay: "0",
    // transitionDuration: "1s",
    // transitionTimingFunction: "ease",
    outlineWidth: 3,
    outlineColor: "rgba(0, 70, 255, 0.5)",
    shadowColor: "#004AFF",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
});

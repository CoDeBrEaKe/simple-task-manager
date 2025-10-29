import { Task } from "@/types";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
export function Form(props: { setTasks: any; tasks: Record<number, Task> }) {
  const { tasks, setTasks } = props;
  const [taskDetails, setTaskDetails] = useState<Task>({
    id: "",
    title: "",
    description: "",
    status: "active",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const updateField = (field: keyof Task, value: string) => {
    setTaskDetails((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  const handleSubmit = () => {
    if (taskDetails.title) {
      setTasks({
        ...tasks,
        [Object.keys(tasks).length]: {
          ...taskDetails,
          id: Object.keys(tasks).length.toString(),
          date: new Date().toISOString().split("T")[0],
        },
      });
    }

    setTaskDetails({ id: "", title: "", description: "", status: "active" });

    // required input handling
  };
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

      <Text style={styles.label}>Description (optional)</Text>
      <TextInput
        placeholder="Add brief description"
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
    padding: 6,
  },

  label: {
    fontSize: 15,
    color: "#333",
    fontWeight: 500,
    margin: 4,
  },
  input: {
    transitionDelay: "0",
    transitionDuration: "1s",
    transitionTimingFunction: "ease",
    width: "100%",
    borderWidth: 1,
    padding: 12,
    shadowColor: "#ddd",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 12,
    shadowOpacity: 0.5,
    borderRadius: 8,
    borderColor: "#aaa",
    outlineColor: "transparent",
    fontSize: 16,
    marginBottom: 12,
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "#00aAFF",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 6,
    marginBottom: 0,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  inputFocused: {
    outlineWidth: 3,
    outlineColor: "rgba(0, 70, 255, 0.5)",
    borderColor: "rgba(0, 70, 255, 1)",
    borderWidth: 1,
    shadowColor: "#004AFF",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
});

import { StyleSheet } from "react-native";

import { Form } from "@/components/form";
import { TaskCard } from "@/components/taskCard";
import { Task } from "@/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

import { ScrollView, Text, View } from "react-native";
export default function HomeScreen() {
  const [tasks, setTasks] = useState<Record<number, Task>>({});
  useEffect(() => {
    const loadTasks = async () => {
      try {
        const saved = await AsyncStorage.getItem("tasks");
        if (saved) setTasks(JSON.parse(saved));
      } catch (err) {
        console.log("Error loading tasks:", err);
      }
    };
    loadTasks();
  }, []);
  useEffect(() => {
    const saveTasks = async () => {
      try {
        await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
      } catch (err) {
        console.log("Error saving tasks:", err);
      }
    };
    saveTasks();
  }, [tasks]);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Task Manager</Text>
        <Text style={styles.desc}>Stay organized and productive</Text>
      </View>
      <hr style={styles.hr} />
      <Form tasks={tasks} setTasks={setTasks} />
      <hr style={styles.hr} />
      <ScrollView style={styles.p}>
        {Object.keys(tasks) ? (
          Object.keys(tasks).map((key: any) => (
            <TaskCard
              id={key}
              tasks={tasks}
              setTasks={setTasks}
              title={tasks[key].title}
              description={tasks[key].description!}
              status={tasks[key].status!}
              date={tasks[key].date!}
            />
          ))
        ) : (
          <Text style={styles.emptyState}>
            No tasks yet. Add a task above to get started!
          </Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  emptyState: {
    padding: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: 700,
    fontSize: 26,
  },
  desc: {
    fontWeight: 400,
    fontSize: 16,
  },
  hr: {
    backgroundColor: "#ddd",
    borderColor: "transparent",
    color: "red",
    height: 0,
    margin: 0,
    width: "100%",
  },
  mainContainer: {
    backgroundColor: "#fff",
    height: "100%",
    flexDirection: "column",
    padding: 0,
    alignItems: "stretch",
    gap: 10,
  },
  titleContainer: {
    flexDirection: "column",
    padding: 20,
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  p: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});

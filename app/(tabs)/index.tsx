import { StyleSheet } from "react-native";

import { Form } from "@/components/form";
import { TaskCard } from "@/components/taskCard";
import { Task } from "@/types";
import { useState } from "react";
import { Text, View } from "react-native";
export default function HomeScreen() {
  const [tasks, setTasks] = useState<Record<number, Task>>({});

  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Task Manager</Text>
        <Text style={styles.desc}>Stay organized and productive</Text>
      </View>
      <hr style={styles.hr} />
      <Form tasks={tasks} setTasks={setTasks} />
      <hr style={styles.hr} />
      {Object.keys(tasks).map((key: any) => (
        <TaskCard
          id={tasks[key].id}
          title={tasks[key].title}
          description={tasks[key].description!}
          status={tasks[key].status!}
          date={tasks[key].date!}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
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
    width: "100%",
  },
  mainContainer: {
    backgroundColor: "#fff",
    height: "100%",
    flexDirection: "column",
    padding: 20,
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
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});

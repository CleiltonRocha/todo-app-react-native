import React from "react";
import { FlatList } from "react-native";
import { Task } from "./Task";
import useTaskStore from "../stores/TaskStore";
import { EmptyState } from "./EmptyState";

export function TaskList() {
  const taskStore = useTaskStore();
  const tasks = taskStore.tasks;

  return (
    <FlatList 
      data={tasks}
      keyExtractor={item => item.id}
      ListEmptyComponent={EmptyState}
      renderItem={({ item }) => (
        <Task key={item.id} id={item.id} description={item.description} concluded={item.concluded}/>
      )}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: 16, paddingTop: 20, paddingHorizontal: 16 }}
    />
  )
}
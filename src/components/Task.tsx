import { View, Text, TouchableOpacity, Alert } from "react-native";
import colors from "tailwindcss/colors";
import * as Icons from "react-native-heroicons/outline";
import * as IconsSolid from "react-native-heroicons/solid";
import useTaskStore, { TaskProps } from "../stores/TaskStore";



export function Task({id, description, concluded}: TaskProps) {
  const taskStore = useTaskStore();

  function handleRemoveTask(taskId: string) {

    Alert.alert("Remover Tarefa", `Deseja remover esta tarefa?`, [
      {
        text: "Cancelar"
      },
      {
        text: "Remover",
        onPress: () => taskStore.removeTask(taskId)
      }
    ])
  }

  function toggleCompleteTask(taskId: string) {

    const task = taskStore.tasks.filter(task => task.id === taskId)[0];

    if (task.concluded) {
      Alert.alert("Desmarcar tarefa como concluída", `Deseja desmarcar esta tarefa como concluída?`, [
        {
          text: "Cancelar"
        },
        {
          text: "Sim",
          onPress: () => taskStore.unCompleteTask(taskId)
        }
      ])
    }
    else {
      taskStore.completeTask(taskId);
    }

  }

  return (
    <View className={`flex-row ${concluded ? 'bg-green-300/10' : 'bg-slate-900'}  p-5 rounded-lg items-center justify-between`}>
      {
        concluded ? (
          <IconsSolid.CheckCircleIcon width={24} height={24} color={colors.green[300]} onPress={() => toggleCompleteTask(id)}/>
        ) : (
          <TouchableOpacity 
            className="w-5 h-5 rounded-full border-2 border-slate-700"
            onPress={() => toggleCompleteTask(id)}
          />
        )
      }
      
      <Text className={`text-sm font-body text-slate-400 flex-1 ml-2 mr-2 ${concluded ? 'line-through' : ''}`}>{description}</Text>
      <TouchableOpacity onPress={() => handleRemoveTask(id)}>
        <Icons.TrashIcon width={24} height={24} color={colors.red[300]}/>
      </TouchableOpacity>
    </View>
  )
}
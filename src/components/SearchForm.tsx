import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import colors from "tailwindcss/colors";
import * as Icons from "react-native-heroicons/outline";
import useTaskStore from "../stores/TaskStore";
import { useState } from "react";

export function SearchForm() {

  const taskStore = useTaskStore()
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch() {
    if (!searchTerm) {
      return Alert.alert("", `Digite algo para realizar a pesquisa!`)
    }

    taskStore.filterTasks(searchTerm);
  }

  function handleRemoveFilter() {
    taskStore.showAllTasks();

    setSearchTerm('');
  }

  return (
    <View className="flex-row items-stretch justify-between px-4 gap-3 mt-11 relative">
      <TextInput 
        placeholder="Busque por uma tarefa"
        cursorColor={colors.indigo[500]}
        placeholderTextColor={colors.slate[500]}
        onChangeText={setSearchTerm}
        value={searchTerm}
        className="flex-1 bg-slate-900 border border-slate-800 p-4 text-base rounded-md placeholder-gray-500 text-slate-100"
      />
      { searchTerm && <Icons.XMarkIcon width={20} height={20} color={colors.slate[400]} className="absolute top-5 z-10 right-28" onPress={handleRemoveFilter}/>}
      <TouchableOpacity disabled={!searchTerm} className="p-4 bg-indigo-500 rounded-md w-16 items-center justify-center" onPress={handleSearch}>
        <Icons.MagnifyingGlassIcon color={colors.slate[100]}/> 
      </TouchableOpacity>
    </View>
  )
}
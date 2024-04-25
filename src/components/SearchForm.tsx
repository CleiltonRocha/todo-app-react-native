import { View, Text, TextInput, TouchableOpacity } from "react-native";
import colors from "tailwindcss/colors";
import * as Icons from "react-native-heroicons/outline";

export function SearchForm() {
  return (
    <View className="flex-row items-stretch justify-between px-4 gap-3 mt-11">
      <TextInput 
        placeholder="Busque por uma tarefa"
        cursorColor={colors.indigo[500]}
        placeholderTextColor={colors.slate[500]}
        className="flex-1 bg-slate-900 border border-slate-800 p-4 text-base rounded-md placeholder-gray-500 text-slate-100"
      />
      <TouchableOpacity className="p-4 bg-indigo-500 rounded-md w-16 items-center justify-center">
       <Icons.MagnifyingGlassIcon color={colors.slate[100]}/> 
      </TouchableOpacity>
    </View>
  )
}
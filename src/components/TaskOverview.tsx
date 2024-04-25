import { View, Text } from "react-native";
import colors from "tailwindcss/colors";

export function TaskOverview() {
  return (
    <View className="flex-row items-center justify-between px-4 gap-3 mt-10">
      <View className="flex-row gap-2 items-stretch">
        <Text className="font-bold text-slate-100 text-lg">Criadas</Text>
        <View className="items-center justify-center bg-slate-800 px-3 rounded-full">
          <Text className="text-slate-500 font-bold">5</Text>
        </View>
      </View>

      <View className="flex-row gap-2 items-stretch">
        <Text className="font-bold text-green-200 text-lg">Concluídas</Text>
        <View className="items-center justify-center bg-slate-800 px-3 rounded-full">
          <Text className="text-green-300 font-bold">5</Text>
        </View>
      </View>

     
    </View>
  )
}
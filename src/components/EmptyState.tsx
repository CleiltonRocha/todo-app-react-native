import { Text, View } from "react-native";
import colors from "tailwindcss/colors";
import * as Icons from "react-native-heroicons/outline";

export function EmptyState() {
  return (
    <View className="py-12 px-5 gap-4 items-center justify-center">
      <Icons.ClipboardIcon width={64} height={64} color={colors.slate[700]}/>
      <View className="items-center gap-1">
        <Text className="font-semibold text-lg text-slate-500 text-center">Nenhuma tarefa por aqui.</Text>
        <Text className="font-body text-center text-slate-500 ">Crie suas tarefas e organize seus itens a fazer</Text>
      </View>
    </View>
  )
}
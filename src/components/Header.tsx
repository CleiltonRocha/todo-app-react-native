import { View, Text, Image } from "react-native";

import Logo from "@/src/assets/logo.svg"

export function Header() {
  return (
    <View className="bg-indigo-500 h-24 flex flex-row items-center justify-between px-4">
      <View className="flex flex-row items-center gap-3">
        <Image source={{uri: "https://github.com/CleiltonRocha.png"}} className="w-10 h-10 rounded-full "/>
        <View className="flex items-start">
          <Text className="text-lg text-zinc-50 font-body tracking-tighter">Bem Vindo,</Text>
          <Text className="text-lg text-zinc-50 font-bold">Cleilton Rocha</Text>
        </View>
      </View>
      <Logo />
    </View>
  )
}
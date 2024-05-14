import { View, Text, Image } from "react-native";

import Logo from "@/assets/images/logo.svg"

export function Header() {
  return (
    <View className="bg-indigo-500 h-24 flex flex-row items-center justify-between px-4">
      <View className="flex flex-row items-center gap-3">
        <Image source={{uri: "https://scontent.cdninstagram.com/v/t51.2885-19/437056592_391291520453220_8797780272146733013_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=FhAsmdVkV-wQ7kNvgF5dt_L&edm=APs17CUBAAAA&ccb=7-5&oh=00_AYBd-uV_vc7ulIOkpVvnIjM-gbaocYL2qMQ2xMK5GKuaqA&oe=66488BA3&_nc_sid=10d13b"}} className="w-10 h-10 rounded-full "/>
        <View className="flex items-start">
          <Text className="text-lg text-zinc-50 font-body tracking-tighter">Bem Vindo,</Text>
          <Text className="text-lg text-zinc-50 font-bold">Cleilton Rocha</Text>
        </View>
      </View>
      <Logo />
    </View>
  )
}
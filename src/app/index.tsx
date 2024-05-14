import React from "react";
import { StatusBar } from "expo-status-bar";
import {KeyboardAvoidingView, Platform, View} from "react-native"

import { Header } from "../components/Header";
import { SearchForm } from "../components/SearchForm";
import { TaskOverview } from "../components/TaskOverview";

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold

} from "@expo-google-fonts/inter"
import { Loading } from "../components/Loading";
import { TaskList } from "../components/TaskList";
import { NewTaskButton } from "../components/NewTaskButton";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Home() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <>
      <StatusBar
        style="dark"
        backgroundColor="#6366F1"
      />
      <GestureHandlerRootView className="flex-1">
          <View className="flex-1 bg-slate-950 relative">
            <Header />
            <SearchForm />
            <TaskOverview />
            <TaskList />
            <NewTaskButton />
          </View>
      </GestureHandlerRootView>
    </>
  )
}
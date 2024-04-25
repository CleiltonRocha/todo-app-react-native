import { StatusBar } from "expo-status-bar";
import React from "react";
import {View, Text} from "react-native"
import { Header } from "../components/Header";
import { SearchForm } from "../components/SearchForm";
import { TaskOverview } from "../components/TaskOverview";

export default function Home() {
  return (
    <>
      <StatusBar
        style="dark"
        backgroundColor="#6366F1"
      />
      <View className="flex-1 bg-slate-950">
        <Header />
        <SearchForm />
        <TaskOverview />
      </View>
    </>
  )
}
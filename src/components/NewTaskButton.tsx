import { TextInput, TouchableOpacity } from "react-native";
import {Text, View} from "react-native";
import * as Icons from "react-native-heroicons/outline";
import colors from "tailwindcss/colors"
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetModalProvider, BottomSheetView } from "@gorhom/bottom-sheet";
import { useRef, useMemo, useCallback, useState } from "react";

import useTaskStore, { TaskProps } from '@/src/stores/TaskStore';

export function NewTaskButton() {

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const taskStore = useTaskStore();
  const [taskDescription, setTaskDescription] = useState("");

  const snapPoints = useMemo(() => ['60%', '60%'], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  function handleAddtask() {
    const newTask: TaskProps = {
      id: String(taskStore.tasks.length == 0 ? "1" : Number(taskStore.tasks[taskStore.tasks.length - 1]) + 1), 
      description: taskDescription, 
      concluded: false
    }
    console.log('Opa, Adicionei')
    taskStore.addTask(newTask);
    bottomSheetModalRef.current?.close();
  }

  const renderBackdrop = useCallback(
		(props: any) => (
			<BottomSheetBackdrop
				{...props}
        animatedIndex={{
          value: 1,
        }}
			/>
		),
		[]
	);

  return (
    <>
      <BottomSheetModalProvider>
        <View className="absolute bottom-4 w-full px-4">
          <TouchableOpacity className="flex-row items-center justify-center bg-indigo-500 p-4 rounded-md w-full" onPress={handlePresentModalPress}>
            <Icons.PlusIcon color={colors.slate[200]} width={20} height={20}/>
            <Text className="font-subtitle text-slate-200 ml-2">Nova Tarefa</Text>
          </TouchableOpacity>
        </View>
        
          <BottomSheetModal
            ref={bottomSheetModalRef}
            enablePanDownToClose
            handleIndicatorStyle={{backgroundColor: colors.indigo[500]}}
            backdropComponent={renderBackdrop}
            index={1}
            snapPoints={snapPoints}
            backgroundStyle={{backgroundColor: colors.slate[900], }}
            style={{paddingBottom: 32}}
          >
            <BottomSheetView>
              <View className="flex-row items-center justify-between px-8 pt-5 pb-8 border-b border-slate-800">
                <Text className="font-subtitle text-xl text-slate-100">Crie uma nova tarefa</Text>
                <TouchableOpacity className="p-1 bg-slate-800 rounded-full" onPress={handleCloseModalPress}>
                  <Icons.XMarkIcon color={colors.slate[400]} width={20} height={20}/>
                </TouchableOpacity>
              </View>
              <View className="items-start p-8">
                <Text className="font-body text-slate-400 text-base">
                  Descreva sua tarefa
                </Text>
                <TextInput 
                  multiline
                  numberOfLines={4}
                  cursorColor={colors.indigo[500]}
                  placeholderTextColor={colors.slate[500]}
                  onChangeText={setTaskDescription}
                  style={{textAlignVertical: 'top'}}
                  className="bg-slate-900 border border-slate-800 p-4 text-base rounded-md placeholder-gray-500 text-slate-100 w-full mt-4"
                />
              </View>
              <View className="px-8 mt-14">
                <TouchableOpacity className="flex-row items-center justify-center bg-indigo-500 p-4 rounded-md" onPress={handleAddtask}>
                  <Icons.PlusIcon color={colors.slate[200]} width={20} height={20}/>
                  <Text className="font-subtitle text-slate-200 ml-2">Adicionar Nova Tarefa 🎉</Text>
                </TouchableOpacity>
              </View>
            </BottomSheetView>
          </BottomSheetModal>
      </BottomSheetModalProvider>
    </>
  )
}
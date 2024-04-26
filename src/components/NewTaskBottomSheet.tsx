// import BottomSheet from "@gorhom/bottom-sheet"
// import { View, Text, TouchableOpacity } from "react-native"
// import { useRef, useCallback, useMemo } from "react"
// import { GestureHandlerRootView } from "react-native-gesture-handler";

// interface NewTaskBottomSheetProps {
//   onOpenBottomSheet: () => void;
// }


// export function NewTaskBottomSheet({onOpenBottomSheet}: NewTaskBottomSheetProps) {

//   const bottomSheetRef = useRef(null);
//   const snapPoints = useMemo(() => ["50%", "80%"], [])

//   function handleClose() {
//     bottomSheetRef.current?.close()
//   }

//   function handleOpenBottomSheet() {
//     bottomSheetRef.current?.expand()
//   }

//   return (
//       <GestureHandlerRootView className="flex-1 absolute bottom-0 right-0 left-0 top-0">
//         <BottomSheet
//           ref={bottomSheetRef}
//           index={1}
//           snapPoints={snapPoints}
//           backgroundStyle={{backgroundColor: "#ffffff"}}
//           enablePanDownToClose
//         >
//           <Text>Olá Mundo</Text>
//           <TouchableOpacity className="bg-indigo-500 p-4 items-center justify-center" onPress={handleClose}>
//             <Text>Fechar</Text>
//           </TouchableOpacity>
//         </BottomSheet>
//       </GestureHandlerRootView>
//   )
// }
import { create } from "zustand";

export type TaskProps = {
  id: string;
  description: string;
  concluded: boolean
}

type TaskStore = {
  tasks: TaskProps[],
  addTask: (task: TaskProps) => void,
  removeTask: (taskId: string) => void,
  completeTask: (taskId: string) => void,
  unCompleteTask: (taskId: string) => void,
}

const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  addTask: (item: TaskProps) => 
    set((state) => (
      { tasks: [...state.tasks, item] }
    )
  ),
  removeTask: (taskId: string) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== taskId),
    })
  ),
  completeTask: (taskId: string) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, concluded: true } : task
      ),
    })
  ),
  unCompleteTask: (taskId: string) => 
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, concluded: false } : task
      ),
    })
  ),
}));

export default useTaskStore;
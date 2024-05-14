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
  filterTasks(search: string): void
  showAllTasks: () => void;
}

const useTaskStore = create<TaskStore>((set) => {
  let originalTasks: TaskProps[] = [];

  return {
    tasks: [],
    addTask: (item: TaskProps) => 
      set((state) => (
        { tasks: [...state.tasks, item] }
      )),
    removeTask: (taskId: string) =>
      set((state) => ({
        tasks: state.tasks.filter((task) => task.id !== taskId),
      })),
    completeTask: (taskId: string) =>
      set((state) => ({
        tasks: state.tasks.map((task) =>
          task.id === taskId ? { ...task, concluded: true } : task
        ),
      })),
    unCompleteTask: (taskId: string) => 
      set((state) => ({
        tasks: state.tasks.map((task) =>
          task.id === taskId ? { ...task, concluded: false } : task
        ),
      })),
    filterTasks: (search: string) => 
      set((state) => {
        if (originalTasks.length === 0) {
          originalTasks = state.tasks;
        }

        return {
          tasks: state.tasks.filter((task) =>
            task.description.toLowerCase().includes(search.toLowerCase())
          ),
        };
      }),
    showAllTasks: () => 
      set(() => ({
        tasks: originalTasks,
      })),
  };
});


export default useTaskStore;
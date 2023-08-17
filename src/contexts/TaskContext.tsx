import { ReactNode, createContext, useState } from "react"
import uuid from 'react-native-uuid';

export interface ITask {
    id: string
    isCompleted: boolean
    description?: string
}


interface ITaskContext {
    tasks: ITask[]
    selectedTaskById: ITask | null
    onAddTask: (titleTask: string) => void
    onDeleteTask: (taskId: string) => void
    onToggleTaskById: (taskId: string) => void
}

export const TaskContext = createContext({} as ITaskContext)

interface TasksContextProviderProps {
    children: ReactNode
}

export function TasksContextProvider({ children }: TasksContextProviderProps) {

    const [tasks, setTasks] = useState<ITask[]>([])
    const [selectedTaskById, setSelectedTaskById] = useState(null)

    function onAddTask(description: string) {
        const newTask = {
            id: uuid.v4().toString(),
            description,
            isCompleted: false
        }

        setTasks(oldState => [...oldState, newTask])
    }

    function onToggleTaskById(taskId: string) {

        const tasksUpdated = tasks.map(task => {
            if (task.id === taskId) {
                task.isCompleted = !task.isCompleted
            }

            return task
        })
        setTasks(tasksUpdated)
    }

    function onDeleteTask(taskId: string) {
        const tasksUpdated = tasks.filter(task => task.id !== taskId)
        setTasks(tasksUpdated)
    }



    return (
        <TaskContext.Provider
            value={{
                tasks,
                selectedTaskById,
                onAddTask,
                onDeleteTask,
                onToggleTaskById,
            }}
        >
            {children}
        </TaskContext.Provider>
    )

}
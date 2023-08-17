import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import { CheckCircle, Trash } from "phosphor-react-native";
import { ITask, TaskContext } from "../../contexts/TaskContext";
import { useContext } from "react";

interface Props {
    task: ITask
}


export function Task({ task }: Props) {
    const { onToggleTaskById, onDeleteTask } = useContext(TaskContext)
    const taskCompleted = task.isCompleted && { ...styles.iscompleted }
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.checkbutton}
                onPress={() => { onToggleTaskById(task.id) }}>
                {task.isCompleted ?
                    <CheckCircle
                        size={22}
                        weight="fill"
                        style={styles.checkbuttonSVG}
                        color="#5e60ce"
                    /> :
                    <View style={styles.checkbuttondiv} />}
            </TouchableOpacity>
            <Text style={{ ...styles.text, ...taskCompleted }}>{task.description}</Text>
            <TouchableOpacity
                style={styles.deletebutton}
                onPress={() => { onDeleteTask(task.id) }}>

                <Trash
                    size={22}
                    style={styles.checkbuttonSVG}
                    color="#808080"
                />

            </TouchableOpacity>
        </View>
    )
}
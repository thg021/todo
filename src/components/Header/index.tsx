import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { PlusCircle } from "phosphor-react-native";
import { useContext, useState } from "react";
import { TaskContext } from "../../contexts/TaskContext";

export function Header() {
    const [textTask, setTextTask] = useState('')
    const { onAddTask } = useContext(TaskContext)

    function handleAddTask() {
        onAddTask(textTask)
        setTextTask('')
    }

    return (
        <View style={styles.container}>
            <Image
                source={require('../../../assets/Logo.png')} alt="logo"
                style={styles.logo}
            />
            <View style={styles.newTaskForm}>
                <TextInput
                    style={styles.input}
                    placeholder="Tarefa"
                    placeholderTextColor="#808080"
                    onChangeText={setTextTask}
                    value={textTask}

                />
                <TouchableOpacity style={styles.button} onPress={handleAddTask}>
                    <PlusCircle color="#fff" />
                </TouchableOpacity>
            </View>

        </View>
    )
}
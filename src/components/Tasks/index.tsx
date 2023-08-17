import { View, Text, Image, FlatList } from "react-native";
import { styles } from "./styles";
import { Task } from "../Task";
import { ITask, TaskContext } from "../../contexts/TaskContext";
import { useContext } from "react";


export function Tasks() {
    const { tasks } = useContext(TaskContext)
    const taskTotal = tasks.length
    const completedTask = tasks.filter((task) => task.isCompleted).length
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.wrapper}>
                    <Text style={styles.info}>Tarefas criadas</Text>
                    <Text style={styles.number}>{taskTotal}</Text>
                </View>
                <View style={styles.wrapper}>
                    <Text style={{ ...styles.info, ...styles.done }}>Tarefas concluidas</Text>
                    <Text style={styles.number}>{completedTask}</Text>
                </View>
            </View>


            <View style={styles.list}>
                {tasks.length <= 0 && (
                    <View style={styles.empty}>
                        <Image
                            style={styles.emptyImage}
                            source={require('../../../assets/Clipboard.png')} alt="" />
                        <View>
                            <Text style={{ ...styles.emptytext, ...styles.emptytextbold }}>
                                Você ainda não tem tarefas cadastradas
                            </Text>
                            <Text style={styles.emptytext}>Crie tarefas e organize seus itens a fazer</Text>
                        </View>
                    </View>
                )}

                <FlatList
                    data={tasks}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item: task }) => (
                        <Task key={task.id} task={task} />
                    )}
                />
            </View>
        </View>
    )
}
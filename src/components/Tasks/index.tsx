import { View, Text, Image, FlatList } from "react-native";
import { styles } from "./styles";
import { Task } from "../Task";

export interface ITask {
    id: string
    isCompleted: boolean
    description?: string
}


export function Tasks() {
    const tasks: ITask[] = [
        {
            id: '1',
            isCompleted: false,
            description: "Esta é uma tarefa que foi adicionada no nosso todo rocket"
        }, {
            id: '2',
            isCompleted: true,
            description: "Lembrar de fazer a atividade do todo list para entregarmos o mais possivel. Paragrafo bem longo."
        }
    ]
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.wrapper}>
                    <Text style={styles.info}>Tarefas criadas</Text>
                    <Text style={styles.number}>0</Text>
                </View>
                <View style={styles.wrapper}>
                    <Text style={{ ...styles.info, ...styles.done }}>Tarefas concluidas</Text>
                    <Text style={styles.number}>0</Text>
                </View>
            </View>


            <View style={styles.list}>
                {tasks.length <= 0 && (
                    <View style={styles.empty}>
                        <Image source={require('../../../assets/Clipboard.png')} alt="" />
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
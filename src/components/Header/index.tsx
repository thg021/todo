import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { PlusCircle } from "phosphor-react-native";

export function Header() {
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

                />
                <TouchableOpacity style={styles.button} onPress={() => { }}>
                    <PlusCircle color="#fff" />
                </TouchableOpacity>
            </View>

        </View>
    )
}
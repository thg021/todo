import { View } from "react-native";
import { Header } from "../../components/Header";
import { styles } from './styles'
import { Tasks } from "../../components/Tasks";

export function Home() {
    return (
        <View style={styles.container}>
            <Header />
            <Tasks />
        </View>
    )
}
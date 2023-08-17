import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        position: 'relative',
        backgroundColor: "#0d0d0d",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 173
    },
    logo: {
    },
    newTaskForm: {
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        alignItems: 'center',
        bottom: -46,
        width: '100%',
        gap: 4,
        padding: 16
    },
    input: {
        flex: 1,
        height: 60,
        width: '100%',
        color: '#f2f2f2',
        backgroundColor: '#262626',
        borderWidth: 2,
        borderColor: '#0d0d0d',
        borderRadius: 8,
        paddingTop: 0,
        paddingBottom: 0,
        paddingEnd: 16,
        paddingStart: 16,
        fontSize: 16,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 54,
        height: 54,
        borderRadius: 5,
        backgroundColor: '#4ea8de'
    },
    buttonText: {
        color: "#fdfcfe",
        fontSize: 24
    },
}) 
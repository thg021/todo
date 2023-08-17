import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: "#262626",
        borderWidth: 1,
        borderColor: '#333333',
        padding: 16,
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        gap: 10,
        marginBottom: 8

    },
    checkbutton: {
        width: 18,
        height: 18,
        backgroundColor: 'none',
        border: 'none',
    },
    checkbuttondiv: {
        width: '100%',
        height: '100%',
        borderRadius: 999,
        borderWidth: 2,
        borderColor: '#1e6f9f',
    },
    checkbuttonSVG: {
    },
    text: {
        flex: 1,
        fontSize: 14,
        color: '#f2f2f2',
        marginRight: 'auto',
    },
    deletebutton: {},
    iscompleted: {
        color: "#808080",
        textDecorationLine: 'line-through'

    }
})
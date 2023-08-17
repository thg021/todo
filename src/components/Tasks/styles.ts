import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 55,
        padding: 16
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 18
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    info: {
        color: '#4ea8de',
        fontSize: 14,
        fontWeight: "700",
    },
    done: {
        color: '#5e60ce'
    },
    number: {
        backgroundColor: "#333333",
        color: "#d9d9d9",
        paddingVertical: 1,
        paddingHorizontal: 10,
        borderRadius: 999,
        fontSize: 14,
        fontWeight: "700",
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14,

        marginTop: 20
    },
    empty: {
        borderTopWidth: 1,
        borderTopColor: '#333333',
        display: "flex",
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: 'center',
        color: '#808080',
        gap: 16
    },
    emptyImage: {
        marginTop: 48
    },
    emptycontent: {},
    emptytext: {
        fontSize: 14,
        color: '#808080'
    },
    emptytextbold: {
        fontWeight: 'bold'
    }
})
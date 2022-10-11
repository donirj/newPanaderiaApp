import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        height: 150,
    },
    contentContainer: {
        flex: 1,
        borderRadius: 10,
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 4,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    title: {
        fontFamily: 'Lato-Bold',
        fontSize: 20,
    }
});
import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
    container: {
        width: '80%',
        maxWidth: 400,
        padding: 15,
        margin: 15,
        borderColor: colors.primary,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: colors.white,
        height: 350,
    },
    keyboardContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        fontFamily: 'Lato-Regular',
        marginVertical: 5,
        textAlign: 'center'
    },
    label: {
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        marginVertical: 5
    },
    input: {
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
        width: '90%',
        fontFamily: 'Lato-Regular',
        marginBottom: 10,
    },
    promptButton: {
        backgroundColor: colors.white,
        borderColor: colors.primary,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
    prompt: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    promptMessage: {
        fontSize: 14,
        color: colors.secondary,
        fontFamily: 'Lato-Regular',
    }
})
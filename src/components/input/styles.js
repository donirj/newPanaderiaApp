import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    input: {
        paddingVertical: 5,
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
        width: '90%',
        fontFamily: 'Lato-Regular',
        marginBottom: 10,
    },
    message: {
        marginVertical: 5,
    },
    helperText: {
        fontSize: 12,
        fontFamily: 'Lato-Bold',
        color: '#ff0000',
    }
});
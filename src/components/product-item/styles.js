import { StyleSheet } from "react-native";
import { colors } from '../../constants/themes/colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 10,
        backgroundColor: colors.primary,
        height: 120
    },
    title: {
        fontFamily: 'Lato-Bold',
        fontSize: 18
    },
    price: {
        fontFamily: 'Lato-Bold',
        fontSize: 16
    },
    detail: {
        fontFamily: 'Lato-Regular',
        fontSize: 14
    },
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    item: {
        flex: 1,
        justifyContent: 'space-around'
    }
})
import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    containerList: {
        flex: 1,
        backgroundColor: "#fff",
    },
    footer: {
        borderTopColor: colors.primary,
        borderTopWidth: 1,
        paddingVertical: 10,
        marginBottom: 10,
        marginHorizontal: 10
    },
    buttonConfirm: {
        backgroundColor: colors.primary,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textButtonConfirm: {
        fontFamily: "Lato-Regular",
        fontSize: 14,
    },
    totalContainer: {
        flex: 0.4,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    totalTitle: {
        fontFamily: "Lato-Regular",
        fontSize: 14,
    },
    total: {
        fontFamily: "Lato-Bold",
        fontSize: 16,
    },
});
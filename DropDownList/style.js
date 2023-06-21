import { StyleSheet } from "react-native";

export default StyleSheet.create({
    btnAction: {
        width: 200,
        height: 50,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9d132'
    },
    closeIcon: {
        width: 20,
        height: 20,
        marginLeft: 10,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    iconContainer: {
        width: 55,
        alignItems: 'center'
    },
    inputArea: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 15,
        paddingVertical: 15,
        backgroundColor: '#ffffff',
        borderColor: '#f0f0f0',
        borderWidth: 1,
        borderRadius: 4,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4
    },
    itemContainer: {
        padding: 15,
        borderBottomColor: '#bbb',
        borderBottomWidth: 1
    },
    itemsContainer: {
        marginBottom: 20,
        width: '100%'
    },
    mainContainer: {
        backgroundColor: '#ffffff',
        width: '90%',
        borderRadius: 5,
        padding: 16,
        alignItems: "center",
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    previewContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    previewItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginTop: 16,
        marginHorizontal: 8,
        borderRadius: 20,
        borderColor: '#666',
        borderWidth: 1
    }
});
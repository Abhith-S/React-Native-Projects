import { StyleSheet } from "react-native";
import {Colors} from "../../../constants/ConstantsExports"

export default StyleSheet.create({
    btnAction: {
        width: 200,
        height: 50,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:Colors.lightPrimary,
        
        //backgroundColor: '#f9d132'
    },
    btnAction_text:{
        color:Colors.white,
    },
    closeIcon: {
        width: 16,
        height: 16,
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
        paddingVertical: 13,
        paddingLeft:2,
        borderRadius: 10,
        borderColor: '#666',
        borderWidth: .8
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
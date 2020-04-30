import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        backgroundColor: '#0A60FF'
    },

    cotentItem: {
        margin: 10
    },
    
    textHeader: {
        alignSelf: "center",

        margin: 20,

        fontWeight: 'bold',
        fontSize: 24,
        color: 'white'
    },

    list: {
        alignSelf: "center",

        width: '100%',

        borderRadius: 5,

        marginRight: 40,
        marginLeft: 40,
        marginTop: 20,

        backgroundColor: 'white',
    },

    productName: {
        marginBottom: 20,

        fontSize: 24,
        fontWeight: 'bold',
        color: '#0A60FF'
    },

    productPrice: {
        color: 'green',
        fontSize: 20
    },

    cartProduct: {
        alignSelf: 'flex-end',
        color: '#0A60FF'
    }

})
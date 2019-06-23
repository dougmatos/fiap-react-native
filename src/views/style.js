import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    safearea:{
        paddingBottom: 50
    },
    buttonSecondary: {
        marginBottom: 5,
        marginLeft: 15,
        marginRight: 15,
        padding: 15,
        width: Dimensions.get('window').width - 30,
        backgroundColor: '#588BAE',
        height: 'auto'
    },
    buttonSecondaryTitle: {
        textAlign: 'left',
        paddingLeft: 0,
        fontWeight: 'bold',
        color: '#FFF',
        marginTop: 10,
        marginBottom: 3,
        flex: 1
    },
    buttonSecondaryText: {
        color: '#FFF',
        flex: 1
    },
    buttonSecondaryTextLast: {
        color: '#FFF',
        marginBottom: 10,
        flex: 1
    },
    detailsListTitle:{
        textAlign: 'left',
        paddingLeft: 15,
        paddingRight: 15,
        fontWeight: 'bold',
        color: '#444',
        marginTop: 10,
        marginBottom: 3,
        flex: 1
    },
    detailsListText: {
        color: '#444',
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15
    },
    detailsListTextLast: {
        color: '#444',
        marginBottom: 10,
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15
    }
});
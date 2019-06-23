import React, { PureComponent } from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'
import { View, Text } from 'react-native'



export default class Loader extends PureComponent {

    render() {
        return (
            <View style={style.loaderWrapper}>
                <ActivityIndicator />
                <Text style={style.loaderText} >Aguarde</Text>
            </View>
        );
    }
}

let style = StyleSheet.create({
    loaderWrapper: {
        marginTop: 200,
        textAlign: 'center'
    },
    loaderText: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 16
    }
});
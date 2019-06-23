import React, { PureComponent } from 'react'
import { Title, Text } from 'native-base';
import { StyleSheet } from 'react-native'

export default class TitleScreen extends PureComponent {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Text style={style.title}>{this.props.title}</Text>
        );
    }

}

const style = StyleSheet.create({
    title: {
        marginTop: 5,
        padding: 10,
        color: '#333',
        fontWeight: 'bold'
    }
});
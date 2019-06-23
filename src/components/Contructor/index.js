import React, { PureComponent } from 'react'
import { Title, Text, Card } from 'native-base';
import { StyleSheet } from 'react-native'

export default class Constructor extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        let contructor = this.props.contructor;
        return (
            <Card style={style.Card}>
                <Title style={style.constructorTitle}>{contructor.name}</Title>
                <Text>País: {contructor.nationality}</Text>
            </Card>
        );
    }

}

const style = StyleSheet.create({
    Card: {
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 5,
        padding: 15,
        backgroundColor: '#ccc'
    },
    constructorTitle: {
        textAlign: 'left',
        paddingLeft: 0,
        color: '#444',
        fontWeight: 'bold'
    }
});
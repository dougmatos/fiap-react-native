import React, {PureComponent} from 'react'
import { Title, Button, Text, Card } from 'native-base';
import {StyleSheet} from 'react-native'

export default class Drive extends PureComponent{

    constructor(props){
        super(props);
    }

    render(){
        let pilot = this.props.drive;
        return (
            <Card style={style.Card }>
                <Title style={{textAlign:'left',paddingLeft: 0}}>{ `${pilot.givenName} ${pilot.familyName}` }</Title>
                <Text>Nacionalidade: { pilot.nationality }</Text>
                <Text>Data de nascimento: { pilot.dateOfBirth }</Text>
            </Card>
        );
    }

}

const style = StyleSheet.create({
    Card: {
        marginBottom: 5,
        marginLeft:5,
        marginRight: 5,
        padding: 15,
        backgroundColor: '#ccc'
    },
    
});
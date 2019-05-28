import React, {PureComponent} from 'react'
import { Title, Button, Text, Card } from 'native-base';
import {StyleSheet} from 'react-native'

export default class Race extends PureComponent{

    constructor(props){
        super(props);
        console.log(this.props.race);
    }

    render(){
        let race = this.props.race;
        return (
            <Card style={style.Card }>
                <Title style={{textAlign:'left'}}>{ `${('0' + race.round).substr(-2, 2)} - ${race.raceName}` }</Title>
                <Text>Data: { race.date }</Text>
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
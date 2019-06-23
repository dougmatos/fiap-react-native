import React, {PureComponent} from 'react'
import { Title, Button, Text, Card } from 'native-base';
import {StyleSheet} from 'react-native'
import DateFormatterService from '../../services/DateFormatterService'

export default class Race extends PureComponent{

    constructor(props){
        super(props);
    }

    render(){
        let race = this.props.race;
        return (
            <Card style={style.card }>
                <Title style={style.raceTitle}>{ `${('0' + race.round).substr(-2, 2)} - ${race.raceName}` }</Title>
                <Text>Data: { DateFormatterService.format(race.date) }</Text>
            </Card>
        );
    }

}

const style = StyleSheet.create({
    card: {
        marginBottom: 5,
        marginLeft:5,
        marginRight: 5,
        padding: 15,
        backgroundColor: '#ccc'
    },
    raceTitle: { 
        textAlign: 'left', 
        paddingLeft: 0,
        color: '#444',
        fontWeight: 'bold'
    }
});
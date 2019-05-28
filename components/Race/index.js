import React, {PureComponent} from 'react'
import { Title, Button, Text } from 'native-base';
import {StyleSheet} from 'react-native'

export default class Race extends PureComponent{

    constructor(props){
        super(props);
        
    }

    render(){
        let race = this.props.race;
        return (
            <Button style={style.Botao} full primary> 
                <Text>{ `${race.round} - ${race.raceName}` }</Text>
            </Button>
        );
    }

}

const style = StyleSheet.create({
    Botao: {
        marginBottom: 5,
        marginLeft:15,
        marginRight: 15
    },
    
});
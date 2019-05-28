import React, {PureComponent} from 'react'
import { Title } from 'native-base';
import {StyleSheet} from 'react-native'

export default class TitleScreen extends PureComponent{

    constructor(props){
        super(props);
        
      }

    render(){
        return (
            <Title style={style.Title}>{ this.props.title }</Title>
        );
    }

}

const style = StyleSheet.create({
    Title: {
        marginTop:25,
        marginBottom: 25
    },
    
});
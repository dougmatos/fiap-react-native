import React, { PureComponent } from 'react'
import { View } from 'react-native'
import { Text, Button, Content, Container, Icon } from 'native-base'
import Style from './style-sheet'

class Seasons extends PureComponent{

    renderSeasons(){
        let items = [];

        for(let i =2001; i <= 2019; i++){
            const year = `${i}`;
            items.push(
                <Button onPress={ () => this.props.handleClick(year) } full dark key={ `season-${i}` }> 
                    <Text>{ i }</Text>
                </Button>
            );
        }
        return items;
    }

    render(){
        return (
            <View style={ Style.Container }> 
                { this.renderSeasons() }
            </View>
        );
    }
}


export default Seasons;
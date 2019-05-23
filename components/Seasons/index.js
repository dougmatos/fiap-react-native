import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'

class Seasons extends PureComponent{

    renderSeasons(){
        let items = [];

        for(let i =0; i < 19; i++){
            items.push(<Text key={ `season-${i}` }>{ `0${i}`.substr(-2, 2) }</Text>);
        }
        return items;
    }

    render(){
        return (
            <View>
                { this.renderSeasons() }
            </View>
        );
    }
}


export default Seasons;
import React, { PureComponent } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { Text, Button } from 'native-base'
import { ScrollView } from 'react-native-gesture-handler';

class Seasons extends PureComponent {

    renderSeasons() {
        let items = [];

        for (let i = 2019; i >= 1951; i = i - 3) {
            items.push(
                <View key={`line-${i}`} style={{ flexDirection: 'row', flex: 1 }}>
                    <Button style={style.button} onPress={() => this.props.handleClick(`${i}`)} primary key={`season-${i}`}>
                        <Text style={style.buttonText}>{i}</Text>
                    </Button>
                    <Button style={style.button} onPress={() => this.props.handleClick(`${(i - 1)}`)} primary key={`season-${(i - 1)}`}>
                        <Text style={style.buttonText}>{(i - 1)}</Text>
                    </Button>
                    <Button style={style.button} onPress={() => this.props.handleClick(`${(i - 2)}`)} primary key={`season-${(i - 2)}`}>
                        <Text style={style.buttonText}>{(i - 2)}</Text>
                    </Button>
                </View>

            );
        }
        return items;
    }

    render() {
        return (
            <View style={style.container}>
                <ScrollView style={style.scroll}>
                    {this.renderSeasons()}
                </ScrollView>
            </View>
        );
    }
}


export default Seasons;

let style = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width,
        flex: 1,
        margin: 5
    },
    scroll: {
        width: Dimensions.get("window").width,
        flexDirection: 'column',
        flex: 1,
        marginBottom: 10
    },
    button: {
        width: 92,
        marginRight: 5,
        marginLeft: 5,
        marginTop: 5,
        paddingTop: 5,
        paddingBottom: 5,
        flex: 1
    },
    buttonText: {
        textAlign: 'center',
        width: '100%'
    }
});
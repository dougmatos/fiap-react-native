import React, { PureComponent } from 'react'
import { Title, Button, Text, View } from 'native-base';
import { StyleSheet, Dimensions } from 'react-native'
import DateFormatterService from '../../services/DateFormatterService'
import styleMaster from "../../views/style";

export default class Race extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        let race = this.props.race;
        return (
            <Button onPress={() => this.props.handleClick(race.season, race.round)} style={styleMaster.buttonSecondary}>
                <View style={style.wrapperButton}>
                    <Title style={styleMaster.buttonSecondaryTitle}>{`${('0' + race.round).substr(-2, 2)}. ${race.raceName}`}</Title>
                    <Text style={styleMaster.buttonSecondaryTextLast}>Data: {DateFormatterService.format(race.date)}</Text>
                </View>
            </Button>
        );
    }

}

const style = StyleSheet.create({
    wrapperButton: {
        flexDirection: 'column'
    }

});
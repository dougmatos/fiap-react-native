import React, { PureComponent } from 'react'
import { Title, Button, Text, Card, View } from 'native-base';
import { StyleSheet } from 'react-native'
import DateFormatterService from "../../services/DateFormatterService";
import styleMaster from "../../views/style";

export default class Drive extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        let pilot = this.props.drive;
        return (
            <Button onPress={() => this.props.handleClick(pilot.driverId)} style={styleMaster.buttonSecondary}>
                <View style={style.wrapperButton}>
                    <Title style={styleMaster.buttonSecondaryTitle}>{`${pilot.givenName} ${pilot.familyName}`}</Title>
                    <Text style={styleMaster.buttonSecondaryText} >Nacionalidade: {pilot.nationality}</Text>
                    <Text style={styleMaster.buttonSecondaryTextLast}>Data de nascimento: {DateFormatterService.format(pilot.dateOfBirth)}</Text>
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
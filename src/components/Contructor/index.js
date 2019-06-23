import React, { PureComponent } from 'react'
import { Title, Text, Card, Button, View } from 'native-base';
import { StyleSheet } from 'react-native'
import styleMaster from "../../views/style";

export default class Constructor extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        let contructor = this.props.contructor;
        return (
            <Button onPress={() => this.props.handleClick(contructor.constructorId)} style={styleMaster.buttonSecondary}>
                <View style={style.wrapperButton}>
                    <Title style={styleMaster.buttonSecondaryTitle}>{contructor.name}</Title>
                    <Text style={styleMaster.buttonSecondaryTextLast}>País: {contructor.nationality}</Text>
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
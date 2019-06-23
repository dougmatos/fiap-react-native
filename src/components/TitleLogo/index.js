import React, { PureComponent } from 'react';
import { Image, Dimensions, StyleSheet } from 'react-native';
import Logo from '../../assets/logo.png'
import { View, Text } from 'native-base';

export default class TitleLogo extends React.Component {
    render() {
        return (
            <View style={style.titleWrapper}>
                <Image style={style.titleImage} source={Logo} />
                <View style={{ flexDirection: "column" }}>
                    <Text style={style.titleText}>Fórmula 1</Text>
                    <Text style={style.titleSubText}>Informações das provas</Text>
                </View>
            </View>

        );
    }
}

let style = StyleSheet.create({
    titleWrapper: {
        width: Dimensions.get("window").width,
        paddingLeft: 80,
        flexDirection: "row"
    },
    titleImage: {
        width: 55,
        height: 60,
        marginTop: 2,
        marginRight: 15
    },
    titleText: {
        marginTop: 0,
        color: "#fff",
        fontSize: 24,
        textAlign: "left"
    },
    titleSubText: {
        marginTop: 3,
        color: "yellow",
        fontSize: 16,
        textAlign: "left"
    }
});


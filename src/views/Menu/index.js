import React from 'react'
import { SafeAreaView } from 'react-navigation';
import TitleScreen from '../../components/TitleScreen';
import { Button, Text, Card } from 'native-base';
import {Dimensions, StyleSheet} from 'react-native'

export default class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            season: 0
        };
    }

    componentDidMount(){
        const season = this.props.navigation.getParam("season");
        this.setState({season});
    }

    goToPage(page){
        const season = this.state.season;
        this.props.navigation.navigate(page, { season });
    }

    render(){
        return (
            <SafeAreaView>
                <TitleScreen title={`Selecione o que deseja ver da temporada ${this.state.season}`} />
                <Button style={style.buttonMenu} onPress={ () => this.goToPage('Season') }>
                    <Text style={style.textButtonMenu}>Corridas</Text>
                </Button>
                <Button style={style.buttonMenu} onPress={ () => this.goToPage('Drives') }>
                    <Text style={style.textButtonMenu}>Pilotos</Text>
                </Button>
                <Button style={style.buttonMenu} onPress={() => this.goToPage('Constructors')}>
                    <Text style={style.textButtonMenu}>Construtores</Text>
                </Button>
            </SafeAreaView>
        );
    }

}

const style = StyleSheet.create({
    buttonMenu: {
        width:Dimensions.get('window').width - 30, 
        marginLeft:15, 
        marginRight: 15, 
        marginTop: 15,
        paddingTop: 50, 
        paddingBottom: 50, 
        height: 130
    },
    textButtonMenu:{
        width: '100%',
        textAlign: 'center'
    }
    
});
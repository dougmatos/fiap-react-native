import React from 'react'
import { SafeAreaView } from 'react-navigation'
import { ScrollView } from 'react-native-gesture-handler';
import TitleScreen from '../../components/TitleScreen'
import FormulaOneService from '../../services/FormulaOneService'
import DateFormatterService from '../../services/DateFormatterService'
import Loader from '../../components/Loader'
import style from "../style";
import { View, Text } from 'native-base';

export default class ConstructorDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            loading: true,
            races: []
        };
    }
    componentDidMount() {
        const season = this.props.navigation.getParam('season');
        const constructorId = this.props.navigation.getParam('constructorId');

        FormulaOneService.getConstructorDetails(season, constructorId)
            .then(data => this.setState({
                title: `Corridas: ${data[0].constructorName} - ${season}`,
                loading: false,
                races: data
            }))
            .catch(x => alert(x));
    }

    render() {

        if (this.state.loading)
            return (
                <SafeAreaView>
                    <Loader />
                </SafeAreaView>
            );

        return (
            <SafeAreaView style={style.safearea}>
                <TitleScreen title={this.state.title} />
                <ScrollView>
                    {this.state.races.map(x =>
                        <View key={x.round} style={{ flexDirection: 'column' }}>
                            <Text style={style.detailsListTitle}>{x.round} - {x.raceName}</Text>
                            <Text style={style.detailsListText}>Posição dos pilotos:</Text>
                            <Text style={style.detailsListText}>- {x.driver1.position}º · {x.driver1.name}</Text>
                            <Text style={style.detailsListTextLast}>- {x.driver2.position}º · {x.driver2.name}</Text>
                        </View>
                    )}
                </ScrollView>
            </SafeAreaView>
        );
    }
}
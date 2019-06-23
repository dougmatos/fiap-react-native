import React from 'react'
import { SafeAreaView } from 'react-navigation'
import { ScrollView } from 'react-native-gesture-handler';
import TitleScreen from '../../components/TitleScreen'
import FormulaOneService from '../../services/FormulaOneService'
import DateFormatterService from '../../services/DateFormatterService'
import Loader from '../../components/Loader'
import style from "../style";
import { View, Text } from 'native-base';

export default class RaceDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            loading: true,
            race: {}
        };
    }
    componentDidMount() {
        const season = this.props.navigation.getParam('season');
        const round = this.props.navigation.getParam('round');

        FormulaOneService.getRaceDetais(season, round)
            .then(data => this.setState({
                title: `Resultado: ${data.raceName} - ${DateFormatterService.format(data.date)}`,
                loading: false,
                race: data
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
                    {this.state.race.result.map(x =>
                        <View key={x.position} style={{ flexDirection: 'column' }}>
                            <Text style={style.detailsListTitle}>{x.position}º - {x.driver}</Text>
                            <Text style={style.detailsListText}>Construtor: {x.contructor}</Text>
                            <Text style={style.detailsListTextLast}>Tempo: {x.time} ({x.laps} voltas)</Text>
                        </View>
                    )}
                </ScrollView>
            </SafeAreaView>
        );
    }
}
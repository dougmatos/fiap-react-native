import React from 'react'
import { SafeAreaView } from 'react-navigation'
import { ScrollView } from 'react-native-gesture-handler';
import TitleScreen from '../../components/TitleScreen'
import FormulaOneService from '../../services/FormulaOneService';
import Loader from "../../components/Loader";
import Constructor from '../../components/Contructor';
import style from "../style";

export default class Constructors extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            loading: true,
            constructors: []
        };
    }
    static navigationOptions = () => {
        return { title: 'Contrutores' }
    }

    componentDidMount() {
        const season = this.props.navigation.getParam('season');
        this.setState({ title: `Construtores da temporada ${season}` });
        FormulaOneService.getConstructorsForSeason(season)
            .then(constructors => this.setState({ constructors, loading: false }))
            .catch(x => alert(x));
    }

    renderConstructors() {
        return this.state.constructors
            .map(it => <Constructor key={it.constructorId} contructor={{ ...it }} />);
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
                    {this.renderConstructors()}
                </ScrollView>
            </SafeAreaView>
        );
    }
}
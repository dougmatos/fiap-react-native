import React from 'react'
import { SafeAreaView } from 'react-navigation'
import { ScrollView } from 'react-native-gesture-handler';
import TitleScreen from '../../components/TitleScreen'
import Race from '../../components/Race';
import FormulaOneService from '../../services/FormulaOneService'
import Loader from '../../components/Loader'
import style from "../style";

export default class Season extends React.Component{

    constructor(props){
        super(props);
        this.state = { 
          title : "",
          loading: true, 
          races : [] 
        };
    }
    static navigationOptions = () => {
      return {title: 'Temporada'}
    }

    componentDidMount(){
        const season = this.props.navigation.getParam('season');
        this.setState({ title: `Corridas de ${season}` });

        FormulaOneService.getRacesForSeason(season)
            .then(races => this.setState({races, loading: false}))
            .catch(x => alert(x));
          
    }

    renderRaces(){
        return this.state.races
            .map(it => <Race key={it.Circuit.circuitId} race={{...it}} />);
    }

    render() {

      if(this.state.loading)
        return (
          <SafeAreaView>
            <Loader />
          </SafeAreaView>
        );

        return (
          <SafeAreaView style={style.safearea}>
            <TitleScreen title={ this.state.title } />
              <ScrollView> 
                { this.renderRaces() }
              </ScrollView>
          </SafeAreaView>
        );
      }
}
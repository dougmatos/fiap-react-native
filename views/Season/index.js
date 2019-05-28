import React from 'react'
import { SafeAreaView } from 'react-navigation'
import { ScrollView } from 'react-native-gesture-handler';
import TitleScreen from '../../components/TitleScreen'
import Race from '../../components/Race';

export default class Season extends React.Component{

    constructor(props){
        super(props);
        this.state = { title : "", races : [] };
    }
    static navigationOptions = () => {
      return {title: 'Temporada'}
    }

    componentDidMount(){
        const season = this.props.navigation.getParam('season');
        this.setState({ title: season });

        fetch(`http://ergast.com/api/f1/${season}.json`)
          .then(response => response.json())
          .then(data => this.setState({races: data.MRData.RaceTable.Races}));
    }

    renderRaces(){
        return this.state.races
            .map((it, idx) => <Race key={`season-${idx}`} race={{...it}} />);
    }

    render() {
        return (
          <SafeAreaView>
            <TitleScreen title={ this.state.title } />
            <ScrollView>
                { this.renderRaces() }
            </ScrollView>
          </SafeAreaView>
        );
      }
}
import React from 'react'
import { SafeAreaView } from 'react-navigation'
import { ScrollView } from 'react-native-gesture-handler';
import TitleScreen from '../../components/TitleScreen'
import Drive from '../../components/Drive';

export default class Drivers extends React.Component{

    constructor(props){
        super(props);
        this.state = { title : "", drivers : [] };
    }
    static navigationOptions = () => {
      return {title: 'Pilotos'}
    }

    componentDidMount(){
        const season = this.props.navigation.getParam('season');
        this.setState({ title: `Pilotos da temporada ${season}` });

        fetch(`http://ergast.com/api/f1/${season}/drivers.json`)
          .then(response => response.json())
          .then(data => this.setState({drivers: data.MRData.DriverTable.Drivers}));
    }

     renderDrivers(){
         return this.state.drivers
             .map(it => <Drive key={it.driverId} drive={{...it}} />);
     }

    render() {
        return (
          <SafeAreaView>
            <TitleScreen title={ this.state.title } />
            <ScrollView>
                { this.renderDrivers() }
            </ScrollView>
          </SafeAreaView>
        );
      }
}
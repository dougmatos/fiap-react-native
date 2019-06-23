import React from 'react'
import { SafeAreaView } from 'react-navigation'
import { ScrollView } from 'react-native-gesture-handler';
import TitleScreen from '../../components/TitleScreen'
import Drive from '../../components/Drive';
import FormulaOneService from '../../services/FormulaOneService';
import Loader from "../../components/Loader";
import style from "../style";

export default class Drivers extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      loading: true,
      season: 0,
      drivers: []
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    const season = this.props.navigation.getParam('season');
    this.setState({ title: `Pilotos da temporada ${season}`, season });

    FormulaOneService.getDriversForSeason(season)
      .then(drivers => this.setState({ drivers, loading: false }))
      .catch(x => alert(x));
  }
  static navigationOptions = () => {
    return { title: 'voltar' }
  }

  getData(driveId) {
    const season = this.state.season;
    this.props.navigation.navigate("DriveDetails", { season, driveId });
  }

  renderDrivers() {
    return this.state.drivers
      .map(it => <Drive key={it.driverId} drive={{ ...it }} handleClick={this.getData} />);
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
          {this.renderDrivers()}
        </ScrollView>
      </SafeAreaView>
    );
  }
}
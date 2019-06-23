import { Font } from 'expo'
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation'
import Seasons from '../../components/Seasons'
import TitleScreen from '../../components/TitleScreen';
import Loader from '../../components/Loader'


export default class App extends React.Component {

  constructor(props){
    super(props);
    this.getdata = this.getdata.bind(this)
    this.state = { loading: true };
  }

  componentDidMount() {
    Font.loadAsync({ // correção de problema ao carregar no android
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    }).then(() => this.setState({ loading: false }));
  }

  getdata(season){
    this.props.navigation.navigate('Menu', { season });
  }

  render() {
    if (this.state.loading)
      return (<SafeAreaView><Loader /></SafeAreaView>);

    return (
      <SafeAreaView style={styles.container}>
        <TitleScreen title="Selecione o ano da temporada" />
        <Seasons handleClick={ this.getdata } />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
    marginBottom: 0
  },
});
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation'
import Seasons from '../../components/Seasons'
import TitleScreen from '../../components/TitleScreen';


export default class App extends React.Component {

  constructor(props){
    super(props);
    this.getdata = this.getdata.bind(this)
  }


  getdata(season){
    
    this.props.navigation.navigate('Menu', { season });
  }

  render() {
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
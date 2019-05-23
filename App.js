import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-navigation'
import Seasons from './components/Seasons'



export default class App extends React.Component {

  constructor(props){
    super(props);

  }

  getdata(season){
    fetch(`http://ergast.com/api/f1/${season}.json`)
      .then(response => response.json())
      .then(data => {
        let races = data.MRData.RaceTable.Races;
        let racesStr = races.map(it => `${it.round} - ${it.raceName}`).join('\n');
        alert(racesStr);
      });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Seasons handleClick={ this.getdata } />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#404040',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

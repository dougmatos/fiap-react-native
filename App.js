import React from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation'

import Home from './views/Home'
import Season from './views/Season'
import Menu from './views/Menu';
import Drives from './views/Drives';
import TitleLogo from './components/TitleLogo';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Season: {
      screen: Season
    },
    Menu:{
      screen: Menu
    },
    Drives:{
      screen: Drives
    }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions:{
      headerTitle: <TitleLogo />,
      headerStyle:{
        backgroundColor: '#333',
        height:130
      },
      headerTintColor: '#fff',
      headerTitleStyle:{
        fontWeight: 'bold'
      }
    }
  }
);

export default createAppContainer(AppNavigator)
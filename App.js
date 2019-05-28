import React from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation'

import Home from './views/Home'
import Season from './views/Season'

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Season: {
      screen: Season
    }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions:{
      headerStyle:{
        backgroundColor: '#333'
      },
      headerTintColor: '#fff',
      headerTitleStyle:{
        fontWeight: 'bold'
      }
    }
  }
);

export default createAppContainer(AppNavigator)
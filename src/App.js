import React from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation'
import { Font } from 'expo'
import Home from './views/Home'
import Season from './views/Season'
import Menu from './views/Menu';
import Drives from './views/Drives';
import Constructors from "./views/Constructors";
import TitleLogo from './components/TitleLogo';

const AppNavigator = createStackNavigator(
  {
    Home: {screen: Home},
    Season: {screen: Season},
    Menu:{screen: Menu},
    Drives:{screen: Drives},
    Constructors:{screen: Constructors}
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions:{
      headerTitle: <TitleLogo />,
      headerStyle:{
        backgroundColor: '#333',
        height:90
      },
      headerTintColor: '#fff',
      headerTitleStyle:{
        fontWeight: 'bold'
      }
    }
  }
);


export default createAppContainer(AppNavigator)


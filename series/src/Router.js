import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import LoginPage from './pages/LoginPage';
import SeriesPage from './pages/SeriesPage';
import SerieDetailPage from './pages/SerieDetailPage';
import SerieFormPage from './pages/SerieFormPage';

export default createStackNavigator({
  Login: {
    screen: LoginPage,
    navigationOptions: {
      title: 'Bem vindo',
    },
  },
  Main: {
    screen: SeriesPage,
    navigationOptions: {
      title: 'Series!',
    },
  },
  SerieForm : {
    screen: SerieFormPage,
    navigationOptions: ({navigation})=>{
      const {params} = navigation.state;
      if(params && params.serieToEdit){
        return  {
          title:  params.serieToEdit.title,
        }
      }
      return  {
        title: 'Nova série',
      }
    },
  },
  SerieDetail: {
    screen: SerieDetailPage,
    navigationOptions: ({navigation})=>{
      const {serie} = navigation.state.params;
      return  {
        title: serie.title,
      }
    },
  },

},
{
  navigationOptions: {
    title: 'Series',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#6ca2f7',
      borderBottomWidth: 1,
      borderBottomColor: '#C5C5C5',
    },
    headerTitleStyle: {
      color: 'white',
      fontSize: 30,
    },
  },
});

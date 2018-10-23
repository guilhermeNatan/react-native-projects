import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import LoginPage from './src/pages/LoginPage';

export default createStackNavigator({
  Login: {
    screen: LoginPage,
    navigationOptions: {
      title: 'Bem vindo',
    },
  },
},
{
  navigationOptions: {
    title: 'Series',
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

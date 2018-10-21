import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    marginTop: 25,
    backgroundColor: '#6ca2f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    color: '#fff',
  },
});

export const Header = (props) => {
  const { title } = props;
  return (
    <View style={style.container}>
      <Text style={style.title}>{ title }</Text>
    </View>
  );
};

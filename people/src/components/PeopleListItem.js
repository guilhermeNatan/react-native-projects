import React from 'react';
import {
  Text, View, StyleSheet, Image, TouchableOpacity,
} from 'react-native';
import { capitalizeFirstLatter } from '../util';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b9cbe7',
  },
  line: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
    alignItems: 'center',
    flexDirection: 'row',
  },
  lineText: {
    fontSize: 20,
    paddingLeft: 15,
    flex: 7,
  },
  avatar: {
    aspectRatio: 1,
    flex: 1,
    marginLeft: 15,
    borderRadius: 50,
  },
});


export const PeopleListItem = (props) => {
  const { pessoa, navigateToPeopleDetail } = props;
  const { name } = pessoa;
  return (
    <TouchableOpacity
      onPress={() => {
        navigateToPeopleDetail({ pessoa });
      }}
    >
      <View style={styles.line}>
        <Image style={styles.avatar} source={{ uri: pessoa.picture.thumbnail }} />
        <Text style={styles.lineText}>
          {`${
            capitalizeFirstLatter(name.title)
          } ${
            capitalizeFirstLatter(name.first)
          } ${
            capitalizeFirstLatter(name.last)
          } `}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

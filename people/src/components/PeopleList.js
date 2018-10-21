import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { PeopleListItem } from './PeopleListItem';

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
  },

});

export const PeopleList = (props) => {
  const { peoples, onPressItem } = props;

  return (
    <FlatList
      style={styles.container}
      data={peoples}
      keyExtractor={item => item.name.first}
      renderItem={({ item }) => (
        <PeopleListItem
          pessoa={item}
          navigateToPeopleDetail={onPressItem}

        />
      )}
    />


  );
};

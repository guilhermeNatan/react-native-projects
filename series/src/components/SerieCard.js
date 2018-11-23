import React from 'react';
import {
  View, Button, TextInput, Text, StyleSheet, ActivityIndicator,
  TouchableOpacity,
  Dimensions,Image,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
      width: '50%',
      padding: 5,
      height: Dimensions.get('window').width / 2
  },
  card: {
    flex: 1,
    borderWidth: 1
  },
  cardTitleWrapper: {
    backgroundColor: 'black',
    position: 'absolute',
    bottom: 0,
    opacity: 0.8,
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 3,
    paddingRight: 3,
    alignItems: 'center'

  },
  cardTitle:{
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  firtsColumn: {
    paddingLeft: 10,
  },
  lastColumn:{
      paddingRight: 10,
  }
});

const SerieCard = ({serie, isFirstColumn, onNavigate}) => (
  <TouchableOpacity
    onPress={onNavigate}
    style={[styles.container,
      isFirstColumn ? styles.firtsColumn : styles.lastColumn]}>
    <View style={styles.card}>
      {
        serie.img ?
        <Image source={{uri: serie.img}} aspectRatio={1} resizeMode="cover"/> 
        : null
      }
      <View style={styles.cardTitleWrapper}>
          <Text style={styles.cardTitle}>{serie.title} </Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default SerieCard;

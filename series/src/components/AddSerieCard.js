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
  firtsColumn: {
    paddingLeft: 10,
  },
  lastColumn:{
      paddingRight: 10,
  },
  image: {
    width: '100%',
    height: '100%'
  }
});

const AddSerieCard = ({serie, isFirstColumn, onNavigate}) => (
  <TouchableOpacity
    onPress={onNavigate}
    style={[styles.container,
      isFirstColumn ? styles.firtsColumn : styles.lastColumn]}>
    <View style={styles.card}>
       <Image source={require('../../resources/plus.png')}
        style={styles.image}
       />

    </View>
  </TouchableOpacity>
);

export default AddSerieCard;

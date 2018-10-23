import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    marginTop: 5,
    marginBottom: 5,
    elevation: 1,
  },
});

const FormRow = (props) => {
  const { children } = props;
  return (
    <View style={styles.container}>
      {
        children
      }
    </View>

  );
};


export default FormRow;

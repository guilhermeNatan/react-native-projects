import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  line: {
    flexDirection: 'row',
    paddingTop: 3,
    paddingBottom: 3,
    borderWidth: 1,
    borderColor: '#1e802f',
  },
  cell: {
    fontSize: 18,
    paddingLeft: 5,
  },
  label: {
    fontWeight: 'bold',
    flex: 1,
  },
  content: {
    flex: 3,
  },
  longLabel: {
    fontSize: 12,
  },
});

export const Line = ({ label = '', content = '' }) => (
  <View style={styles.line}>
    <Text style={[
      styles.cell,
      styles.label,
      label.length > 8 ? styles.longLabel : null,
    ]}
    >
      {label}
    </Text>
    <Text style={[styles.cell, styles.content]}>{content}</Text>
  </View>

);

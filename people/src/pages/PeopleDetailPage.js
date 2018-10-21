import React from 'react';
import {
  View, StyleSheet, Image,
} from 'react-native';
import { Line } from '../components/Line';

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  avatar: {
    aspectRatio: 1,
  },
  detailContainer: {
    backgroundColor: '#e2f9ff',
    marginTop: 20,
    elevation: 1,
  },
});


export default class PeopleDetailPage extends React.Component {
  teste = () => null

  render() {
    const { pessoa } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Image
          style={styles.avatar}
          source={{ uri: pessoa.picture.large }}
        />
        <View style={styles.detailContainer}>
          <Line label="Email:" content={pessoa.email} />
          <Line label="Cidade:" content={pessoa.location.city} />
          <Line label="Estado:" content={pessoa.location.state} />
          <Line label="Tel:" content={pessoa.phone} />
          <Line label="Cel:" content={pessoa.cell} />
          <Line label="Nacionalidade:" content={pessoa.nat} />

        </View>
      </View>
    );
  }
}

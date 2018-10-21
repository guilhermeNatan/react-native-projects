import React from 'react';
import {
  Text, View, ActivityIndicator, StyleSheet,
} from 'react-native';
import axios from 'axios';
// import { Header } from '../components/Header';
import { PeopleList } from '../components/PeopleList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  error: {
    color: 'red',
    alignSelf: 'center',
  },

});

export default class PeoplePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      peoples: [],
      loading: false,
      error: false,
    };
  }


  componentDidMount() {
    this.setState({ loading: true });
    axios.get('https://randomuser.me/api/?nat=br&results=25')
      .then((response) => {
        const { results } = response.data;
        this.setState({ peoples: results, loading: false });
      }).catch((error) => {
        this.setState({ loading: false, error: true });
      });
  }

  renderList = () => {
    const { peoples } = this.state;
    const textElements = peoples.map(pessoa => (
      <Text key={pessoa.name.first}>
        {pessoa.name.first}
      </Text>
    ));

    return textElements;
  }

renderPage = () => {
  const { peoples, loading, error } = this.state;
  const { navigate } = this.props.navigation;
  if (loading) return <ActivityIndicator size="large" color="#135f85" />;
  if (error) return <Text style={styles.error}>Ops... Algo deu errado</Text>;

  return (
    <PeopleList
      peoples={peoples}
      onPressItem={pageParams => navigate('PeopleDetail', pageParams)}
    />
  );
}

render() {
  return (
    <View style={styles.container}>
      {
        this.renderPage()
       }

    </View>
  );
}
}

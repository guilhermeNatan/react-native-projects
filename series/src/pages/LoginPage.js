import React from 'react';
import {
  View, Button, TextInput, Text, StyleSheet, ActivityIndicator,
} from 'react-native';

import firebase from 'firebase';
import { connect } from 'react-redux';
import FormRow from '../components/FormRow';
import { tryLogin } from '../actions';


const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  input: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
  },
});


class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: '',
      password: '',
      isLoading: false,
    };
  }

  componentDidMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyD7qfiVwQ0IK4_BvSpNFIuyMe8Nn_LFOsc',
      authDomain: 'series-adbf9.firebaseapp.com',
      databaseURL: 'https://series-adbf9.firebaseio.com',
      projectId: 'series-adbf9',
      storageBucket: 'series-adbf9.appspot.com',
      messagingSenderId: '292164404638',
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
  }

onChangeHandler = (field, value) => {
  this.setState({ [field]: value });
}


tryLogin = () => {
  const { mail: email, password } = this.state;
  this.setState({ isLoading: true, message: '' });
  this.props.tryLogin({ email, password })
    .then((user) => {
      if(user){
        // Toto aqui deve navegar para a pagina main
          return this.props.navigation.replace('Main');
      }
      this.setState({
        isLoading: false,
        message: ''
      })

    })
    .catch((error) => {
      this.setState({
        isLoading: false,
        message: this.getMessageByErroCode(error.code)
      });
    });
}

getMessageByErroCode = (error) => {
  switch (error) {
    case 'auth/wrong-password':
      return 'Senha incorreta!';
    case 'auth/user-not-found':
      return 'Usuário não encontrado';
    default:
      return 'Error desconhecido';
  }
}

renderMenssage = () => {
  const { message } = this.state;
  if (!message) return null;
  return (
    <View>
      <Text>{message}</Text>
    </View>
  );
}

renderButton() {
  if (this.state.isLoading) {
    return <ActivityIndicator />;
  }


  return (
    <Button
      title="Entrar"
      onPress={() => this.tryLogin()}
    />
  );
}

render() {
  return (
    <View style={styles.container}>
      <FormRow>
        <TextInput
          style={styles.input}
          placeholder="user@email.com"
          value={this.state.mail}
          onChangeText={value => this.onChangeHandler('mail', value)}
        />
      </FormRow>
      <FormRow>
        <TextInput
          style={styles.input}
          placeholder="*****"
          secureTextEntry
          value={this.state.password}
          onChangeText={value => this.onChangeHandler('password', value)}
        />
      </FormRow>
      {
        this.renderButton()
      }
      {
        this.renderMenssage()
      }

    </View>
  );
}
}

export default connect(null, { tryLogin })(LoginPage);

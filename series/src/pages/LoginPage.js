import React from 'react';
import {
  View, Button, TextInput, StyleSheet,
} from 'react-native';

import FormRow from '../components/FormRow';

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


export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: '',
      password: '',
    };
  }

onChangeHandler = (field, value) => {
  this.setState({ [field]: value });
}

tryLogin = () => {

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
      <Button
        title="Entrar"
        onPress={() => this.tryLogin()}
      />
    </View>
  );
}
}

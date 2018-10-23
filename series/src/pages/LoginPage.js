import React from 'react';
import {
  View, Text, TextInput, StyleSheet,
} from 'react-native';

import FormRow from '../components/FormRow';

const styles = StyleSheet.create({
  input: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
  },
});


export default class LoginPage extends React.Component {
  render() {
    return (
      <View>
        <FormRow>
          <TextInput
            style={styles.input}
            placeholder="user@email.com"
          />
        </FormRow>
        <FormRow>
          <TextInput
            style={styles.input}
            placeholder="*****"
            secureTextEntry
          />
        </FormRow>
      </View>
    );
  }
}

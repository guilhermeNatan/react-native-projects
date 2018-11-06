import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoForm  from './components/TodoForm';
import TodoList  from './components/TodoList';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import devToolsEnhacer from 'remote-redux-devtools';  // ferramenta usada para debugar a store


// cria a store que será usada por toda a aplicação
const store = createStore(rootReducer, devToolsEnhacer());

// Provider: é um componente que irá prover  os dados que estão na store
// para todos os componentes da aplicação, por isso que ele deve encampsular
// o componente mais externo (no caso  todo conteudo do TodoApp)

export default class TodoApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <TodoForm />
          <TodoList />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30
  },
});

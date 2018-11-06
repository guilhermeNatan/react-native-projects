import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import { toggleTodo, setEditingTodo }  from '../actions';

export const  TodoList = ({todos = [], dispatchToggleTodo, dispatchEditingTodo}) => (
  <View>
    {
      todos.map(todo => <TodoListItem
                          key={todo.id}
                          todo={todo}
                          onPressTodo={() => dispatchToggleTodo(todo.id)}
                          onLongPressTodo={() => dispatchEditingTodo(todo)}
                        />
         )
    }
  </View>
);


const styles = StyleSheet.create({
  formContainer: {
    flexDirection: 'row'
  },
  inputContainer: {
    flex: 4,
  },
  buttonContainer: {
    flex: 1,
  },
});

const mapStateToProps = state => {
  const { todos } = state ;
  return { todos };
}


export default connect(mapStateToProps,
    {
      dispatchToggleTodo: toggleTodo,
      dispatchEditingTodo: setEditingTodo
    }) (TodoList);

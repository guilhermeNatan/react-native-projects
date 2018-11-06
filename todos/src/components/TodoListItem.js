import React from 'react';
import {
  Text, View, StyleSheet, Image, TouchableOpacity,
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b9cbe7',
  },
  line: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
    alignItems: 'center',
    flexDirection: 'row',
  },
  lineText: {
    fontSize: 20,
    paddingLeft: 15,
    flex: 7,
  },
  lineThrough: {
      textDecorationLine: 'line-through'
  },
  avatar: {
    aspectRatio: 1,
    flex: 1,
    marginLeft: 15,
    borderRadius: 50,
  },
});


 const TodoListItem = ({todo, onPressTodo,onLongPressTodo}) => {
  return (
    <TouchableOpacity
      onPress={onPressTodo}
      onLongPress={onLongPressTodo}
    >
      <View style={styles.line}>
        <Text style={[styles.lineText, todo.done ?styles.lineThrough : null ]}>
          { todo.text }
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TodoListItem ;

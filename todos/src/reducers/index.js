import {combineReducers} from 'redux';
import todoListReducer from './todoListReducer';
import editingTodoReducer from './editingTodoReducer';

// combina todos os reducers da aplicação em um unico objeto
// isso evitar que tenhamos que criar 'na mão' um unico reducer cujo o state é
//  um objeto que representa todas as possibididade  de dados da aplicação irá precisar

const rootReducer = combineReducers({
  todos: todoListReducer,
  editingTodo: editingTodoReducer
})

export default rootReducer;

import { SET_FIELD, SERIE_SAVED_SUCCESS, SET_WHOLE_SERIE, RESET_FORM } from '../actions';

const initialState = {
  id: null,
  title: '',
  gender: 'Policial',
  rate: 0,
  img: '',
  description: ''
};

export default function (state = initialState , action) {
  switch (action.type) {
    case SET_FIELD:
        const newState = {... state};
        newState[action.field] = action.value;
        return newState;

    case RESET_FORM:
    case SERIE_SAVED_SUCCESS:
        return initialState;
    case SET_WHOLE_SERIE:
        return action.serie;
    default:
      return state;
  }
}

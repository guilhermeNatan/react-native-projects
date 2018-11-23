import { SET_SERIES} from '../actions';
/**
 * [description]
 * @param  {[type]} [state=null] o estado default é null pq caso a lista de series
 * esteja vazio será exbidio um loading, sendo null significa que ainda não foi
 * feita a chamada para o  firebase  vide mapStateToProps do SeriesPage o tratamento
 * para quando o estado é null 
 * @param  {[type]} action       [description]
 * @return {[type]}              [description]
 */
export default function (state = null, action) {
  switch (action.type) {
    case SET_SERIES:
      return action.series;
    default:
      return state
  }
}

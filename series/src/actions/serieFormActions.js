import firebase from 'firebase';

// substitiu todas as informações de uma serie na store .
export const SET_WHOLE_SERIE = 'SET_WHOLE_SERIE';
export const setWholeSerie = serie => ({
  type: SET_WHOLE_SERIE,
  serie,
})

export const SET_FIELD = 'SET_FIELD';
export const setField = (field, value) => {
  return {
    type: SET_FIELD,
    field,
    value
  }
}

export const SERIE_SAVED_SUCCESS = 'SERIE_SAVED';
export const serieSaved = () => {
  return {
    type: SERIE_SAVED_SUCCESS,
  }
}

export const RESET_FORM = 'RESET_FORM';
export const resetForm = () => {
  return {
    type: RESET_FORM,
  }
}

/**
 * await é semelhante ao then  das promisses
 * basicamente ele diz para a excução esperar o final de uma instrução
 * para poder afançar para próxima linha do código
 * await só pode ser usado dentro de funcções que são do tipo async
 * por insso o assync no inicio da função
 * @param  {[type]} serie [description]
 * @return {[type]}       [description]
 */
 export const saveSerie = serie => {
   const { currentUser } = firebase.auth();
   const db = firebase.database();
   return async dispacth => {
     if(serie.id){
       await db
       .ref(`/users/${currentUser.uid}/series/${serie.id}`)
       .set(serie);
     }
     else {
       await db
       .ref(`/users/${currentUser.uid}/series`)
       .push(serie);
     }
     dispacth(serieSaved());
   }
}

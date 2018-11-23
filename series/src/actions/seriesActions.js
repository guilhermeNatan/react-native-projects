import firebase from 'firebase';
import { Alert } from 'react-native';

export const SET_SERIES = 'SET_SERIES';
export const setSeries = series => ({
  type: SET_SERIES,
  series
})

export const watchSeries = () => {
    const { currentUser } = firebase.auth();

     return async dispacth => {
                  firebase
                    .database()
                    .ref(`/users/${currentUser.uid}/series`)
                    // on reativa sempre que um dado mudar no firebse a fução
                    // passada como parametro será executada
                    .on('value', snapshot => {
                          const series = snapshot.val();
                          const action = setSeries(series);
                          dispacth(action)
                    });
     }
}


export const deleteSerie =  serie => {

  return dispatch => {
      return new Promise((resolve, reject)=> {
        Alert.alert("Deletar", `Deseja deletar a serie ${ serie.title}`,
        [{
          text: 'Não',
          onPress: () => {
          return resolve(false); // parametro que irá idicar que o usuário optou por não deletar a serie
          },
          style: 'cancel', // IOS
        },
        {
          text: 'Sim',
          onPress: async () => {
            const { currentUser } = firebase.auth();
            try{
              await  firebase
                .database()
                .ref(`/users/${currentUser.uid}/series/${serie.id}`)
                .remove();
              resolve(true); // parametro que irá idicar que o usuário optou por  deletar a serie
            }catch(e){
              reject(e);
            }
          },
        }],
        { cancelable: false }
      )
      })
  }
}

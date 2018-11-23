import firebase from 'firebase';
import { Alert } from 'react-native';

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCES';
export const userLoginSucess = user => ({
  type: USER_LOGIN_SUCCESS,
  user,
});


export const USER_LOGOUT = 'USER_LOGOUT';
export const userLogout = () => ({
  type: USER_LOGOUT,
});

// Dispacth foi construido dessa forma (função que devolve uma função)
// pq estamos usando uma action  assyncrona e a api redux-thunk
// lida com actions assyncrons dessa forma .
export const tryLogin = ({ email, password }) => (dispacth) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      const action = userLoginSucess(user);
      dispacth(action);
      return user;
    })
  .catch((error) => {
    console.log('errorr', error)
    if (error.code === 'auth/user-not-found') {
      return new Promise((resolve, reject) => {
        Alert
          .alert('Usuário não encontrado',
            'Deseja criar uma cadastro com as informações inseridas',
            [{
              text: 'Não',
              onPress: () => {
              return resolve()
              },
              style: 'cancel', // IOS
            },
            {
              text: 'Sim',
              onPress: () => {
               firebase
                  .auth()
                  .createUserWithEmailAndPassword(email, password)
                  .then(resolve)
                  .catch(reject);
              },
            }],
            { cancelable: false });
      });

    }
    return Promise.reject(error)
  });
};

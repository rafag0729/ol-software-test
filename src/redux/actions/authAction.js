import { firebase, googleAuthProvider } from './../../firebase/firebase-config';
import { types } from '../types/types';

export const startLogingWithGoogle = () => {

    return (dispatch) => {

        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({user}) => {
                dispatch( login(user.uid, user.displayName) )
            })
    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName,
        logged: true
    }
})


export const startLogout = () => {

    return async( dispatch ) => {

        await firebase.auth().signOut();

        dispatch( logout() );
    }
}

const logout = () => ({
    type: types.logout
})
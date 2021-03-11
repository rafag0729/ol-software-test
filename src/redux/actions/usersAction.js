import { db } from "../../firebase/firebase-config"
import { types } from "../types/types";

export const startNewNote = (formValues) => {

    return async( dispatch, getState) => {

        const { uid } = getState().auth;

        const doc = await db.collection(`${uid}/records/users`).add(formValues);

        dispatch( createUser( doc.firestore.id, formValues ) )
    }

}

export const createUser = (id, user) => ({
    type: types.userNew,
    payload: {
        id,
        ...user
    }
})


export const updateUsersDom = ( list ) => ({
    type: types.usersLoad,
    payload: list
})


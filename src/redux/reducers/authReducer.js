import { types } from "../types/types";

/* 
    {
        uid: '21927498724389432934',
        name: 'Rafael'
    }
*/

const initialState = {
    logged: false
}

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                displayName: action.payload.displayName,
                logged: action.payload.logged
            }

        case types.logout :
            return { 
                logged: false
            }
    
        default:
            return state;
    }
}

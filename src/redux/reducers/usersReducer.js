/* 
    {
        newUser: null,
        users: []
    }
*/

import { types } from "../types/types";

const initialState = {}

export const usersReducer = ( state = initialState, action ) => {
    
    switch (action.type) {

        case types.userNew:
            return {
                ...state,
                newUser: {
                    ...action.payload
                }
            }

        case types.usersLoad:
            return {
                ...state,
                users: [
                    ...action.payload
                ]
            }

        default:
            return state;
    }

}

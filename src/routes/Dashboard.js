import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { firebase } from './../firebase/firebase-config';

import { login } from './../redux/actions/authAction';


import { Login } from './../components/Login';
import { Users } from './../components/Users';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { loadUsers } from '../helpers/loadUsers';
import { updateUsersDom } from '../redux/actions/usersAction';

export const Dashboard = () => {

    const newUser = useSelector(state => state.newUser)

    const {logged} = useSelector(state => state.auth); 
    const dispatch = useDispatch()


    useEffect(() => {

        firebase.auth().onAuthStateChanged( user => {
            
            if( user?.uid){

                dispatch( login(user.uid, user.displayName));
                
                const usersList = loadUsers( user.uid );
                
                usersList.then((list) => {
                    
                     dispatch( updateUsersDom( list ) )
                })
               
            }
        })

    }, [dispatch, newUser])

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        isAuthenticated={ logged }
                        exact 
                        path="/" 
                        component={ Login } />
                    
                    <PrivateRoute 
                        isAuthenticated={ logged }
                        exact 
                        path="/users" 
                        component={ Users } />
                    
                    {/* <Route path="/" component={ Login }/> */}
                </Switch>
            </div>
        </Router>
    )
}
;
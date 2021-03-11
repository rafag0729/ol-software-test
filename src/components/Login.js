import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm';

import { startLogingWithGoogle } from '../redux/actions/authAction';

export const Login = () => {

    const dispatch = useDispatch();

    const [ formValues, handleInputChange ] = useForm({
        user: '',
        password: ''
    })

    const { user, password } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(startLogingWithGoogle());
    }

    return (
        <>
            <div className="login_bg">
            
            </div>
            <form
                className="login_form"
                onSubmit={ handleSubmit }
            >
                <h1>Inicio de sesíon</h1>

                <div>
                    <input 
                        type="text" 
                        name="user" 
                        autoComplete="off"
                        placeholder="Usuario"
                        onChange={ handleInputChange }
                        value={ user }
                        /> 
                    
                    <i className="fas fa-user-alt"></i>
                </div>

                <div>
                    <input 
                        type="password" 
                        name="password"
                        autoComplete="off" 
                        placeholder="Contraseña"
                        onChange={ handleInputChange }
                        value={ password }
                        /> 

                    <i className="fas fa-lock"></i>
                </div>

                <button type="submit"> Iniciar sesión   </button>
            </form>
        </>
        
    )
}

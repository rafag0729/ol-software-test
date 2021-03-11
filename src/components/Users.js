import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../redux/actions/authAction';
import { FilterSearch } from './FilterSearch';
import { MenuBar } from './MenuBar';
import { NewUser } from './NewUser';

export const Users = () => {
    
    const dispatch = useDispatch()
    const { users } = useSelector(state => state.users)
    const {displayName} = useSelector(state => state.auth);

    const handleClick = () => {

        const newUserPopUp = document.querySelector('.newUser_bg');

        newUserPopUp.classList.toggle('hidden');
    }

    const handleLogout = () => {
        
        dispatch(startLogout());
    }

    return (
        <>
            <div className="users_page">
                <MenuBar/>
                <div className="users_content">
                    <header>
                        <div>
                            <i className="fas fa-bars"></i> 
                            <p>Pruebas Front-end</p>
                        </div>

                        <div className="user_logged">
                            <i className="far fa-user-circle"></i><p> { displayName } </p>

                            <i 
                                onClick={ handleLogout }
                                className="fas fa-sign-out-alt"
                                >
                            </i>
                        </div>
                    </header>

                    <div className="users_filter">
                        <section className="all_users">

                            <div className="users_head">
                                <h2><i className="fas fa-users"></i>Usuarios existentes</h2>

                                <button
                                    onClick={ handleClick } 
                                    type="button">
                                        Crear
                                </button>
                            </div>

                            <div className="users_list">

                                <table>
                                    <thead>
                                        <tr>
                                            <th>Nombres</th>
                                            <th>Apellidos</th>
                                            <th>Identificación</th>
                                            <th>Rol asociado</th>
                                            <th>Estado</th>
                                            <th>Teléfono</th>
                                            <th>Correo Electrónico</th>
                                            <th>Acción</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        users &&
                                            users.map( ({id, rol, lastName, status, name, email, tel}, i) => (
                                                    <tr
                                                        key={i}>
                                                        <td> {name} </td>
                                                        <td> {lastName} </td>
                                                        <td> {id} </td>
                                                        <td> {rol} </td>
                                                        <td> {status} </td>
                                                        <td> {tel} </td>
                                                        <td> {email} </td>
                                                        <td> 
                                                            <i className="fas fa-pen"></i> <i className="fas fa-trash"></i>
                                                        </td>
                                                    </tr>
                                            ))
                                    }
                                    </tbody>
                                    
                                </table>

                            </div>

                        </section>
                        <FilterSearch/>
                        <NewUser/>
                    </div>
                </div>
            </div>
        </>
    )
}

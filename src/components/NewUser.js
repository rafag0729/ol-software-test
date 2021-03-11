import React from 'react'
import { useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm'
import { startNewNote } from '../redux/actions/usersAction';

export const NewUser = () => {

    const dispatch = useDispatch()

    const [ formValues, handleInputChange, handleReset] = useForm({
        name: '',
        lastName: '',
        id: '',
        rol: '',
        status: '',
        password: '',
        tel: '',
        email: '',
    })

    const { name, lastName, id, rol, status, password, tel, email} = formValues;

    const handleClick = () => {

        const newUserPopUp = document.querySelector('.newUser_bg');
        newUserPopUp.classList.toggle('hidden');
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        dispatch( startNewNote( formValues ) )
        handleReset();
    }


    return (
        <div className="newUser_bg hidden">
            <form
                onSubmit={ handleSubmit }
                className="setUser_form"
            >
            
            <div className="header_close">
                <h2>Agregar nuevo usuario</h2>

                <i 
                    onClick={ handleClick }
                    className="fas fa-times-circle"></i>    
            </div>
            

            <div className="newUser_inputs">
                <div>
                    <label htmlFor="name"> Nombres </label>
                    <input 
                        type="text" 
                        name="name"
                        autoComplete="off"
                        required
                        onChange={ handleInputChange }
                        value={ name }
                        />

                    <label htmlFor="id">Identificación C.C</label>
                    <input 
                        type="number" 
                        name="id"
                        autoComplete="off"
                        required
                        onChange={ handleInputChange }
                        value={ id }
                        />

                    <label htmlFor="state">Estado</label>
                    <select 
                        name="status"
                        required
                        onChange={ handleInputChange }
                        value={ status }
                        >
                        <option value="">Selecciona un estado</option>
                        <option value="activo">Activo</option>
                        <option value="inactivo">Inactivo</option>
                    </select>

                    <label htmlFor="cellphone">Teléfono</label>
                    <input 
                        type="tel" 
                        name="tel"
                        autoComplete="off"
                        required
                        onChange={ handleInputChange }
                        value={ tel }
                        />
                </div>
                
                <div>
                    <label htmlFor="lastName">Apellidos</label>
                    <input 
                        type="text" 
                        name="lastName"
                        autoComplete="off"
                        required
                        onChange={ handleInputChange }
                        value={ lastName }
                        />

                    <label htmlFor="rol">Rol asociado</label>
                    <select 
                        name="rol"
                        required
                        onChange={ handleInputChange }
                        value={ rol }
                        >
                        <option value="">Selecciona un rol</option>
                        <option value="administrador">Administrador</option>
                        <option value="conductor">Conductor</option>
                        <option value="recolector">Recolector</option>
                        <option value="coordinador">Coordinador</option>
                        <option value="digitador CG-UNO">Digitador CG-UNO</option>
                    </select>

                    <label htmlFor="password">Contraseña</label>
                    <input 
                        type="password" 
                        name="password"
                        autoComplete="off"
                        required
                        onChange={ handleInputChange }
                        value={ password }
                        />

                    <label htmlFor="email">Correo electrónico</label>
                    <input 
                        type="email" 
                        name="email"
                        autoComplete="off"
                        required
                        onChange={ handleInputChange }
                        value={ email }
                        />
                </div>
            </div>

            <div className="btns_setUser">
                <button type="submit">Aceptar</button>
                <button type="button">Cancelar</button>
            </div>
        </form>
    </div>
    )
}

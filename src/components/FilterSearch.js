import React from 'react'

export const FilterSearch = () => {
    return (
        <div className="filter">
            <h3> <i className="fas fa-user-plus"></i>Filtrar busqueda</h3>

            <label>Nombres</label>
            <input
                autoComplete="off"
                type="text" 
                name="name"/>

            <label>Apellidos</label>
            <input 
                autoComplete="off"
                type="text" 
                name="lastName"/>

            <label>Identificación C.C</label>
            <input 
                autoComplete="off"
                type="number" 
                name="id"/>

            <label>Rol asociado</label>
            <select 
                autoComplete="off"
                name="rol">
                <option>Selecciona un rol</option>
                <option>Administrador</option>
                <option>Conductor</option>
                <option>Recolector</option>
                <option>Coordinador</option>
                <option>Digitador CG-UNO</option>
            </select>

            <label>Estado</label>
            <select 
                autoComplete="off"
                name="status">
                <option>Selecciona un estado</option>
                <option>Activo</option>
                <option>Inactive</option>
            </select>

            <label>Contraseña</label>
            <input 
                autoComplete="off"
                type="password" 
                name="password"/>

            <label>Teléfono</label>
            <input 
                autoComplete="off"
                type="tel" 
                name="cellphone"/>

            <label>Correo electrónico</label>
            <input 
                autoComplete="off"
                type="email" 
                name="email"/>

            <div className="btns">
                <button type="button" className="btn_filter">Filtrar</button>
                <button type="reset" className="btn_reset">Limpiar</button>        
            </div>
        </div>
    )
}

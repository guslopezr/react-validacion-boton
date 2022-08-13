import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';

const Formulario = (props) => {

    const [nombre, setNombre] = useState('');
    const [password, setPassword] = useState('');
    const botonOk = <Button className="btn btn-success">¡Has ingresado la clave correcta! </Button>;

    const validarDatos = (e) => {
        e.preventDefault()
        //Validación
        if (nombre === '' || password === '') {
            alert('Todos los campos son obligatorios')
            return
        }
    }




    return (

        <form>
            <div className='form-group' >
                <label>Ingresa tu nombre</label>
                <br />
                <input type="text" className="form-control"
                    onChange={(e) => setNombre(e.target.value)}
                    value={props.nombre} />

            </div>
            <br />
            <br />

            <div className='form-group' >
                <label>Ingresa clave secreta para activar botón</label>
                <br />

                <input type="number" className="form-control"
                    onChange={(e) => setPassword(e.target.value)}
                    value={props.password} />
            </div>

            <br />
            <br />
            <div className='resultado' >
                <h3 className='resultadotitle'  >Resultado del ejercicio</h3>
                <div className='resultadodisplay'>

                    {nombre} {password == "252525" && botonOk}

                </div>
            </div>
            <br />


        </form>


    )
}

export default Formulario 
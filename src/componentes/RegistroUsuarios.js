import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { auth } from '../firebase/firebaseConfig';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router';

// Componentes
import { Header, Titulo, ContenedorHeader } from './../elementos/Header';
import {Formulario, Input, ContenedorBoton} from './../elementos/ElementosDeFormulario';
import Boton from '../elementos/Boton';
import Alerta from '../elementos/Alerta';

// Imagenes
import {ReactComponent as SvgLogin} from './../img/registro.svg';

const Svg = styled(SvgLogin)`
    width: 100%;
    max-height: 6.25rem; /* 100px */
    margin-bottom: 1.25rem; /* 20px */
`;

const RegistroUsuarios = () => {
    const navigate = useNavigate();
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [estadoAlerta, setEstadoAlerta] = useState(false);
    const [alerta, setAlerta] = useState({});

    const handleChange = (e) => {
        switch(e.target.name){
            case 'email':
                setCorreo(e.target.value);
                break;
            case 'password':
                setPassword(e.target.value);
                break;
            case 'password2':
                setPassword2(e.target.value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setEstadoAlerta(false);
        setAlerta({});

        // Valdación del formulario
        const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
        if( !expresionRegular.test(correo) ) {
            setEstadoAlerta(true);
            setAlerta({
                tipo: 'error',
                mensaje: 'Por favor ingresa un correo valido'
            });
            return;
        }

        if( correo === '' || password === '' || password2 ==='' ) {
            setEstadoAlerta(true);
            setAlerta({
                tipo: 'error',
                mensaje: 'Por favor rellena todos los datos'
            });
            return;
        }

        if( password !== password2 ) {
            setEstadoAlerta(true);
            setAlerta({
                tipo: 'error',
                mensaje: 'Las Contraseñas no son iguales'
            });
            return; 
        }
        
        // Registrar usuario en firebase
        try {
            await createUserWithEmailAndPassword(auth, correo, password);
            navigate('/');
        }
        catch (error) {
            let mensaje;
            switch(error.code) {
                case 'auth/invalid-password':
                    mensaje = 'La contraseña tiene que ser de al menos 6 caracteres.';
                    break;
                case 'auth/weak-password':
                    mensaje = 'La contraseña tiene que ser de al menos 6 caracteres.';
                    break;
                case 'auth/email-already-in-use':
                    mensaje = 'Ya existe una cuenta con el correo electrónico proporcionado.';
                    break;
                case 'auth/invalid-email':
                    mensaje = 'El correo electrónico no es válido.';
                    break;
                default:
                    mensaje = 'Hubo un error al intentar crear la cuenta.';
                    break;
            }
            setEstadoAlerta(true);
            setAlerta({
                tipo: 'error',
                mensaje: mensaje
            });
        }
    }

    return (
        <>

            <Helmet>
                <title>Crear Cuenta</title>
            </Helmet>

            <Header>
                <ContenedorHeader>
                    <Titulo>Crear Cuenta</Titulo>
                    <div>
                        <Boton to="/iniciar-sesion">Iniciar Sesión</Boton>
                    </div>
                </ContenedorHeader>
            </Header>

            <Formulario onSubmit={handleSubmit}>
                <Svg/>
                <Input 
                    type="email" 
                    name="email" 
                    placeholder="Correo Electrónico" 
                    value={correo}
                    onChange={handleChange}
                />
                <Input 
                    type="password" 
                    name="password" 
                    placeholder="Contraseña" 
                    value={password}
                    onChange={handleChange}
                />
                <Input 
                    type="password" 
                    name="password2" 
                    placeholder="Repetir Contraseña" 
                    value={password2}
                    onChange={handleChange}
                />
                <ContenedorBoton>
                    <Boton as="button" type="submit" primario>Crear Cuenta</Boton>
                </ContenedorBoton>
            </Formulario>

            <Alerta
                tipo={alerta.tipo}
                mensaje={alerta.mensaje}
                estadoAlerta={estadoAlerta}
                cambiarEstadoAlerta={setEstadoAlerta}
            />
        </>
    );
}
 
export default RegistroUsuarios;
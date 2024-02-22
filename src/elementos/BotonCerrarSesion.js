import React from 'react';
import { ReactComponent as IconoCerrarSesion } from '../img/log-out.svg';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebaseConfig';

// Elementos
import Boton from './Boton';


const BotonCerrarSesion = () => {
    const navigate = useNavigate();

    const cerrarSesion = async () => {
        try{
            await auth.signOut();
            navigate('/iniciar-sesion');
        }
        catch(error) {
            console.log(error);
        }
    }

    return (
        <Boton iconoGrande as="button" onClick={cerrarSesion}>
            <IconoCerrarSesion />
        </Boton>
    );
}
 
export default BotonCerrarSesion;

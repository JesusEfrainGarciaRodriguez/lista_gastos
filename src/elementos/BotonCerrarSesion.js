import React from 'react';
import { ReactComponent as IconoCerrarSesion } from '../img/log-out.svg';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase/firebaseConfig';

// Elementos
import Boton from './Boton';


const BotonCerrarSesion = () => {
    const history = useHistory();

    const cerrarSesion = async () => {
        try{
            await auth.signOut();
            history.push('/iniciar-sesion');
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

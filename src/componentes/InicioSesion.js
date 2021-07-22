import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

// Componenetes
import { Header, Titulo, ContenedorHeader } from './../elementos/Header';
import {Formulario, Input, ContenedorBoton} from './../elementos/ElementosDeFormulario';
import Boton from '../elementos/Boton';

// Imagenes
import {ReactComponent as SvgLogin} from './../img/login.svg';

const Svg = styled(SvgLogin)`
    width: 100%;
    max-height: 10rem; /* 160px */
    margin-bottom: 1.25rem; /* 20px */
`;

const InicioSesion = () => {
    return (
        <>
            
            <Helmet>
                <title>Iniciar de Sesión</title>
            </Helmet>

            <Header>
                <ContenedorHeader>
                    <Titulo>Iniciar de Sesión</Titulo>
                    <div>
                        <Boton to="crear-cuenta">Crear Cuenta</Boton>
                    </div>
                </ContenedorHeader>
            </Header>

            <Formulario>
                <Svg/>
                <Input 
                    type="email" 
                    name="email" 
                    placeholder="Correo Electrónico" 
                />
                <Input 
                    type="password" 
                    name="password" 
                    placeholder="Contraseña" 
                />
                <ContenedorBoton>
                    <Boton as="button" type="submit" primario>Iniciar Sesión</Boton>
                </ContenedorBoton>
            </Formulario>

        </>
    );
}
 
export default InicioSesion;
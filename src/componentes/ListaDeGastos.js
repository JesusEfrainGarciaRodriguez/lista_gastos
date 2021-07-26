import React from 'react';
import { Helmet } from 'react-helmet';

// Hook
import { useAuth } from '../contextos/AuthContext';

// Elementos
import { Header, Titulo } from '../elementos/Header';
import BtnRegresar from '../elementos/BtnRegresar';

const ListaDeGastos = () => {
    const { usuario } = useAuth();
    console.log(usuario);

    return (
        <>
            <Helmet>
                <title>Lista de Gastos</title>
            </Helmet>

            <Header>
                <BtnRegresar />
                <Titulo>Lista de Gastos</Titulo>
            </Header>
        </>
    );
}
 
export default ListaDeGastos;
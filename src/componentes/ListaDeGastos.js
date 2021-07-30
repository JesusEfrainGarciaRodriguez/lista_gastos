import React from 'react';
import { Helmet } from 'react-helmet';

// Hook
import { useAuth } from '../contextos/AuthContext';
import useObtenerGastos from '../hooks/useObtenerGastos';

// Componenetes
import BarraTotalGastado from './BarraTotalGastado';

// Elementos
import { Header, Titulo } from '../elementos/Header';
import BtnRegresar from '../elementos/BtnRegresar';

const ListaDeGastos = () => {
    const { usuario } = useAuth();
    console.log(usuario);

    const gastos = useObtenerGastos();
    console.log(gastos);

    return (
        <>
            <Helmet>
                <title>Lista de Gastos</title>
            </Helmet>

            <Header>
                <BtnRegresar />
                <Titulo>Lista de Gastos</Titulo>
            </Header>

            <BarraTotalGastado />
        </>
    );
}
 
export default ListaDeGastos;
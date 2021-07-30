import React from 'react';
import { Helmet } from 'react-helmet';

// Componentes
import BarraTotalGastado from './BarraTotalGastado';

// Elementos
import { Header, Titulo } from '../elementos/Header';
import BtnRegresar from '../elementos/BtnRegresar';

const GastosPorCategoria = () => {
    return (
        <>
            <Helmet>
                <title>Gastos por Categoría</title>
            </Helmet>

            <Header>
                <BtnRegresar/>
                <Titulo>Gastos por Categoría</Titulo>
            </Header>

            <BarraTotalGastado />
        </>
    );
}
 
export default GastosPorCategoria;
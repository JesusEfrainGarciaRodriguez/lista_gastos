import React from 'react';
import { Helmet } from 'react-helmet';

// Componentes
import BarraTotalGastado from './BarraTotalGastado';

// Elementos
import { Header, Titulo } from '../elementos/Header';
import BtnRegresar from '../elementos/BtnRegresar';
import { ListaDeCategorias, ElementoListaCategorias, Categoria, Valor } from '../elementos/ElementosDeLista';
import IconoCategoria from '../elementos/IconoCategoria';

// Hooks
import useObtenerGastosDelMesPorCategoria from '../hooks/useObtenerGastosDelMesPorCategoria';

// Funcion
import convertirAMoneda from '../funciones/convertirAMoneda';

const GastosPorCategoria = () => {
    const gastosPorCategoria = useObtenerGastosDelMesPorCategoria();

    return (
        <>
            <Helmet>
                <title>Gastos por Categoría</title>
            </Helmet>

            <Header>
                <BtnRegresar/>
                <Titulo>Gastos por Categoría</Titulo>
            </Header>

            <ListaDeCategorias>
                { gastosPorCategoria.map((elemento, index) => {
                    return (
                        <ElementoListaCategorias key={index}>
                            <Categoria>
                                <IconoCategoria id={elemento.categoria}/>
                                {elemento.categoria}
                            </Categoria>
                            <Valor>{convertirAMoneda(elemento.cantidad)}</Valor>
                        </ElementoListaCategorias>
                    );
                })}
            </ListaDeCategorias>

            <BarraTotalGastado />
        </>
    );
}
 
export default GastosPorCategoria;
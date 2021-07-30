import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

// Hook
import useObtenerGastos from '../hooks/useObtenerGastos';

// Componenetes
import BarraTotalGastado from './BarraTotalGastado';

// Elementos
import { Header, Titulo } from '../elementos/Header';
import BtnRegresar from '../elementos/BtnRegresar';
import IconoCategoria from '../elementos/IconoCategoria';
import { Lista,
    ElementoLista,
    ListaDeCategorias,
    ElementoListaCategorias,
    Categoria,
    Descripcion,
    Valor,
    Fecha,
    ContenedorBotones,
    BotonAccion,
    BotonCargarMas,
    ContenedorBotonCentral,
    ContenedorSubtitulo,
    Subtitulo } from '../elementos/ElementosDeLista';
import Boton from '../elementos/Boton';

// Funciones
import convertirAMoneda from '../funciones/convertirAMoneda';

// Img
import { ReactComponent as IconoEditar } from '../img/editar.svg';
import { ReactComponent as IconoBorrar } from '../img/borrar.svg';

const ListaDeGastos = () => {
    const gastos = useObtenerGastos();

    return (
        <>
            <Helmet>
                <title>Lista de Gastos</title>
            </Helmet>

            <Header>
                <BtnRegresar />
                <Titulo>Lista de Gastos</Titulo>
            </Header>

            <Lista>
                {gastos.map((gasto) => {
                    return (
                        <ElementoLista key={gasto.id}>
                            <Categoria>
                                <IconoCategoria id={gasto.categoria}/>
                                {gasto.categoria}
                            </Categoria>

                            <Descripcion>
                                {gasto.descripcion}
                            </Descripcion>

                            <Valor>
                                {convertirAMoneda(gasto.cantidad)}
                            </Valor>

                            <ContenedorBotones>
                                <BotonAccion as={Link} to={`/editar/${gasto.id}`}>
                                    <IconoEditar />
                                </BotonAccion>
                                <BotonAccion >
                                    <IconoBorrar />
                                </BotonAccion>
                            </ContenedorBotones>
                        </ElementoLista>
                    );
                })}

                <ContenedorBotonCentral>
                    <BotonCargarMas>Cargar Más</BotonCargarMas>
                </ContenedorBotonCentral>

                {gastos.length === 0 && 
                    <ContenedorSubtitulo>
                        <Subtitulo>No hay gastos por mostrar</Subtitulo>
                        <Boton as={Link} to="/">Agregar Gasto</Boton>
                    </ContenedorSubtitulo>
                }
            </Lista>

            <BarraTotalGastado />
        </>
    );
}
 
export default ListaDeGastos;
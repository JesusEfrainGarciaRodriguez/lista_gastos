import React from 'react';
import { Helmet } from 'react-helmet';

// Componenetes
import FormularioGasto from './componentes/FormularioGasto';

// Elementos
import { Header, Titulo, ContenedorHeader, ContenedorBotones } from './elementos/Header';
import Boton from './elementos/Boton';
import BotonCerrarSesion from './elementos/BotonCerrarSesion';

const App = () => {
  return (
    <>
      <Helmet>
        <title>Agregar Gasto</title>
      </Helmet>

      <Header>
        <ContenedorHeader>
          <Titulo>Agregar Gastos</Titulo>
          <ContenedorBotones>
            <Boton to="/categorias">Categorías</Boton>
            <Boton to="/lista">Lista de Gastos</Boton>
            <BotonCerrarSesion />
          </ContenedorBotones>
        </ContenedorHeader>
      </Header>

      <FormularioGasto />
    </>
  );
}
 
export default App;

import React from 'react';
import { Helmet } from 'react-helmet';

// Elementos
import { Header, Titulo, ContenedorHeader, ContenedorBotones } from './elementos/Header';
import Boton from './elementos/Boton';

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
            <Boton to="/">X</Boton>
          </ContenedorBotones>
        </ContenedorHeader>
      </Header>

    </>
  );
}
 
export default App;

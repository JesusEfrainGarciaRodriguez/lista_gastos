import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Librerias
import WebFont from 'webfontloader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Helmet} from "react-helmet";

// Elementos
import Contenedor from './elementos/Contenedor';
import Fondo from './elementos/Fondo';

// Componentes
import EditarGasto from './componentes/EditarGasto';
import GastosPorCategoria from './componentes/GastosPorCategoria';
import InicioSesion from './componentes/InicioSesion';
import ListaDeGastos from './componentes/ListaDeGastos';
import RegistroUsuarios from './componentes/RegistroUsuarios';

// Img
import favicon from './img/logo.png';

WebFont.load({
  google: {
    // Work+Sans:wght@400;500;700
    families: ['Work Sans:400,500,700', 'sans-serif']
  }
});

const Index = () => {
  return (
    <>
      <Helmet>
        <link rel="shortcut icon" href={favicon} type="image/x-icon"/>
      </Helmet>

      <BrowserRouter>
        <Contenedor>
          <Switch>
            <Route path="/iniciar-sesion" component={InicioSesion}/>
            <Route path="/crear-cuenta" component={RegistroUsuarios}/>
            <Route path="/categorias" component={GastosPorCategoria}/>
            <Route path="/lista" component={ListaDeGastos}/>
            <Route path="/editar/:id" component={EditarGasto}/>
            <Route path="/" component={App}/>
          </Switch>
        </Contenedor>
      </BrowserRouter>

      <Fondo/>
    </>
  );
}

ReactDOM.render(<Index/>,document.getElementById('root'));

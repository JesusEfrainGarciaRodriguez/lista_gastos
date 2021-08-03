import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Librerias
import WebFont from 'webfontloader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Helmet} from "react-helmet";

// Contextos
import { AuthProvider } from './contextos/AuthContext';
import { TotalGastadoProvider } from './contextos/TotalGastadoEnElMesContext';

// Elementos
import Contenedor from './elementos/Contenedor';

// Componentes
import EditarGasto from './componentes/EditarGasto';
import GastosPorCategoria from './componentes/GastosPorCategoria';
import InicioSesion from './componentes/InicioSesion';
import ListaDeGastos from './componentes/ListaDeGastos';
import RegistroUsuarios from './componentes/RegistroUsuarios';
import RutaPrivada from './componentes/RutaPrivada';

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

      <AuthProvider>
        <TotalGastadoProvider>
          <BrowserRouter>
            <Contenedor>
              <Switch>
                <Route path="/iniciar-sesion" component={InicioSesion}/>
                <Route path="/crear-cuenta" component={RegistroUsuarios}/>
                <RutaPrivada path="/categorias"> <GastosPorCategoria /></RutaPrivada>
                <RutaPrivada path="/lista"> <ListaDeGastos /> </RutaPrivada>
                <RutaPrivada path="/editar/:id"> <EditarGasto /> </RutaPrivada>
                <RutaPrivada path="/"> <App /> </RutaPrivada>
              </Switch>
            </Contenedor>
          </BrowserRouter>
        </TotalGastadoProvider>
      </AuthProvider>
      
    </>
  );
}

ReactDOM.render(<Index/>,document.getElementById('root'));

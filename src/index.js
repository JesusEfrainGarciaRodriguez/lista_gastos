import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Elementos
import Contenedor from './elementos/Contenedor';

// Componentes
import EditarGasto from './componentes/EditarGasto';
import GastosPorCategoria from './componentes/GastosPorCategoria';
import InicioSesion from './componentes/InicioSesion';
import ListaDeGastos from './componentes/ListaDeGastos';
import RegistroUsuarios from './componentes/RegistroUsuarios';

WebFont.load({
  google: {
    // Work+Sans:wght@400;500;700
    families: ['Work Sans:400,500,700', 'sans-serif']
  }
});

const Index = () => {
  return (
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
  );
}

ReactDOM.render(<Index/>,document.getElementById('root'));

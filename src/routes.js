import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Buscar from './pages/Buscar';
import Favoritos from './pages/Favoritos';
import Home from './pages/Home';
import Resultado from './pages/Resultado';


const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} exact path='/' />
            <Route component={Buscar} exact path='/buscar' />
            <Route component={Favoritos} exact path='/favoritos' />
            <Route component={Resultado} exact path='/resultado' />
        </BrowserRouter>
    )
}

export default Routes;
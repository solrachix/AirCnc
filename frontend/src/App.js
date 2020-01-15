import React from 'react';

import './App.css';
import logo from './assets/logo.png';

import Rotas from './routers';

function App() {

    return (
      <div className="container">

        <img src = {logo} alt = ""/>

        <div className ="content">
          <Rotas></Rotas>
        </div>
        
      </div>
    );
}

export default App;

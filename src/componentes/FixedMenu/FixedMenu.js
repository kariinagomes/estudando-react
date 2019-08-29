import React from 'react';
import './FixedMenu.css'
import logo from '../../imgs/logo-sciensa-pb2.png';

export default () => (
    <div class="fixed-menu">
        <div class="logo-content">
            <img src={logo} alt="Logo da Sciensa" />
        </div>  
        <div class="menu-content">
            <button>Adicionar filme</button>
        </div>
    </div>
)

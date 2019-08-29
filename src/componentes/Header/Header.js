import React from 'react';
import './Header.css'
import logo from '../../imgs/logo-sciensa-pb2.png';

export default () => (
    <div class="header">
        <div class="header-logo">
            <img class="logo-content" src={logo} alt="Logo da Sciensa"/>
        </div>
        <div class="header-content">
            <button>Adicionar filme</button>
        </div>
    </div>
)

// const Header = () => { 
//     return (
//         <div>
//             <p>blablalbalala</p>
//         </div>
//     )
// }

// export default Header;
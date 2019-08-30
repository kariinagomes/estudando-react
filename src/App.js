import React from 'react';
import logo from './logo.svg';

import FixedMenu from './componentes/FixedMenu/FixedMenu';
import Header from './componentes/Header/Header.js';
import ImageList from './componentes/ImageList/ImageList.js';
import ImageItem from './componentes/ImageItem/ImageItem.js';

import './App.css';

function App() {
  
  const data = [ "Teste1", "Teste2" ];

  return (
    <div>
      <FixedMenu />
      <Header />
      <ImageList />
      {/* <ImageList>
        <ImageItem />
      </ImageList> */}
      
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';

import Header from './componentes/Header/Header.js';
import ImageList from './componentes/ImageList/ImageList.js';

import './App.css';
import FixedMenu from './componentes/FixedMenu/FixedMenu';

function App() {
  
  const data = [ "Teste1", "Teste2" ];

  return (
    <div>
      <FixedMenu />
      <Header />
      <ImageList />
      {/* <ImageList data={data} />  */}
    </div>

    // <div className="App">
    //   <Header />

    //   <ImageList data={data} />
    // </div>
  );
}

export default App;

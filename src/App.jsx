import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import Main from './components/Main';

function App() {

  return (
    <div id="app">
      <BrowserRouter>  
        <Navigation/>
        <Main/>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App

import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import './styles/App.css'
import Main from './components/Main';

function App() {

  return (
    <BrowserRouter>  
      <Navigation/>
      <Main/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App

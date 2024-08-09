import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Stores from './Stores'
import Parks from './Parks'
import Account from './Account'
import SignIn from './SignIn'
import PasswordForgetPage from './PasswordForget'
import SignUpPage from "./SignUp"
import ParkInfo from './ParkInfo'
import StoreInfo from './StoreInfo'
import Privacy from './Privacy'


export default function Main() {
  return (
    <div id='main'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/stores' element={<Stores/>}/>
        <Route path='/parks' element={<Parks/>} />
        <Route path ='/account' element={<Account/>}/>
        <Route path='/signin' element={<SignIn/>} />
        <Route path='passwordforget' element={<PasswordForgetPage/>} />
        <Route path='/signup' element={<SignUpPage/>} />
        <Route path='/parkinfo' element={<ParkInfo/>} />
        <Route path='/storeinfo' element={<StoreInfo/>} />
        <Route path='/privacy' element={<Privacy/>} />
      </Routes>
      
    </div>
  )
}

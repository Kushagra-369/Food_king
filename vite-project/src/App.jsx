import React from 'react'
import Navbar from './components/Navbar'
import Pizza from './components/Pizza'
import Onichepizza from './components/Onichepizza'
import Onifinal from './components/Onifinal'
import Onipizza from './components/Onipizza'
import Onipizza2 from './components/Onipizza2'
import Onisweetchepizza from './components/Onisweetchepizza'
import Onisweetfinalpizza from './components/Onisweetfinal'
import Onisweetpizza from './components/Onisweetpizza'
import Base from './components/Base'
import Base2 from './components/Base2'
import Base3 from './components/Base3'
import Base4 from './components/Base4'
import Chepizza from './components/Chepizza'
import Sweetpizza from './components/Sweetpizza'
import Sweetpizzafinal from './components/Sweetpizzafinal'
import Sweetchepizza from './components/Sweetchepizza'
import Burger from './components/Burger'
import Buns from './components/Buns'
import Buns2 from './components/Buns2'
import Buns3 from './components/Buns3'
import Buns4 from './components/Buns4'
import Onibuns from './components/Onibuns'
import Tombuns from './components/Tombuns'
import Tomchebuns from './components/Tomchebuns'
import Tombunsfinal from './components/Tombunsfinal'
import Onibunsfinal from './components/Onibunsfinal'
import Onibuns2 from './components/Onibuns2'
import Onitombuns from './components/Onitombuns'
import Onitomchebuns from './components/Onitomchebuns'
import Onitombunsfinal from './components/Onitombunsfinal'
import Onichebuns from './components/Onichebuns'
import Chebuns from './components/Chebuns'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Pizza/>

        <Routes>

        <Route path='/' element={<Base/>}/>
        <Route path='/base2' element={<Base2/>}/>
        <Route path='/base4' element={<Base4/>}/>
        <Route path='/onipizza' element={<Onipizza/>}/>
        <Route path='/onipizza2' element={<Onipizza2/>}/>
        <Route path='/onisweetpizza' element={<Onisweetpizza/>}/>
        <Route path='/base3' element={<Base3/>}/>
        <Route path='/onichepizza' element={<Onichepizza/>}/>
        <Route path='/onifinal' element={<Onifinal/>}/>
        <Route path='/onisweetchepizza' element={<Onisweetchepizza/>}/>
        <Route path='/onisweetfinal' element={<Onisweetfinalpizza/>}/>
        <Route path='/chepizza' element={<Chepizza/>}/>
        <Route path='/sweetpizza' element={<Sweetpizza/>}/>
        <Route path='/sweetpizzafinal' element={<Sweetpizzafinal/>}/>
        <Route path='/sweetchepizza' element={<Sweetchepizza/>}/>


        </Routes>

        <Burger/>
        
        <Routes>
          <Route path='/' element = {<Buns/>}/>
          <Route path='buns2' element = {<Buns2/>}/>
          <Route path='buns3' element = {<Buns3/>}/>
          <Route path='buns4' element = {<Buns4/>}/>
          <Route path='onibuns' element = {<Onibuns/>}/>
          <Route path='chebuns' element = {<Chebuns/>}/>
          <Route path='tombuns' element = {<Tombuns/>}/>
          <Route path='tomchebuns' element = {<Tomchebuns/>}/>
          <Route path='tombunsfinal' element = {<Tombunsfinal/>}/>
          <Route path='onibunsfinal' element = {<Onibunsfinal/>}/>
          <Route path='onichebuns' element = {<Onichebuns/>}/>
          <Route path='onibuns2' element = {<Onibuns2/>}/>
          <Route path='onitombuns' element = {<Onitombuns/>}/>
          <Route path='onitombunsfinal' element = {<Onitombunsfinal/>}/>
          <Route path='onitomchebuns' element = {<Onitomchebuns/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

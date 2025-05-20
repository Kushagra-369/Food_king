import React from 'react'
import Navbar from './components/Navbar'
import Pizza from './components/Pizza'
// import Onichepizza from './components/Onichepizza'
// import Onifinal from './components/Onifinal'
// import Onipizza from './components/Onipizza'
// import Onipizza2 from './components/Onipizza2'
// import Onisweetchepizza from './components/Onisweetchepizza'
// import Onisweetfinalpizza from './components/Onisweetfinal'
// import Onisweetpizza from './components/Onisweetpizza'
import Base from './components/Base'
// import Base2 from './components/Base2'
// import Base3 from './components/Base3'
// import Base4 from './components/Base4'
// import Chepizza from './components/Chepizza'
// import Sweetchepizza from './components/Sweetchepizza'
// import Sweetpizza from './components/Sweetpizza'
// import Sweetpizzafinal from './components/Sweetpizzafinal'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Pizza/>

        <Routes>

        <Route path='/' element={<Base/>}/>
        {/* <Route path='/base2' element={<Base2/>}/>
        <Route path='/base4' element={<Base4/>}/>
        <Route path='/onipizza' element={<Onipizza/>}/>
        <Route path='/onifinal' element={<Onifinal/>}/>
        <Route path='/onichepizza' element={<Onichepizza/>}/>
        <Route path='/chepizza' element={<Chepizza/>}/>
        <Route path='/base3' element={<Base3/>}/>
        <Route path='/onipizza2' element={<Onipizza2/>}/>
        <Route path='/onisweetpizza' element={<Onisweetpizza/>}/>
        <Route path='/sweetpizza' element={<Sweetpizza/>}/>
        <Route path='/sweetpizzafinal' element={<Sweetpizzafinal/>}/>
        <Route path='/sweetchepizza' element={<Sweetchepizza/>}/>
        <Route path='/onisweetchepizza' element={<Onisweetchepizza/>}/>
        <Route path='/onisweetfinal' element={<Onisweetfinalpizza/>}/> */}

        </Routes>
      </BrowserRouter>

    </div>
  )
}

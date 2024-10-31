import React from 'react'
import NavbarComponent from './navbar'
import { Route, Routes } from 'react-router-dom'
import MotorComponent from './MotorComponent'
import CaravanComponent from './CaravanComponent'
import UsedCarCompnent from './usedCarCompnent'
import CampingPlaceComponent from './campingPlaceComponent'
import TuningComponent from './TuningComponent'
import FooterCompent from './footerComponent'
import CaruselComponent from './Carusel'





const RouterComponent = () => {
  return (
    <>
        <NavbarComponent/>
        
        <Routes>
            <Route  path="/motor" element={<MotorComponent/>}/>
            <Route path="/caravan" element={<CaravanComponent/>}/>
            <Route path="/tuning" element={<TuningComponent/>}/>
            <Route path="/usedCar" element = {<UsedCarCompnent/>}/>
            <Route path="/campingPlace" element ={<CampingPlaceComponent/>}/>
            <Route path= "/carusel" element = {<CaruselComponent/>}/>
        </Routes>
       <FooterCompent/>
    </>
  )
}

export default RouterComponent
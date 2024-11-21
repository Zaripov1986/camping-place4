import React from 'react'
import NavbarComponent from './navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import MotorComponent from './MotorComponent'
import CaravanComponent from './CaravanComponent'
import UsedCarCompnent from './usedCarCompnent'
import CampingPlaceComponent from './campingPlaceComponent'
import TuningComponent from './TuningComponent'
import FooterCompent from './footerComponent'
import CaruselComponent from './Carusel'
import MotorDetailComponent from './motorDetail'
import AidalComponent from './aidal'
import ItemReviewsCompnent from './ItemReviews'
import CaravandetailComponent from './caravanetail'
import TuningDateilComponent from './tuningDatel'
import UsedCarDetail from './usedCarDetail'
import SignInComponent from './sign in/signin'
import RegistrateComponent from './registrate'
import { EmailComponent } from './mail/email'
















const RouterComponent = () => {
  const location = useLocation();
  const Navbarhiden = location.pathname === "/sign-in" || location.pathname === "/registrate" ;
  return (
    
    <>
        
        {!Navbarhiden && <NavbarComponent/>}
        <Routes>
            <Route  path="/motor" element={<MotorComponent/>}/>
            <Route path="/caravan" element={<CaravanComponent/>}/>
            <Route path="/tuning" element={<TuningComponent/>}/>
            <Route path="/usedCar" element = {<UsedCarCompnent/>}/>
            <Route path="/campingPlace" element ={<CampingPlaceComponent/>}/>
            <Route path= "/carusel" element = {<CaruselComponent/>}/>
           <Route path='/motor-dateil/:id' element = {<MotorDetailComponent/>}/>
           <Route path='/aidal' element = {<AidalComponent/>}/>
          <Route path='/item-reviews' element = {<ItemReviewsCompnent/>}/>
          <Route path='/caravan-detail/:id' element ={ <CaravandetailComponent/>}/>
          <Route path='/tunig-detail/:id' element = {<TuningDateilComponent/>}/>
          <Route path='/used-car/:id' element = {<UsedCarDetail/>}/>
          <Route path='/sign-in' element = {<SignInComponent/>}/>
          <Route path='/registrate' element = {<RegistrateComponent/>}/>
          <Route path='/mail' element = {<EmailComponent/>}/>
        </Routes>
        {!Navbarhiden && <FooterCompent/>}
       
    </>
  )
}

export default RouterComponent
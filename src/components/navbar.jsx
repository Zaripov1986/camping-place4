import React from 'react'
import { Container, ContLeft, ContRight, DivWrap, NavLeft, NavRight } from './navbarstyled'
import camper from "../assests/Camper.svg"
import clarity_shopping from "../assests/clarity_shopping-cart-solid.svg"
import bxbxsuser from "../assests/bx_bxs-user.svg"
import grommet from "../assests/grommet-icons.svg"
import { Link } from 'react-router-dom'
const NavbarComponent = () => {
  return (
    <Container>
       
        
     <ContLeft>
      <Link to={"/carusel"}>
     <img src={camper} alt="camper-img" />
     </Link>
     </ContLeft>
     <ContRight>
        <DivWrap>
           <NavLeft>
                <div style={{display:"flex"}}>
                <Link to={"/motor"}>
                <p>Motor</p>
                </Link>
                <img src={grommet} alt="grommet-icon" /> 
                </div>
                <div style={{display:"flex"}}>
                <Link to={"/caravan"}>
                <p>Caravan</p>
                </Link>
                <img src={grommet} alt="grommet-icon" />
                </div>
                <div style={{display:"flex"}}>
               <Link to={"/tuning"}>
                <p>Tuning </p>
                </Link>
                <img src={grommet} alt="grommet-icon" />
                </div>
                <div style={{display:"flex"}}>
                <Link to={"/usedCar"}>
                <p>Used Car</p>
                </Link>
                <img src={grommet} alt="grommet-icon" /> 
                </div>
                <Link to={"/campingPlace"}>
                <p>Camping Place</p>
                </Link>
            </NavLeft>  
        
     <NavRight>
        <div style={{display:"flex",gap:"10px"}}>
     <img src={clarity_shopping} alt="clarity_shopping-icon" width={"27px"}/>
     <img src={bxbxsuser} alt="bx_bxs-user-icon" width={"27px"}/>
     </div>
     <div style={{display:"flex"}}>
     <p>En</p>
     <img src={grommet} alt="grommet-icon" />  
     </div> 
     </NavRight> 
     </DivWrap>
    </ContRight>        
   </Container>
  )
}

export default NavbarComponent
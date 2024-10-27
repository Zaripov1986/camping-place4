import React from 'react'
import { Container } from './footer'
import whiecamper from "../assests/Camperwhite.svg"
import youtube from "../assests/cib_youtube.svg"
import vector from "../assests/Vector.svg"
import never from "../assests/naver.svg"

const FooterCompent = () => {
  return (
    <Container>
      <div style={{display:"flex",justifyContent:"space-around",padding:"50px"}}>
      <div><img src={whiecamper} alt="whiecamper-img" /></div>
      <div  style={{color:"white"}}>
        <h2>Services</h2>
        <h4 style={{marginTop:"40px"}}>Camping</h4>
        <h4>Lodging</h4>
        <h4>Harbor</h4>
        <h4>Day Use</h4>
      </div>
      <div style={{color:"white"}}>
         <h2>Menu</h2>
        <h4 style={{marginTop:"40px"}}>About</h4>
        <h4>Services</h4>
        <h4>Booking</h4>
        <h4>Blog</h4>
      </div>
      <div style={{color:"white",display:"flex",flexDirection:"column",justifyContent:"center"}}>
        <h2>Contact</h2>
        <div style={{display:"flex",alignItems:"center",justifyContent:"start",gap:"5px",marginTop:"40px"}}>
          <img src={youtube} alt="youtube-icon" style={{width:"20px"}}/>
          <img src={vector} alt="vector-icon" style={{width:"20px"}} />
          <img src={never} alt="never-icon" style={{width:"19px"}}/>
        </div>
        <h4>021 Korea Seul, LA</h4>
        <h4>camper@example.com</h4>
        <h4>(021) 345-6789-99</h4>
      </div>
      </div>
    </Container>
  )
}

export default FooterCompent
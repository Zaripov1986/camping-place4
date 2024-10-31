import React from 'react'
import { Container, MidWrapper, MidWrapperChild, WallPaper } from './campingPlaceStyle'
import campingimg1 from "../assests/campingimg1.svg"
import campingimg2 from "../assests/campingplace2.svg"
import campingimg3 from "../assests/campingplace3.svg"
import campingimg4 from "../assests/cmapingplace4.svg"

const CampingPlaceComponent = () => {
  return (
    <Container>
     
     <WallPaper>
             <p>Home / Camping place</p>
            
            <h1>Camping places</h1>
    </WallPaper>
   <MidWrapper>
     <MidWrapperChild>
      <img src={campingimg1} alt="campingimg1" />
      <h3>Camping place name</h3>
      <p>Location</p>
     </MidWrapperChild>
   
     <MidWrapperChild>
      <img src={campingimg2} alt="campingimg2" />
      <h3>Camping place name</h3>
      <p>Location</p>
     </MidWrapperChild>


     <MidWrapperChild>
      <img src={campingimg3} alt="campingimg3" />
      <h3>Camping place name</h3>
      <p>Location</p>
     </MidWrapperChild>

     <MidWrapperChild>
      <img src={campingimg4} alt="campingimg4" />
      <h3>Camping place name</h3>
      <p>Location</p>
     </MidWrapperChild>



     <MidWrapperChild>
      <img src={campingimg2} alt="campingimg2" />
      <h3>Camping place name</h3>
      <p>Location</p>
     </MidWrapperChild>





     <MidWrapperChild>
      <img src={campingimg3} alt="campingimg3" />
      <h3>Camping place name</h3>
      <p>Location</p>
     </MidWrapperChild>



     <MidWrapperChild>
      <img src={campingimg1} alt="campingimg1" />
      <h3>Camping place name</h3>
      <p>Location</p>
     </MidWrapperChild>



     <MidWrapperChild>
      <img src={campingimg2} alt="campingimg2" />
      <h3>Camping place name</h3>
      <p>Location</p>
     </MidWrapperChild>



     <MidWrapperChild>
      <img src={campingimg3} alt="campingimg3" />
      <h3>Camping place name</h3>
      <p>Location</p>
     </MidWrapperChild>



     <MidWrapperChild>
      <img src={campingimg1} alt="campingimg1" />
      <h3>Camping place name</h3>
      <p>Location</p>
     </MidWrapperChild>



     <MidWrapperChild>
      <img src={campingimg2} alt="campingimg2" />
      <h3>Camping place name</h3>
      <p>Location</p>
     </MidWrapperChild>




     <MidWrapperChild>
      <img src={campingimg3} alt="campingimg3" />
      <h3>Camping place name</h3>
      <p>Location</p>
     </MidWrapperChild>
   </MidWrapper>

    </Container>
  )
}

export default CampingPlaceComponent
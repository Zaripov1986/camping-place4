import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import line32 from "../assests/Line32.svg"
import carimage from "../assests/carimage6.svg"
import imgcar2 from "../assests/carimage7.svg"
import image12 from "../assests/carimage8.svg"
import image13 from "../assests/carimage9.svg"
import image14 from "../assests/carimage10.svg" 
import FullWidthTabs from './tabs';
import { Container, WallPaper } from './usedCarStyle'
import { usedcar } from './mock/usedcar'
import { useParams } from 'react-router-dom'





const UsedCarDetail = () => {
  let {id} = useParams();
  //console.log(usedcar.maindata);
   const dataById = usedcar.maindata.find((data) => data.id === parseInt(id));
  return (
  <Container> 
      <WallPaper>
      <Button variant="outlined" sx={{color:"white",borderRadius: "10px",height: "76.407px",width: "509.208px",fontFamily: "Montserrat",textAlign:"center",fontSize:"60PX",fontWeight:"700PX",border:"none"}}>{dataById.car.company}</Button><br />
        <Stack spacing={2} direction="row">
      <Button variant="contained" sx={{width: "181.5px",borderRadius: "10px",height: "50.014px",marginTop:"30px",fontFamily: "Montserrat",fontSize:"16px",fontWeight:"700PX"}}>ADD TO CART</Button>
      <Button variant="outlined" sx={{color:"white",borderRadius: "10px",height: "50.014px",width: "181.5px",marginTop:"30px",border:"1px solid white",fontFamily: "Montserrat",fontSize:"16px",fontWeight:"700PX"}}>COMPARE</Button>
    </Stack>      
    </WallPaper>
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
    <div>
     <div style={{display:"flex",height: "380px",gap:"20px"}}>
      <div style={{flex:"1"}}>
        <img src={dataById.car.photo} alt=""  style={{height:"460px",padding:"15px",borderRadius:"20px",width:'100%'}}/>
      </div>
      <div style={{flex:"1"}}>
        <div style={{width: "600px",height: "360px",flexShrink: "0",borderRadius: "10px",background: "#FFF",boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.10)",display:"flex",padding:"40px",flexDirection:"column"}}>
       <div style={{display:"flex"}}>
       <div style={{display:"flex",flexDirection:"column",flex:"1"}}>
        <p>{dataById.car.company}</p>
        <p style={{marginTop:"10px"}}>{dataById.car.date}</p>
       </div>
       <div style={{flex:"1",marginLeft:"350px"}}>
        <p style={{color:"#006DAB"}}>{dataById.car.cost}</p>
      
       </div>
       </div>
       <img src={line32} alt="line32-img" style={{marginTop:"10px"}}/>
       <div style={{display:"flex",marginTop:"15px"}}>
        <div style={{flex:"1"}}>
          <p style={{marginTop:"10px"}}>Company</p>
          <p style={{marginTop:"10px"}}>People</p>
          <p style={{marginTop:"10px"}}>License type</p>
        </div>
        <div style={{flex:"1",marginLeft:"350px"}}>
        <p style={{marginTop:"10px"}}>{dataById.car.company}</p>
        <p style={{marginTop:"10px"}}>{dataById.car.people}</p>
        <p style={{marginTop:"10px"}}>{dataById.car.type}</p>
        </div>
       </div>
        </div>
        
      </div>
     </div>
     <div style={{display:"flex",marginTop:"83px"}}>
      <div style={{flex:"1"}}>
      <div style={{padding:"80px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
         <h1>Comfort</h1>
         <p style={{marginTop:"20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus,<br /> id in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar. Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna <br />sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi.</p>
      </div>
      </div>
      <div style={{flex:"1"}}>
        <div>
       <img src={carimage} alt="carimage" style={{width:"100%"}}/>
       </div>
      </div>
     </div>
     <div style={{display:"flex"}}>
      <div style={{flex:"1"}}>
      <img src={imgcar2} alt="imgcar2" style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100%"}} />
      </div>
      <div style={{flex:"1"}}>
        <div style={{padding:"80px"}}>
     <h1>Tidying away is child’s play!</h1>
     <p style={{marginTop:"20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus,<br /> id in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar. Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna <br />sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi.</p>
     </div>
      </div>
     </div>
     <div style={{display:"flex"}}>
      <div style={{flex:"1"}}>
        <div style={{padding:"80px"}}>
          <h1>Ventilated , Lit up</h1>
          <p style={{marginTop:"20px"}}>In our vans and motorhomes, all our body lighting is 100% LED: a guarantee of energy efficiency and durability.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus,<br /> id in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar. Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna <br />sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi.</p>
        </div>
      </div>
      <div style={{flex:"1"}}>
        <img src={image12} alt="image12" style={{width:"100%"}}/>
      </div>
     </div>
     <div style={{display:"flex"}}>
      <div style={{flex:"1"}}>
        <img src={image13} alt="image13" style={{width:"100%"}}/>
      </div>
      <div style={{flex:"1"}}>
        <div style={{padding:"80px"}}>
          <h1>Easy access</h1>
          <p style={{marginTop:"20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus,<br /> id in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar. Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna <br />sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi..</p>
        </div>
      </div>
     </div>
     <div style={{display:"flex"}}>
      <div style={{flex:"1"}}>
        <div style={{padding:"80px"}}>
        <div>
        <h1>Heating when driving</h1>
        <p style={{marginTop:"20PX"}}>Fuel heating is now very popular in the <br />industry, but this was not always the case; Camper (once again) led the way in this area over 15 years ago.
        One of the advantages it offers is that it can heat up your vehicle while you drive, for a more comfortable arrival.</p><br /><br />

        <div style={{display:"flex",gap:"12px"}}>
          <button style={{width:"180px",height:"50px",borderRadius:"10PX",background: "var(--blue, #006DAB)",color:"white"}}>ADD TO CART</button>
          <button style={{width:"180px",height:"50px",borderRadius:"10PX",border:"1px solid blue",color:"blue"}}>COMPARE</button>
        </div>
        </div>
        </div>
      </div>
      <div style={{flex:"1"}}>
      <img src={image14} alt="image14" style={{width:"100%"}} />
      </div>
     </div>
     </div>
     <FullWidthTabs/>
     </div>

  </Container>
  )
}

export default UsedCarDetail
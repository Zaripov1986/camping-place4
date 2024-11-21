import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Container, WallPaper } from './aidalStyle'
import { Link } from 'react-router-dom';


const AidalComponent = () => {
  return (
    <Link to={`/motor-dateil`}>
    <Container>
        <WallPaper>
        <Button variant="outlined" sx={{color:"white",borderRadius: "10px",height: "76.407px",width: "509.208px",fontFamily: "Montserrat",textAlign:"center",fontSize:"60PX",fontWeight:"700PX",border:"none"}}>Aidal</Button><br />
        <Stack spacing={2} direction="row">
      <Button variant="contained" sx={{width: "181.5px",borderRadius: "10px",height: "50.014px",marginTop:"30px",fontFamily: "Montserrat",fontSize:"16px",fontWeight:"700PX"}}>ADD TO CART</Button>
      <Button variant="outlined" sx={{color:"white",borderRadius: "10px",height: "50.014px",width: "181.5px",marginTop:"30px",border:"1px solid white",fontFamily: "Montserrat",fontSize:"16px",fontWeight:"700PX"}}>COMPARE</Button>
    </Stack> 
    </WallPaper>
   
    <div>
    Aidal
    </div>
    
    </Container>
    </Link>
  )
}

export default AidalComponent
import React from 'react'
import { Container, Div } from './signStyle'
import UnstyledInputBasic4 from '../input4'
import UnstyledInputBasic5 from '../input5'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import UnstyledButtonsSimple2 from '../button2';
import Line4 from "../../assests/Line4.svg"
import imgicon from "../../assests/image-icons.png"
import OutlinedButtons from '../button3';
import { Link } from 'react-router-dom';
const SignInComponent = () => {
  return (
    <Container>
        <Div >
            <h1>Sign in</h1>
            <p>Email</p>
            <UnstyledInputBasic4/>
            <p>Password</p>
            <UnstyledInputBasic5/>
            <div style={{display:"flex",alignItems:"center",gap:"55px"}}>
              <div>
              <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Keep me logged in" />
    
    </FormGroup>
  
              </div>
              <div>
         <p>Forget your password ?</p>
              </div>
            </div>
            <Link to={`/motor`}>
            <UnstyledButtonsSimple2/>
            </Link>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginLeft:"-55px"}}>
              <img src={Line4} alt="Line4-img" />
              <p style={{padding:"5px"}}>OR</p>
              <img src={Line4} alt="Line4-img" />
            </div>
            <div>
              <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
              <img src={imgicon} alt="imgicon-icon" style={{marginLeft:"-55px"}} />
              </div>
            </div>
            <Link to={`/registrate`}>
            <OutlinedButtons/>
            </Link>
        </Div>
    </Container>
  )
}

export default SignInComponent
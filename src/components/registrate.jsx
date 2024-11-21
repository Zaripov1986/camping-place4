import React from 'react'
import { Container, Div } from './registrateStyle'
import UnstyledInputBasic4 from './input4'
import UnstyledInputBasic5 from './input5'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import UnstyledButtonsSimple4 from './button4';
import { Link } from 'react-router-dom';

const RegistrateComponent = () => {
  return (
    <Container>
        <Div>
            <h1>Registrate</h1>
            <p>Email</p>
            <UnstyledInputBasic4/>
            <p>Password</p>
            <UnstyledInputBasic5/>
            <p>Repeat your passwordd</p>
            <UnstyledInputBasic5/>
            <div>
            <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Keep me logged in" />
      
    </FormGroup>
            </div>
            <Link to={`/sign-in`}>
            <UnstyledButtonsSimple4/>
            </Link>
        </Div>

    </Container>
  )
}

export default RegistrateComponent
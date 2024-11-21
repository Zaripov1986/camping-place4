import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
/* import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'; */
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { EmailComponent } from './mail/email';
/* import UnstyledInputBasic from './input';
import InputMultiline from './input2';
import UnstyledButtonsSimple from './button';
import UnstyledInputIntroduction from './input3'; */
const FarqComponent = () => {
  return (
    <div style={{display:"flex",padding:"40px 70px",gap:"49px"}}>
        <div style={{flex:"2"}}>
    {/*     <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Frequently asked questions </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Question Lorem ipsum dolor sit amet ?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Frequently asked questions </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Question Lorem ipsum dolor sit amet ?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Frequently asked questions </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Question Lorem ipsum dolor sit amet ?
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Frequently asked questions </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Question Lorem ipsum dolor sit amet ?
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Frequently asked questions </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Question Lorem ipsum dolor sit amet ?
          </Typography>
        </AccordionDetails>
      </Accordion>


    
        </div>
        <div style={{flex:"1"}}>
         <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-evenly",width:"450px",height:"432px",border:"1px solid rgba(0, 109, 171, 0.10)",boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.10)",borderRadius:"10PX"}}>
         <h1>Have you got a question</h1>
       <EmailComponent/>
         {/* <UnstyledInputBasic/>
         <UnstyledInputIntroduction/>
         <InputMultiline/>
         <UnstyledButtonsSimple/> */}
         </div>
        
        
        </div>
    </div>
  )
}

export default FarqComponent
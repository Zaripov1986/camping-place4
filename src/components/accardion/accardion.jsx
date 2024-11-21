import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




export default function AccordionUsage() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Brand <br />
          ____________________________
        </AccordionSummary>
        <AccordionDetails>
        
        <div style={{display:"flex",gap:"10px",padding:"5px",marginTop:"30px"}}> 
      <input type="checkbox" name="" id="" style={{width:"22px",height:"22px"}}/>
     <label htmlFor="">Aidal</label> 
     </div>
     <div style={{display:"flex",gap:"10px",padding:"5px"}}>
     <input type="checkbox" name="" id="" style={{width:"22px",height:"22px"}} />
     <label htmlFor="">Knal</label>
     </div>
     <div style={{display:"flex",gap:"10px",padding:"5px"}}>
     <input type="checkbox" name="" id="" style={{width:"22px",height:"22px"}}/>
     <label htmlFor="">escape</label> 
     </div>

        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
         Company <br />
         ____________________________
        </AccordionSummary>
        <AccordionDetails>
        <div style={{display:"flex",gap:"10px",padding:"5px",marginTop:"30px"}}> 
      <input type="checkbox" name="" id="" style={{width:"22px",height:"22px"}}/>
     <label htmlFor="">Aidal</label> 
     </div>
    
     <div style={{display:"flex",gap:"10px",padding:"5px"}}>
     <input type="checkbox" name="" id="" style={{width:"22px",height:"22px"}}/>
     <label htmlFor="">escape</label> 
     </div>

        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
         License type <br />
         ____________________________
        </AccordionSummary>
        <AccordionDetails>
        <div style={{display:"flex",gap:"10px",padding:"5px",marginTop:"30px"}}> 
      <input type="checkbox" name="" id="" style={{width:"22px",height:"22px"}}/>
     <label htmlFor="">1 year</label> 
     </div>
     <div style={{display:"flex",gap:"10px",padding:"5px"}}>
     <input type="checkbox" name="" id="" style={{width:"22px",height:"22px"}} />
     <label htmlFor="">2 year</label>
     </div>
     <div style={{display:"flex",gap:"10px",padding:"5px"}}>
     <input type="checkbox" name="" id="" style={{width:"22px",height:"22px"}}/>
     <label htmlFor="">1.5year</label> 
     </div>

        </AccordionDetails>
      </Accordion>
  

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
        Number of travelers <br />
        ____________________________
        </AccordionSummary>
        <AccordionDetails>
        <div style={{display:"flex",gap:"10px",padding:"5px",marginTop:"30px"}}> 
      <input type="checkbox" name="" id="" style={{width:"22px",height:"22px"}}/>
     <label htmlFor="">2</label> 
     </div>
     <div style={{display:"flex",gap:"10px",padding:"5px"}}>
     <input type="checkbox" name="" id="" style={{width:"22px",height:"22px"}} />
     <label htmlFor="">3-4</label>
     </div>
     <div style={{display:"flex",gap:"10px",padding:"5px"}}>
     <input type="checkbox" name="" id="" style={{width:"22px",height:"22px"}}/>
     <label htmlFor="">5+</label> 
     </div>

        </AccordionDetails>
      </Accordion>
  
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
        Location <br />
        ____________________________
        </AccordionSummary>
        <AccordionDetails>
        <div style={{display:"flex",gap:"10px",padding:"5px",marginTop:"30px"}}> 
      <input type="checkbox" name="" id="" style={{width:"22px",height:"22px"}}/>
     <label htmlFor="">Seoul</label> 
     </div>
     <div style={{display:"flex",gap:"10px",padding:"5px"}}>
     <input type="checkbox" name="" id="" style={{width:"22px",height:"22px"}} />
     <label htmlFor="">Korea</label>
     </div>
     <div style={{display:"flex",gap:"10px",padding:"5px"}}>
     <input type="checkbox" name="" id="" style={{width:"22px",height:"22px"}}/>
     <label htmlFor="">Pusan</label> 
     </div>

        </AccordionDetails>
      </Accordion>
  
    </div>
    
  );
}

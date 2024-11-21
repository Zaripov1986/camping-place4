import React from 'react'
import xarita from "../assests/Screenshot.svg"
import { EmailComponent } from './mail/email'
/* import UnstyledInputBasic from './input'
import UnstyledInputIntroduction from './input3'
import InputMultiline from './input2'
import UnstyledButtonsSimple from './button' */
const ContactComponent = () => {
  return (
    <div style={{display:"flex",padding:"40px 70px",gap:"70px"}}>
        <div>
            <img src={xarita} alt="xarita-img" />
            <div style={{display:"flex",gap:"23px",marginTop:"25px"}}>
                <div style={{width:"340px",height:"109px",borderRadius:"8px",background:"#FFF",boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.25)"}}>
                    <div style={{padding:" 15px 25px "}}>
                    <p>Phone number:</p>
                    <p>+7 237 181 181</p>
                    <p>+7 210 181 191</p>
                    </div>
                </div>
                <div style={{width:"340px",height:"109px",borderRadius:"8px",background:"#FFF",boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.25)"}}>
                    <div style={{padding:" 15px 25px "}}>
                    <p>E-mail:</p>
                    <p>logo.uz</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
        <div style={{width:"450px",height:"432px",borderRadius:"10px",border: "1px solid rgba(0, 109, 171, 0.10)",background: "#FFF",boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.10)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-evenly"}}>
           <h1 style={{color: "var(--text-color, #023047)",fontFamily: "Montserrat",fontSize: "24px",fontWeight:"700px",lineHeight: "130%"}}>Send a question</h1>
        <EmailComponent/>
        {/*    <UnstyledInputBasic/>
         <UnstyledInputIntroduction/>
         <InputMultiline/>
         <UnstyledButtonsSimple/> */}
        </div>
        </div>
    </div>
  )
}

export default ContactComponent
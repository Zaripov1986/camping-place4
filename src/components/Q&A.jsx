import React from 'react'
import line41 from "../assests/Line41.svg"
/* import UnstyledInputBasic from './input' */
/* import UnstyledInputIntroduction from './input3'
import InputMultiline from './input2'
import UnstyledButtonsSimple from './button' */
import { EmailComponent } from './mail/email'
const QaComponent = () => {
  return (
    <div style={{display:"flex",gap:"69px"}}>
        <div style={{flex:"1"}}>
            <p style={{marginTop:"55px"}}>Name</p>
            <p>Question Lorem ipsum dolor sit amet ?</p>
            <img src={line41} alt="line41" width={707}/>
            <p>Name</p>
            <p>Question Lorem ipsum dolor sit amet ?</p>
            <img src={line41} alt="line41" width={707}/>
            <p>Name</p>
            <p>Question Lorem ipsum dolor sit amet ?</p>
            <img src={line41} alt="line41" width={707}/>
            <p>Name</p>
            <p>Question Lorem ipsum dolor sit amet ?</p>
            <img src={line41} alt="line41" width={707}/>
            <p>Name</p>
            <p>Question Lorem ipsum dolor sit amet ?</p>
            <img src={line41} alt="line41" width={707}/>
        </div>
        <div style={{flex:"1"}}>    
        <div style={{width:"450px",height:"432px",borderRadius:"10px",border: "1px solid rgba(0, 109, 171, 0.10)",background: "#FFF",boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.10)",display:"flex",flexDirection:"column",alignItems:"center"}}>
           <h1 style={{color: "var(--text-color, #023047)",fontFamily: "Montserrat",fontSize: "24px",fontWeight:"700px",lineHeight: "130%"}}>Send a question</h1>
          {/*  <UnstyledInputBasic/>
         <UnstyledInputIntroduction/>
         <InputMultiline/>
         <UnstyledButtonsSimple/> */}
         <EmailComponent/>
        </div>
        </div>
    </div>
  )
}

export default QaComponent
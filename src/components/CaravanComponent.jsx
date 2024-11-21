import React from 'react'
import { BtnCont, ChildWrap, Chiziq, Chiziq2, Container, DataCont, DivLeft, DivRight, MidBarCont, MidBarContLeft, MidBarContRight, WallPaper } from './caravaStyle'
import celebrate from "../assests/clarity_grid-view-solid.svg"
import list from "../assests/ic_round-view-list.svg"
import Rectangle705 from "../assests/Rectangle705.svg"
import starcont from "../assests/bx_bxs-star.svg"
import { caravan } from './mock/caravan'
import { Link } from 'react-router-dom'
import AccordionUsage from './accardion/accardion'
import SelectAutoWidth from './selectWrap'
import MultipleSelectPlaceholder from './placepholder'




const CaravanComponent = () => {
  const data = caravan.maindata;
  console.log(data);
  return (
    <Container>
   <WallPaper>
             <p>Home / Caravan</p>
            <h2>Our ranges</h2>
            <h1>Caravan</h1>
    </WallPaper>
    <MidBarCont >
     <MidBarContLeft>
     <p style={{marginTop:"20px"}}>Cost of car</p>
     <Chiziq2></Chiziq2>
     <div style={{display:"flex",gap:"25px",marginTop:"50px"}}>
     <div style={{display:"flex",flexDirection:"column"}}>
     <label htmlFor="">From</label>   
     <input type="text" style={{width:"91px",height:"36px",borderRadius:"10px",border:"1px solid rgba(55, 55, 55, 0.60)"}} />
     </div>
     <div style={{display:"flex",flexDirection:"column"}}>
     <label htmlFor="">to</label>   
        <input type="text" style={{width:"91px",height:"36px",borderRadius:"10px",border:"1px solid rgba(55, 55, 55, 0.60)"}}/>
     </div>
     </div>
      <div style={{display:"flex", gap:"180px",marginTop:"50px"}}>
      <AccordionUsage/> 
     </div>


     <BtnCont>
      <button>Cancel</button>
      <button style={{backgroundColor:"#006DAB"}}>Search</button>
     </BtnCont>
     <p style={{marginTop:"50px", color:"#006DAB",fontSize:"24px"}}>Compare</p>
     <div style={{marginTop:"5PX"}}>
      <img src={Rectangle705} alt="Rectangle705-image" />
      <img src={Rectangle705} alt="Rectangle705-image" />
      <img src={Rectangle705} alt="Rectangle705-image" />
     </div>
     <BtnCont>
     <button style={{backgroundColor:"#006DAB"}}>Cancel</button>
     </BtnCont>
     </MidBarContLeft>
     <MidBarContRight style={{display:"flex",flexDirection:"column"}}>
      <div style={{display:"flex"}}>
      <DivLeft> Item  <p>{data.length}</p></DivLeft>
      <DivRight>
        <p>Sort by</p>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
       
      <div style={{marginRight:"-70px"}}>
      <MultipleSelectPlaceholder />
      </div> 
      <div style={{marginTop:"5px"}}>
      <SelectAutoWidth/>
      </div>


        </div>
       
         <div style={{display:"flex",marginTop:"4px"}}>
        <div style={{border:"1px solid rgba(55, 55, 55, 0.30)",width:"41px",height:"30px",borderRadius:"5px 0px 0px 5px",display:"flex",alignItems:"center",justifyContent:"center"}}>

         <img src={celebrate} alt="celebrate-icon" style={{width:"15px", border:"none"}}/>
        </div>
        <div style={{border:"1px solid rgba(55, 55, 55, 0.30)",width:"41px",height:"30px",borderRadius:"0px 5px  5px 0px",display:"flex",alignItems:"center",justifyContent:"center"}}>
          <img src={list} alt="list-icon" style={{border:"none",width:"15px"}}/>
        </div>
        </div>
        
      </DivRight>
      </div>
      <Chiziq></Chiziq>
      <DataCont>
      {data.map((value,index)=>{
          return(
            <Link to={`/caravan-detail/${value.id}`}>
            <ChildWrap key={index}>
            <img src={value.car.photo} alt="imgcar" style={{width:"202.42px",borderRadius:"15px",height:"145px"}}/>
            <div style={{display:"flex",gap:"45px",marginTop:"20px",padding:"10px"}}>
            <div>
            <p>{value.car.name}</p>
            <p style={{fontSize:"12px"}}>{value.car.company}</p>
            </div>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <img src={starcont} alt="starcont" width={"14px"}/>
            <h4 style={{color:"#373737"}}>{value.car.rate}</h4>
            </div>
            </div>
            <h1> {value.car.cost} </h1>
            <div  style={{display:"flex",gap:"10px"}}>
              <button style={{width:"94px",height:"35px",borderRadius:"10px",border:"1px solid #006DAB",color:"#006DAB",fontFamily:"Montserrat",fontSize:"14px",fontStyle:"normal",fontWeight:"700px",lineHeight:"normal"}}>Order</button>
              <button style={{width:"94px",height:"35px",borderRadius:"10px",border:"1px solid #006DAB",color:"#006DAB",fontFamily:"Montserrat",fontSize:"14px",fontStyle:"normal",fontWeight:"700px",lineHeight:"normal"}}>Compare</button>
            </div>
            </ChildWrap>
            </Link>
          )
        })}

      </DataCont>
     </MidBarContRight>
     
    </MidBarCont>
    </Container>
  )
}

export default CaravanComponent
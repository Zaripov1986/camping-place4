import React from 'react'
import { BtnCont, ChildWrap, Chiziq, Chiziq2, Chiziq3, Container, DataCont, DivLeft, DivRight, MidBarCont, MidBarContLeft, MidBarContRight, WallPaper } from './caravaStyle'
import grommets from "../assests/grommet-icons.svg"
import celebrate from "../assests/clarity_grid-view-solid.svg"
import list from "../assests/ic_round-view-list.svg"
import grommet from "../assests/grommet-icons copy.svg"
import Rectangle705 from "../assests/Rectangle705.svg"
import starcont from "../assests/bx_bxs-star.svg"
import count from "../assests/250$.svg"
import { caravan } from './mock/caravan'




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
     <p >Cost of car</p>
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
     <p >Brand</p>
     <img src={grommet} alt="grommet-icon" style={{border:"none", width:"15px",marginTop:"15px"}}/>
     </div>
     <Chiziq3></Chiziq3>
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




     <div style={{display:"flex", gap:"160px",marginTop:"50px"}}>
     <p >Company</p>
     <img src={grommet} alt="grommet-icon" style={{border:"none", width:"15px",marginTop:"15px"}}/>
     </div>
     <Chiziq3></Chiziq3>
     <div style={{display:"flex",gap:"10px",padding:"5px",marginTop:"30px"}}> 
      <input type="checkbox" name="" id="" style={{width:"22px",height:"22px"}}/>
     <label htmlFor="">escape</label> 
     </div>
     <div style={{display:"flex",gap:"10px",padding:"5px"}}>
     <input type="checkbox" name="" id="" style={{width:"22px",height:"22px"}} />
     <label htmlFor="">Aidal</label>
     </div>
   




     <div style={{display:"flex", gap:"140px",marginTop:"50px"}}>
     <p >License type</p>
     <img src={grommet} alt="grommet-icon" style={{border:"none", width:"15px",marginTop:"15px"}}/>
     </div>
     <Chiziq3></Chiziq3>
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
     




     <div style={{display:"flex", gap:"90px",marginTop:"50px"}}>
     <p >Number of travelers</p>
     <img src={grommet} alt="grommet-icon" style={{border:"none", width:"15px",marginTop:"15px"}}/>
     </div>
     <Chiziq3></Chiziq3>
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




     <div style={{display:"flex", gap:"166px",marginTop:"50px"}}>
     <p >Location</p>
     <img src={grommet} alt="grommet-icon" style={{border:"none", width:"15px",marginTop:"15px"}}/>
     </div>
     <Chiziq3></Chiziq3>
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
      <DivLeft> Item  <p>25.156</p></DivLeft>
      <DivRight>
        <p>Sort by</p>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <input type="text" placeholder='Select...'/>
        <img src= {grommets} alt="" />
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
       <button> 60</button>
        <img src= {grommets} alt="" />
        </div>
         <div style={{display:"flex"}}>
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
            <ChildWrap>
            <img src={value.car.photo} alt="imgcar" style={{width:"202.42px",borderRadius:"15px",height:"145px"}}/>
            <div style={{display:"flex",gap:"45px"}}>
            <div>
            <p>Name of the car</p>
            <p style={{fontSize:"12px"}}>Brand name</p>
            </div>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <img src={starcont} alt="starcont" width={"14px"}/>
            <h4 style={{color:"#373737"}}>5.3</h4>
            </div>
            </div>
            <img src={count} alt="count" style={{marginTop:"18px",paddingRight:"125px"}}/>
            <div  style={{display:"flex",gap:"10px",marginTop:"21px"}}>
              <button style={{width:"94px",height:"35px",borderRadius:"10px",border:"1px solid #006DAB",color:"#006DAB",fontFamily:"Montserrat",fontSize:"14px",fontStyle:"normal",fontWeight:"700px",lineHeight:"normal"}}>Order</button>
              <button style={{width:"94px",height:"35px",borderRadius:"10px",border:"1px solid #006DAB",color:"#006DAB",fontFamily:"Montserrat",fontSize:"14px",fontStyle:"normal",fontWeight:"700px",lineHeight:"normal"}}>Compare</button>
            </div>
            </ChildWrap>
          )
        })}

      </DataCont>
     </MidBarContRight>
     
    </MidBarCont>
    </Container>
  )
}

export default CaravanComponent
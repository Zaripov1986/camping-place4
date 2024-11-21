import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import imageCon from "../assests/campingplace.svg"
import MultipleComponent from './multiCarusel'
import line2 from "../assests/Line2.svg"







const CaruselComponent = () => {
  return (
 <>
    <Carousel autoPlay showThumbs = {false}>
        
                <div>
                    <img src={imageCon} alt="imageCon-img"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={imageCon} alt="imageCon-img"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={imageCon} alt="imageCon-img"/>
                    <p className="legend">Legend 3</p>
                </div>
             
             
           
    </Carousel>
   <div style={{fontFamily:" Gilroy",fontSize:" 28px",fontStyle:"normal",fontweight: "700",lineheight: "normal",display: "flex",alignItems: "center",justifyContent: "center",marginTop: "50px",color: "var(--text, #373737)"}}>Recommend</div>
   <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
     <img src={line2} alt="imgline" style={{width:"170px"}}/>
        </div>
        <MultipleComponent/> 
       
       
    </>             
  )
}

export default CaruselComponent
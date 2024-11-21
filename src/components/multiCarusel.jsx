import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import imgcarusel from "../assests/imagcar.svg"
import iconcarusel from "../assests/carusel-icon.svg"
import { Blogs, Div, Div2, Div3, Div4, DivLeftcon, DivRightcon, LoremCont, Playcon, Videos, Videos2, Videos3, Videos4, Videos5, Wordcont3 } from './multiCrausel';
import videosline from "../assests/Line2.svg"
import line4255 from "../assests/Line2.svg"
import lorem from "../assests/Lorem.svg"
import iconplay from "../assests/Ellipse5.svg"
import playicon from "../assests/palayicon.svg"
import {BasicModal, BasicModal1, BasicModal2, BasicModal3, BasicModal4, BasicModal5, BasicModal6, BasicModal7} from './modal/modal';




const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const MultipleComponent = () => {
  return (
    <div style={{padding:"20px"}}>
      <Carousel responsive={responsive}>
   
  <Div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
    <p >Knaus</p>
    <img src={imgcarusel} alt="imgcarusel-img" />
    <button>Discover the range</button>
    <div style={{display:"flex",gap:"10px",marginTop:"15px"}}>
    <p>Choose a model</p>
    <img src={iconcarusel} alt="iconcarusel-img" style={{width:"15px",height:"15px"}}/>
  </div>
  </Div>
<Div2 style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
<p >Knaus</p>
  <img src={imgcarusel} alt="imgcarusel-img" />
  <button>Discover the range</button>
  <div style={{display:"flex",gap:"10px",marginTop:"15px"}}>
    <p>Choose a model</p>
    <img src={iconcarusel} alt="iconcarusel-img" style={{width:"15px",height:"15px"}}/>
  </div>
  </Div2>
<Div3 style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
<p >Knaus</p>
    <img src={imgcarusel} alt="imgcarusel-img" />
    <button>Discover the range</button>
    <div style={{display:"flex",gap:"10px",marginTop:"15px"}}>
    <p>Choose a model</p>
    <img src={iconcarusel} alt="iconcarusel-img" style={{width:"15px",height:"15px"}}/>
  </div>
  </Div3>
<Div4 style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
<p >Knaus</p>
    <img src={imgcarusel} alt="imgcarusel-img" />
    <button>Discover the range</button>
    <div style={{display:"flex",gap:"10px",marginTop:"15px"}}>
    <p>Choose a model</p>
    <img src={iconcarusel} alt="iconcarusel-img" style={{width:"15px",height:"15px"}}/>
  </div>
  </Div4>

  
  <Div4 style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
<p >Knaus</p>
    <img src={imgcarusel} alt="imgcarusel-img" />
    <button>Discover the range</button>
    <div style={{display:"flex",gap:"10px",marginTop:"15px"}}>
    <p>Choose a model</p>
    <img src={iconcarusel} alt="iconcarusel-img" style={{width:"15px",height:"15px"}}/>
  </div>
  </Div4>

  <Div4 style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
<p >Knaus</p>
    <img src={imgcarusel} alt="imgcarusel-img" />
    <button>Discover the range</button>
    <div style={{display:"flex",gap:"10px",marginTop:"15px"}}>
    <p>Choose a model</p>
    <img src={iconcarusel} alt="iconcarusel-img" style={{width:"15px",height:"15px"}}/>
  </div>
  </Div4>

  <Div4 style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
<p >Knaus</p>
    <img src={imgcarusel} alt="imgcarusel-img" />
    <button>Discover the range</button>
    <div style={{display:"flex",gap:"10px",marginTop:"15px"}}>
    <p>Choose a model</p>
    <img src={iconcarusel} alt="iconcarusel-img" style={{width:"15px",height:"15px"}}/>
  </div>
  </Div4>
</Carousel>
<Videos style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
            <p>Videos</p>
            <img src={videosline} alt="videos-lineimg" />
           
          </Videos>
          
          <Wordcont3>
        
          <Videos2>
          
            <Playcon style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
              <BasicModal/>
              
              
            </Playcon>
          </Videos2>

          <Videos2>
          <Playcon style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
              <BasicModal1/>
            </Playcon>
          </Videos2>

          <Videos2>
          <Playcon style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
              <BasicModal2/>
            </Playcon>
          </Videos2>
           <Videos2>
           <Playcon style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
             <BasicModal3/>
            </Playcon>
          </Videos2>

          <Videos2>
          <Playcon style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
              
            <BasicModal4/>
            </Playcon>
          </Videos2>

          <Videos2>
          <Playcon style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
              <BasicModal5/>
            </Playcon>
          </Videos2>

          <Videos2>
          <Playcon style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
              <BasicModal6/>
            </Playcon>
          </Videos2>
           <Videos2>
           <Playcon style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
              <BasicModal7/>
            </Playcon>
          </Videos2>
          
          </Wordcont3>
         
          <Blogs>
            <p>Blogs</p>
            <img src={line4255} alt="line-img" />
          </Blogs> 
          
          <LoremCont>
          <DivLeftcon>
            <h1>Lorem ipsum</h1>
            <img src={lorem} alt="lorem-img" />
            <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Vel ducimus similique, placeat, <br />
            esse reprehenderit recusandae <br /> ipsum voluptates magni doloremque laudantium,<br />
             porro quod maxime <br /> explicabo debitis atque dolore adipisci quis quaerat!</p>
          </DivLeftcon>
          <DivRightcon>
            <Videos3>
            <Playcon style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
              <img src={iconplay} alt="icon-img" style={{width:"50px",height:"50px",fill:" rgba(255, 255, 255, 0.30)",strokeWidth: "1px",stroke: "#FFF"}}/>
              <img src={playicon} alt="play-img" style={{marginLeft:"-35px"}}/>
            </Playcon>
          </Videos3>
          <Videos4>
          <Playcon style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
              <img src={iconplay} alt="icon-img" style={{width:"50px",height:"50px",fill:" rgba(255, 255, 255, 0.30)",strokeWidth: "1px",stroke: "#FFF"}}/>
              <img src={playicon} alt="play-img" style={{marginLeft:"-35px"}}/>
            </Playcon>
          </Videos4>

          <Videos5>
          <Playcon style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
              <img src={iconplay} alt="icon-img" style={{width:"50px",height:"50px",fill:" rgba(255, 255, 255, 0.30)",strokeWidth: "1px",stroke: "#FFF"}}/>
              <img src={playicon} alt="play-img" style={{marginLeft:"-35px"}}/>
            </Playcon>
          </Videos5>
          
          <Videos3>
          <Playcon style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
              <img src={iconplay} alt="icon-img" style={{width:"50px",height:"50px",fill:" rgba(255, 255, 255, 0.30)",strokeWidth: "1px",stroke: "#FFF"}}/>
              <img src={playicon} alt="play-img" style={{marginLeft:"-35px"}}/>
            </Playcon>
          </Videos3>
          <Videos4>
          <Playcon style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
              <img src={iconplay} alt="icon-img" style={{width:"50px",height:"50px",fill:" rgba(255, 255, 255, 0.30)",strokeWidth: "1px",stroke: "#FFF"}}/>
              <img src={playicon} alt="play-img" style={{marginLeft:"-35px"}}/>
            </Playcon>
          </Videos4>

          <Videos5>
          <Playcon style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
              <img src={iconplay} alt="icon-img" style={{width:"50px",height:"50px",fill:" rgba(255, 255, 255, 0.30)",strokeWidth: "1px",stroke: "#FFF"}}/>
              <img src={playicon} alt="play-img" style={{marginLeft:"-35px"}}/>
            </Playcon>
          </Videos5>
            </DivRightcon>
          </LoremCont>
    </div>
  )
}

export default MultipleComponent
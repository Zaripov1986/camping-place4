import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import imageCon from "../assests/camping.svg"
const CaruselComponent = () => {
  return (
    <Carousel autoPlay>
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
  )
}

export default CaruselComponent
import React from 'react'
import Asynchronous from './best'
import carimg305 from "../assests/carimage305.svg"
import { motordata } from './mock/motor555'
import { useParams } from 'react-router-dom'
import line38 from "../assests/Line38.svg"

const ItemReviewsCompnent = () => {
  let {id} = useParams();
  console.log(motordata);
  const dataById = motordata.find((data)=> data.id === parseInt(id) );
  return (
    <div>
        <div style={{display:"flex"}}>
            <div style={{flex:"1"}}>Premium Review <span style={{color:"blue"}}>35</span></div>
            <div style={{flex:"1",display:"flex",justifyContent:"end"}}>
               <Asynchronous/>
            </div>
        </div>
        <div style={{display:"flex",marginTop:"50px"}}>
            <div style={{flex:"1",display:"flex",alignItems:"center",gap:"10px"}}>
              <div >
                <img src={carimg305} alt="carimg305" />
              </div>
              <div>
                <h4>Car name</h4>
                <p>brand</p>
                <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
              </div>
            </div>
            <div style={{flex:"1",display:"flex",flexDirection:"column",justifyContent:"space-around"}}>
             <p>id: {dataById.id}</p>
             <p>Date:{dataById.car.date}</p>
             <p>Viewed:{dataById.car.location}</p>
            </div>
        </div>
        <img src={line38} alt="line38-img" />


        <div style={{display:"flex"}}>
            <div style={{flex:"1"}}>Premium Review <span style={{color:"blue"}}>35</span></div>
            <div style={{flex:"1",display:"flex",justifyContent:"end"}}>
               <Asynchronous/>
            </div>
        </div>
        <div style={{display:"flex"}}>
            <div style={{flex:"1",display:"flex",alignItems:"center",gap:"10px"}}>
              <div >
                <img src={carimg305} alt="carimg305" />
              </div>
              <div>
                <h4>Car name</h4>
                <p>brand</p>
                <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
              </div>
            </div>
            <div style={{flex:"1",display:"flex",flexDirection:"column",justifyContent:"space-around"}}>
             <p>id: {dataById.id}</p>
             <p>Date:{dataById.car.date}</p>
             <p>Viewed:{dataById.car.location}</p>
            </div>
        </div>
        <img src={line38} alt="line38-img" />


        <div style={{display:"flex"}}>
            <div style={{flex:"1"}}>Premium Review <span style={{color:"blue"}}>35</span></div>
            <div style={{flex:"1",display:"flex",justifyContent:"end"}}>
               <Asynchronous/>
            </div>
        </div>
        <div style={{display:"flex"}}>
            <div style={{flex:"1",display:"flex",alignItems:"center",gap:"10px"}}>
              <div >
                <img src={carimg305} alt="carimg305" />
              </div>
              <div>
                <h4>Car name</h4>
                <p>brand</p>
                <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
              </div>
            </div>
            <div style={{flex:"1",display:"flex",flexDirection:"column",justifyContent:"space-around"}}>
             <p>id: {dataById.id}</p>
             <p>Date:{dataById.car.date}</p>
             <p>Viewed:{dataById.car.location}</p>
            </div>
        </div>
        <img src={line38} alt="line38-img" />


        <div style={{display:"flex"}}>
            <div style={{flex:"1"}}>Premium Review <span style={{color:"blue"}}>35</span></div>
            <div style={{flex:"1",display:"flex",justifyContent:"end"}}>
               <Asynchronous/>
            </div>
        </div>
        <div style={{display:"flex"}}>
            <div style={{flex:"1",display:"flex",alignItems:"center",gap:"10px"}}>
              <div >
                <img src={carimg305} alt="carimg305" />
              </div>
              <div>
                <h4>Car name</h4>
                <p>brand</p>
                <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
              </div>
            </div>
            <div style={{flex:"1",display:"flex",flexDirection:"column",justifyContent:"space-around"}}>
             <p>id: {dataById.id}</p>
             <p>Date:{dataById.car.date}</p>
             <p>Viewed:{dataById.car.location}</p>
            </div>
        </div>
        <img src={line38} alt="line38-img" />



        <div style={{display:"flex"}}>
            <div style={{flex:"1"}}>Premium Review <span style={{color:"blue"}}>35</span></div>
            <div style={{flex:"1",display:"flex",justifyContent:"end"}}>
               <Asynchronous/>
            </div>
        </div>
        <div style={{display:"flex"}}>
            <div style={{flex:"1",display:"flex",alignItems:"center",gap:"10px"}}>
              <div >
                <img src={carimg305} alt="carimg305" />
              </div>
              <div>
                <h4>Car name</h4>
                <p>brand</p>
                <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
              </div>
            </div>
            <div style={{flex:"1",display:"flex",flexDirection:"column",justifyContent:"space-around"}}>
             <p>id: {dataById.id}</p>
             <p>Date:{dataById.car.date}</p>
             <p>Viewed:{dataById.car.location}</p>
            </div>
        </div>
        <img src={line38} alt="line38-img" />
    </div>
    
  )
}

export default ItemReviewsCompnent
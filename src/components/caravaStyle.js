import styled from "styled-components";
import bgimage from "../assests/caravan.webp"

export const Container = styled.div`
`;
export const WallPaper = styled.div`
background-image: url(${bgimage});
height: 450px;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
h1{
 font-size: 70px;
 margin: 0;
}
h2{
    font-size: 30px;
    margin: 0;
}
p{
    margin: 0;
}
`;
export const MidBarCont = styled.div`
display: flex;
padding: 10px;
justify-content: center;
`;
export const MidBarContLeft = styled.div`
 //flex: 1;
`;
export const MidBarContRight = styled.div`
//flex: 3;


`;
export const DataCont =styled.div`
display: grid;
grid-template-areas: "a a a a";
gap: 20px;
margin-top: 40px;
`;

export const ChildWrap = styled.div`
width: 223px;
height: 307px;
flex-shrink: 0;
border-radius: 20px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
p{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;

}
`;
export const DivLeft = styled.div`
display: flex;
color: var(--text, #373737);
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 100%; /* 18px */
flex: 1;
p{
    color: var(--blue, #006DAB);
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
}
`;
export const DivRight = styled.div`
flex: 2;
display: flex;
align-items: center;
justify-content: end;
gap: 15px;

p{
    color: var(--text, #373737);
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 16px */
}
input{
    width: 227px;
    height: 30px;
    flex-shrink: 0;
    border-radius: 5px 0px 0px 5px;
    border: 1px solid rgba(55, 55, 55, 0.30);
    background-color: #FAFAFA;
}
img{
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    border-radius:  0px 5px  5px 0px;
    border: 1px solid rgba(55, 55, 55, 0.30);
    background-color: #FAFAFA;
}
button{
    width: 60px;
    height: 30px;
    flex-shrink: 0;
    border-radius: 5px   0px 0px 5px;
    border: 1px solid rgba(55, 55, 55, 0.30);
    background-color: #FAFAFA;
}
`;
 export const IconCont = styled`
 width: 41px;
height: 30px;
flex-shrink: 0;
border-radius: 5px 0px 0px 5px;
border: 1px solid red;
 `;
export const Chiziq = styled.div`
//width: 90%;
height: 1px;
background: rgba(55, 55, 55, 0.30);
margin-top: 3px;
`;
export const Chiziq2 = styled.div`
width: 240px;
height: 1px;
border: 1px solid rgba(55, 55, 55, 0.30);
margin-top: 17px;
`;
export const Chiziq3 = styled.div`
width: 240px;
height: 1px;
border: 1px solid rgba(55, 55, 55, 0.30);

`;
export const BtnWrap = styled.div`
    display: flex;
    gap: 15px;
    margin-top: 10px;
    button{
    width: 94px;
    height: 35px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid var(--blue, #006DAB);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);  }    


`;
export const BtnCont = styled.div`
  display: flex;
   gap: 9px;
   margin-top: 51px;
button{
    width: 115.804px;
    height: 38.968px;
    flex-shrink: 0;
    border-radius: 60px;
    background: var(--sariq, #FF7A00);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
    color: white;
}
`;
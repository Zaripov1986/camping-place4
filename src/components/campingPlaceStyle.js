import styled from "styled-components";
import bgimage from "../assests/campingplace.svg"

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
p{
    margin: 0;
}
`;
export const MidWrapper = styled.div`
display: grid;
grid-template-areas: "a a a";
gap: 20px;
align-items: center;
justify-content:center ;
padding: 80px;
`;

export const MidWrapperChild =styled.div`
img{
    width: 395px;
    height: 300px;
    flex-shrink: 0;
    border-radius: 10px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url(<path-to-image>) lightgray 50% / cover no-repeat;
}
h3{
    color: var(--text, #373737);
    font-family: Montserrat;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
p{
    color: var(--text, #373737);
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
`;
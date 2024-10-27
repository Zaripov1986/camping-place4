import styled from "styled-components";


export const Container = styled.div`
display: flex;
align-items: center;
padding:  10px 50px;


`;
export const ContLeft = styled.div`
flex: 1;


`;
export const ContRight = styled.div`
flex: 3;
display: flex;
align-items: center;
justify-content: end;

p{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: normal;
}

`;
export const DivWrap = styled.div`

    display: flex;
    align-items: center;
    gap: 70px;
    justify-content: space-between;
`;
export const NavLeft = styled.div`
display: flex;
gap: 60px;
img{
    width: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
}
`;
export const NavRight = styled.div`
display: flex;
gap: 10px;
img{
    display: flex;
   
}
`;
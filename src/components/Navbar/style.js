import styled from "styled-components";

export const Container = styled.div`
display:flex;
justify-content:space-between;
width:100%;
padding: 32px 0px ;
`

export const Logo = styled.img`
width:120;
height:17px;
`

export const NavItem = styled.div`
display:flex;
align-items: center;
justify-content:center;
`
NavItem.Link = styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
text-transform: uppercase;
margin:0px 33px;
color:black;
cursor:pointer;
`




export const ItemsLogo = styled.div`
display:flex;
justify-content:space-between;
align-items:center;

`


ItemsLogo.Logos = styled.img`
margin:0 20px;
cursor:pointer;

`
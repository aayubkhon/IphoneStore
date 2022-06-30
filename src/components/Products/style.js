import styled from "styled-components";

export const Container = styled.div`
margin-top:75px;
`

export const MainTitle = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`

MainTitle.Title = styled.h1`
font-family: 'Readex Pro';
font-style: normal;
font-weight: 400;
font-size: 37px;
`

MainTitle.Titles = styled.p`
font-family: 'Readex Pro';
font-style: normal;
font-weight: 400;
font-size: 13px;
`

export const Wrapper = styled.div`
display:flex;
justify-content:space-between;
margin-top:56px;
`

export const ItemProducts = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
flex-direction:column;
background: #F8F9FA;
border-radius: 16px;
width:413px;
height:403px;
`

ItemProducts.ProductTitle = styled.p`
font-family: 'Readex Pro';
font-style: normal;
font-weight: 400;
font-size: 13px;
text-align: center;
margin-top:30px;
`

ItemProducts.ProductTitles = styled.p`
font-family: 'Readex Pro';
font-style: normal;
font-weight: 400;
font-size: 28px;
text-align: center;
`

ItemProducts.ProductBtn = styled.button`
border: 1px solid #000000;
border-radius: 200px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 18px;
text-align: center;
text-transform: capitalize;
width:190px;
height:50px;
margin-top:15px;
`

ItemProducts.ProducImg = styled.img`
width:250px;
height:220px;
margin-top:10px;
`
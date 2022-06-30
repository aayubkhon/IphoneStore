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
font-size: 12px;
`

export const BookItem = styled.div`
display:flex;
margin-top:56px;
`
BookItem.BookImg = styled.img`
border-radius: 16px;
width:500px;
height:320px;
`

export const Item = styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;
margin-left:190px;
`
Item.Title = styled.h2`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 20px;
width:80%;
`

export const SeeAll = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-top:73px;
`

SeeAll.SeeAllLogo = styled.img`
width:25px;
height:30px;
margin-left:10px;
`

SeeAll.SeeAllTitle = styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 20px;
text-transform: capitalize;
`
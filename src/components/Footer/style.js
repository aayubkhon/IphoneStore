import styled from "styled-components";

export const Container = styled.div`
display:flex;
flex-direction:column;
margin-top:60px;
background: #F8F9FA;
width:100%;
height:230px;
`

export const Wrapper = styled.div`
display:flex;
justify-content:space-evenly;


`

export const Titles = styled.div`
display:flex;
flex-direction:column;
margin:30px 0px;
`

export const Title = styled.div`
display:flex;
flex-direction:column;
margin:30px 0px;

`


Titles.Logo = styled.img`
width:130px;
height:21px;
`

Titles.Items = styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
margin-top:14px;
`

Title.Paragraph = styled.p`
font-family: 'Readex Pro';
font-style: normal;
font-weight: 400;
font-size: 22px;

`

Title.Paragraphs = styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 17px;
padding-top:14px;

`
import styled from "styled-components";


export const Container = styled.div`
display:flex;
background: #DCE5E2;
border-radius: 32px;
width:100%;
height:550px;
`

export const Wrapper = styled.div`
display:flex;
flex-direction:column;
margin:145px 56px;
`

export const WrapperImg = styled.div`
display:flex;
`

Wrapper.Title = styled.p`
font-family: 'Readex Pro';
font-style: normal;
font-weight: 400;
font-size: 55px;
`

Wrapper.Titles = styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
margin-top:15px;
`

Wrapper.Btn = styled.button`
border: 1px solid #000000;
border-radius: 200px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 18px;
height:50px;
width:150px;
text-align:center;
margin-top:20px;
background: #DCE5E2;
cursor:pointer;
`
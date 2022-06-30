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
export const SearCh = styled.div`
display:flex;
margin-top:18px;


`
SearCh.Input = styled.input`
position:relative;
background: #F8F9FA;
border-radius: 100px;
width:600px;
height:50px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
padding-left:60px;
outline:none;
border:none;
cursor:pointer;
`

SearCh.InputImg = styled.img`
position:absolute;
z-index:1;
padding:15px 30px;
`

export const WrrapBtn = styled.div`
display:flex;
justify-content:center;
align-items:center;
gap: 10px;
margin-top:10px;
`

WrrapBtn.Btns = styled.button`
background: #FFFFFF;
border: 1px solid #C5C5C5;
border-radius: 200px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
width:100px;
height:42px;

`

export const SignUpCon = styled.div`
display:flex;
align-items:center;
justify-content:center;

`


export const SignMain = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
margin-top:60px;
border-radius: 16px;
background: #DCE5E2;
border-radius: 16px;
width:780px;
height:390px;
`

SignUpCon.Title = styled.h1`
font-family: 'Readex Pro';
font-style: normal;
font-weight: 400;
font-size: 37px;
`

SignUpCon.Titles = styled.p`
font-family: 'Readex Pro';
font-style: normal;
font-weight: 400;
font-size: 12px;
`

SignUpCon.SignInput = styled.input`
background: #DCE5E2;
border: 1px solid #000000;
border-radius: 54px 0px 0px 54px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
width:280px;
height:40px;
padding-left:30px;
`

SignUpCon.SignBtn = styled.button`
background: #000000;
border-radius: 0px 200px 200px 0px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
text-align: center;
color: #FFFFFF;
width:80px;
height:40px;
`
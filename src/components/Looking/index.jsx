import React from 'react'
import { Container, MainTitle, SearCh, SignMain, SignUpCon, WrrapBtn } from './style'
import search from '../../assets/search.svg'
import MacM1 from '../../assets/MacM1.png'


export const Looking = () => {
  return (
    <Container>
         <MainTitle>
        <MainTitle.Title>Looking for anything else?</MainTitle.Title>
        <SearCh>
        <SearCh.InputImg src={search} alt="" />
        <SearCh.Input type="text"  placeholder='Search keyword'/>
        </SearCh>
        </MainTitle>
        <WrrapBtn>
            <WrrapBtn.Btns >iPhone</WrrapBtn.Btns>
            <WrrapBtn.Btns >Charger</WrrapBtn.Btns>
            <WrrapBtn.Btns >Gift</WrrapBtn.Btns>
            <WrrapBtn.Btns >Google Pixel 3</WrrapBtn.Btns>
            <WrrapBtn.Btns >Keyboard</WrrapBtn.Btns>
        </WrrapBtn>
        <WrrapBtn>
            <WrrapBtn.Btns >13 Pro Max</WrrapBtn.Btns>
            <WrrapBtn.Btns >iPhone 12</WrrapBtn.Btns>
            <WrrapBtn.Btns >Laptop</WrrapBtn.Btns>
            <WrrapBtn.Btns >Mobile</WrrapBtn.Btns>
        </WrrapBtn>
        <SignUpCon>
        <SignMain>
        <SignUpCon.Title>Never miss a thing</SignUpCon.Title>
        <SignUpCon.Titles>Sign up for texts to be notified about our best offers on the perfect gifts.</SignUpCon.Titles>
        <img style={{ margin: '10px'}} src={MacM1} alt="" />
        <div>
            <SignUpCon.SignInput type="text" placeholder='Your email' />
            <SignUpCon.SignBtn>Sign up</SignUpCon.SignBtn>
        </div>
        </SignMain>
        </SignUpCon>
    </Container>
  )
}

export default Looking

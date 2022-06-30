import React from 'react'
import Footer from '../components/Footer'
import Ideas from '../components/Ideas'
import Looking from '../components/Looking'
import NavBar from '../components/Navbar'
import Products from '../components/Products/idex'
import SalleItems from '../components/SallleItems'
import Category from '../components/ShopCategory'
import TitleImg from '../components/TitleImg'
import { Container } from './style'

export const Root = () => {
  return (
    <Container>
      <NavBar/>
      <TitleImg/>
      <Category/>
      <SalleItems/>
      <Products/>
      <Ideas/>
      <Looking/>
      <Footer/>
    </Container>
  )
}

export default Root
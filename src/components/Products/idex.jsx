import React from 'react'
import { Container,ItemProducts,MainTitle, Wrapper } from './style'
import AppleWatch from '../../assets/AppleWatch.png'
import MacAple from '../../assets/MacAple.png'
import AirMac from '../../assets/AirMac.png'

export const Products = () => {
  return (
    <Container>
        <MainTitle>
        <MainTitle.Title>See the best around here</MainTitle.Title>
        <MainTitle.Titles>Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</MainTitle.Titles>
        </MainTitle>
        <Wrapper>
         <ItemProducts>
         <ItemProducts.ProductTitle>Smart light bulb pack</ItemProducts.ProductTitle>
            <ItemProducts.ProductTitles>Latest and gratest</ItemProducts.ProductTitles>
            <ItemProducts.ProductBtn>Explore</ItemProducts.ProductBtn>
            <ItemProducts.ProducImg src={AppleWatch} alt="" />
         </ItemProducts>
         <ItemProducts>
         <ItemProducts.ProductTitle>Smart light bulb pack</ItemProducts.ProductTitle>
            <ItemProducts.ProductTitles>Best selling</ItemProducts.ProductTitles>
            <ItemProducts.ProductBtn>Explore</ItemProducts.ProductBtn>
            <ItemProducts.ProducImg src={MacAple} alt="" />
         </ItemProducts>
         <ItemProducts>
         <ItemProducts.ProductTitle>Smart light bulb pack</ItemProducts.ProductTitle>
            <ItemProducts.ProductTitles>Every product</ItemProducts.ProductTitles>
            <ItemProducts.ProductBtn>Explore</ItemProducts.ProductBtn>
            <ItemProducts.ProducImg src={AirMac} alt="" />
         </ItemProducts>
        </Wrapper>
    </Container>
  )
}


export default Products
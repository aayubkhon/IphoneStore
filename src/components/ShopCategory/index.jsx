import React from 'react'
import { Container,ImgCategory,ImgCategoryCon,ImgWrapper,MainTitle } from './style'
import notebook from '../../assets/notebook.png'
import iphone12 from '../../assets/iphone12.png'
import laptop from '../../assets/laptop.png'
import clock from '../../assets/clock.png'


export const Category = () => {
  return (
    <Container>
     <MainTitle>
        <MainTitle.Title>Shop our latest offers and categories</MainTitle.Title>
        <MainTitle.Titles>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.</MainTitle.Titles>
     </MainTitle>
   <ImgWrapper>
   <ImgCategoryCon>
    <ImgCategory>
        <ImgCategory.NoteBook src={notebook} alt="" />
        <ImgCategory.NoteCon>
        <ImgCategory.NoteTitle>Laptops</ImgCategory.NoteTitle>
        <ImgCategory.NoteTitles>True Laptop Solution</ImgCategory.NoteTitles>
        </ImgCategory.NoteCon>
     </ImgCategory>
     <ImgCategory.ClockCon>
        <ImgCategory.Clock src={clock} alt="" />
        <ImgCategory.ClockItems>
        <ImgCategory.ClockTitle>Watch</ImgCategory.ClockTitle>
        <ImgCategory.ClockTitles>Not just stylisht</ImgCategory.ClockTitles>
        </ImgCategory.ClockItems>
     </ImgCategory.ClockCon>
    </ImgCategoryCon>
    <ImgCategory.Iphone12Con>
        <ImgCategory.Clock src={iphone12} alt="" />
        <ImgCategory.iphoneItems>
        <ImgCategory.IphoneTitle>Phones</ImgCategory.IphoneTitle>
        <ImgCategory.IphoneTitles>Your day to day life</ImgCategory.IphoneTitles>
        </ImgCategory.iphoneItems>
     </ImgCategory.Iphone12Con>
     <ImgCategory.Laptop >
        <ImgCategory.LaptopItems>
        <ImgCategory.LaptopTitle>Tablet</ImgCategory.LaptopTitle>
        <ImgCategory.LaptopTitles>Empower your work</ImgCategory.LaptopTitles>
        </ImgCategory.LaptopItems>
        <ImgCategory.LaptopImg src={laptop} alt="" />
     </ImgCategory.Laptop>
   </ImgWrapper>
    </Container>
  )
}

export default Category
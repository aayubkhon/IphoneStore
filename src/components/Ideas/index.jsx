import React from 'react'
import { BookItem, Container, Item, MainTitle, SeeAll } from './style'
import book from '../../assets/book.png'
import seeAll from '../../assets/seeAll.svg'


export const Ideas = () => {
  return (
    <Container>
         <MainTitle>
        <MainTitle.Title>Ideas have a place here</MainTitle.Title>
        <MainTitle.Titles>Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</MainTitle.Titles>
        </MainTitle>
        <BookItem>
            <BookItem.BookImg src={book} alt="" />
            <Item>
                <Item.Title >We Make It Easy To Find The Great Design Talent, Easier...</Item.Title>
                <Item.Title >Road Design Handbook For The International Road...</Item.Title>
                <Item.Title >The Best Kept Secrets About Creative People</Item.Title>
                <Item.Title >We Make It Easy To Find The Great Design Talent, Easier...</Item.Title>
            </Item>
        </BookItem>
        <SeeAll>
            <SeeAll.SeeAllTitle>See all</SeeAll.SeeAllTitle>
            <SeeAll.SeeAllLogo src={seeAll} alt="" />
        </SeeAll>
    </Container>
  )
}

export default Ideas
import React from 'react'
import { Container, MainTitle, Wrrapper } from './style'
import MacPro13 from '../../assets/MacPro13.png'
import Watch from '../../assets/Watch.png'
import MacAir from '../../assets/MacAir.png'
import Iped from '../../assets/Iped.png'


export const SalleItems = () => {
  return (
    <Container>
        <MainTitle>
        <MainTitle.Title>Shop our latest offers and categories</MainTitle.Title>
        <MainTitle.Titles>Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</MainTitle.Titles>
        </MainTitle>
   <Wrrapper>
   <Wrrapper.Items>
            <Wrrapper.MacPro src={MacPro13} alt="" />
            <Wrrapper.MacName>MacBook Pro 13</Wrrapper.MacName>
            <Wrrapper.MacTitle>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</Wrrapper.MacTitle>
                <Wrrapper.MacPrise>$ 1,200.00 USD</Wrrapper.MacPrise>
        </Wrrapper.Items>
        <Wrrapper.WatchItem>
            <Wrrapper.Watch src={Watch} alt="" />
            <Wrrapper.WatchName>Smart Galaxy Watch 3</Wrrapper.WatchName>
            <Wrrapper.WatchTitle>Neque porro quisquam est qui dolorem ipsum quia dolor 
                sit amet, consectetur, adipisci velit...</Wrrapper.WatchTitle>
                <Wrrapper.WatchPrice>$ 199.00 USD</Wrrapper.WatchPrice>
        </Wrrapper.WatchItem>
        <Wrrapper.MacAirItem>
            <Wrrapper.MacAirImg src={MacAir} alt="" />
            <Wrrapper.MacAirName>MacBook Air M1</Wrrapper.MacAirName>
            <Wrrapper.MacAirTitle>Neque porro quisquam est qui dolorem ipsum quia dolor 
                sit amet, consectetur, adipisci velit...</Wrrapper.MacAirTitle>
                <Wrrapper.MacAirPrice>$ 1,009.00 USD</Wrrapper.MacAirPrice>
        </Wrrapper.MacAirItem>
        <Wrrapper.IpedItem>
            <Wrrapper.IpedImg src={Iped} alt="" />
            <Wrrapper.IpedName>iPad</Wrrapper.IpedName>
            <Wrrapper.IpedTitle>Neque porro quisquam est qui dolorem ipsum quia dolor 
                sit amet, consectetur, adipisci velit...</Wrrapper.IpedTitle>
                <Wrrapper.ipedPrice>$ 610.00 USD</Wrrapper.ipedPrice>
        </Wrrapper.IpedItem>
   </Wrrapper>
    </Container>
  )
}

export default SalleItems
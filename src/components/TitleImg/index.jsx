import React from 'react'
import { Container, Wrapper, WrapperImg } from './style'
import Mian from '../../assets/main.png'


export const TitleImg = () => {
  return (
    <Container>
     <WrapperImg>
     <Wrapper>
        <Wrapper.Title>The new phones are here take a look.</Wrapper.Title>
        <Wrapper.Titles>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Scelerisque in est dui, aliquam, tempor.
           Faucibus morbi turpis.</Wrapper.Titles>
           <Wrapper.Btn>Explore</Wrapper.Btn>
      </Wrapper>
      <img src={Mian} alt="" />
     </WrapperImg>
    </Container>
  )
}

export default TitleImg
import React from 'react'
import logo from '../../assets/logo.svg'
import { Container, Title, Titles, Wrapper } from './style'


export const Footer = () => {
  return (
    <Container>
     <Wrapper>
        <Titles>
            <Titles.Logo src={logo} alt="" />
            <Titles.Items>Sign up for texts to be notified</Titles.Items>
        </Titles>
        <Title>
            <Title.Paragraph>All products</Title.Paragraph>
            <Title.Paragraphs>Phones</Title.Paragraphs>
            <Title.Paragraphs>Watch</Title.Paragraphs>
            <Title.Paragraphs>Tablet</Title.Paragraphs>
            <Title.Paragraphs>PLaptopshones</Title.Paragraphs>
        </Title>
        <Title>
<Title.Paragraph>Company</Title.Paragraph>
<Title.Paragraphs>About</Title.Paragraphs>
<Title.Paragraphs>Support</Title.Paragraphs>
</Title>
<Title>
<Title.Paragraph>Support</Title.Paragraph>
<Title.Paragraphs>Style Guide</Title.Paragraphs>
<Title.Paragraphs>Licensing</Title.Paragraphs>
<Title.Paragraphs>Change Log</Title.Paragraphs>
<Title.Paragraphs>Contact</Title.Paragraphs>
</Title>
<Title>
<Title.Paragraph>Follow Us</Title.Paragraph>
<Title.Paragraphs>Instagram</Title.Paragraphs>
<Title.Paragraphs>Facebook</Title.Paragraphs>
<Title.Paragraphs>LinkedIn</Title.Paragraphs>
<Title.Paragraphs>Youtube</Title.Paragraphs>
</Title>
     </Wrapper>
    </Container>
  )
}

export default Footer















{/* <Title>
<Title.Paragraph>Company</Title.Paragraph>
<Title.Paragraphs>About</Title.Paragraphs>
<Title.Paragraphs>Support</Title.Paragraphs>
</Title>
<Title>
<Title.Paragraph>Support</Title.Paragraph>
<Title.Paragraphs>Style Guide</Title.Paragraphs>
<Title.Paragraphs>Licensing</Title.Paragraphs>
<Title.Paragraphs>Change Log</Title.Paragraphs>
<Title.Paragraphs>Contact</Title.Paragraphs>
</Title>
<Title>
<Title.Paragraph>Follow Us</Title.Paragraph>
<Title.Paragraphs>Instagram</Title.Paragraphs>
<Title.Paragraphs>Facebook</Title.Paragraphs>
<Title.Paragraphs>LinkedIn</Title.Paragraphs>
<Title.Paragraphs>Youtube</Title.Paragraphs>
</Title> */}
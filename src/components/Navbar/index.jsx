import React,{useState} from 'react'
import { Container, ItemsLogo, Logo, NavItem,  } from './style'
import {navbar} from '../../utils/navbar'
import logo from '../../assets/logo.svg'
import search from '../../assets/search.svg'
import Frame from '../../assets/Frame.svg'



export const NavBar = () => {
    const [title,setTitle] = useState(navbar)
  return (
    <Container>
        <Logo src={logo}/>
        <NavItem>
        {title.map((value) => (
            <NavItem.Link key={value.id}>{value.title}</NavItem.Link>
        ))}
        </NavItem>
        <ItemsLogo>
            <ItemsLogo.Logos src={search}/>
            <ItemsLogo.Logos src={Frame}/>
        </ItemsLogo>
    </Container>
  )
}

export default NavBar
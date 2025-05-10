import styled from "styled-components";
import { Link } from "react-router-dom";
import pizzaImage from '../../../assets/prosciutto.jpg'


export const NavbarContainer = styled.nav`
  height: 80px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0;
`

export const NavbarLogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  cursor: pointer;
  user-select: none;
  img {
    max-width: 100%;
    height: 70px;
    z-index: 20;
    
  }
  @media  ${({theme}) => theme.devices.laptop} {
    img {
      width: 60px;
    }
  }
`

export const NavbarLogo = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: 28px;
  background-image: url(${pizzaImage});
  background-size: cover;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 0.5px black;
  z-index: 20;
  margin: 0;
  @media  ${({theme}) => theme.devices.laptop} {
    font-size: 25px;
  }
`

export const NavbarLinks = styled.div`
  display: flex;
  gap: 90px;
  margin-right: 100px;
  user-select: none;
  @media  ${({theme}) => theme.devices.laptop} {
    gap: 70px;
    margin-right: 60px;
  }
  @media  ${({theme}) => theme.devices.tablet} {
    display: none;
    flex-direction: column;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: #fff;
    z-index: 10;
    padding: 2rem 1rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    opacity: 0.7;
  }

  &.responsive_nav {
    display: flex;
    height: 100vh;
  }
`

export const NavbarLink = styled(Link)`
  text-decoration: none;
  font-size: 15px;
  font-weight: 650;
  color: black;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  span {
    border: 2px solid black;
    padding: 10px 20px;
    border-radius: 10px;

    &:hover{
      background-color: hsla(36, 55.60%, 78.80%, 0.79);
      border-color: hsla(36, 55.60%, 78.80%, 0.79);
      transition: all ease 0.3s;
      opacity: 1;
    }
  }
  &:hover{
    opacity: 0.7;
  }
  @media  ${({theme}) => theme.devices.laptop} {
    font-size: 14px;
    span {
      padding: 8px 18px;
    }
  }
`


export const NavbarHamburger = styled.div`
  display: none;
  z-index: 15;
  margin-right: 30px;
  @media ${({theme}) => theme.devices.tablet} {
    display: block;
  }

`
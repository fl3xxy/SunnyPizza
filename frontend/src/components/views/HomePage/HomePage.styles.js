import styled from 'styled-components'
import { Link } from "react-router-dom";
import pizzaImage from '../../../assets/prosciutto.jpg'


export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 300px;
  &::before {
   content: '';
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background-image: url(${pizzaImage});
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   opacity: 0.3;
   z-index: -1;
  }
`


export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`


export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  
`


export const Info = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: 'Montserrat', sans-serif;
  font-size: 17px;
  font-weight: 700;
  color: rgba(83, 42, 1, 0.8);
  cursor: pointer;
  user-select: none;
  &:hover {
    opacity: 0.4;
    transition: opacity 2s ease;
  }
  
  @media  ${({theme}) => theme.devices.laptop} {
    font-size: 15px;
  }
  @media  ${({theme}) => theme.devices.tablet} {
    font-size: 13px;
  }
  @media  ${({theme}) => theme.devices.mobile} {
    font-size: 11px;
  }
`


export const Logo = styled.p`
  font-size: 100px;
  font-weight: 900;
  font-family: 'Montserrat', sans-serif;
  background-image: url(${pizzaImage});
  background-size: cover;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1.5px black;
  color: transparent;
  text-align: center;
  text-decoration: none;
  cursor: default;
  user-select: none;
  margin: 0;
  &:hover {
    opacity: 0.7;
    transition: opacity 0.3s ease;
  }

  @media  ${({theme}) => theme.devices.laptop} {
    font-size: 80px;
    -webkit-text-stroke: 1.2px black;
  }
  @media  ${({theme}) => theme.devices.tablet} {
    font-size: 75px;
    -webkit-text-stroke: 1.2px black;
  }
  @media  ${({theme}) => theme.devices.mobile} {
    font-size: 50px;
    -webkit-text-stroke: 1.2px black;
  }
  
`


export const HomeButton = styled(Link)`
  padding: 20px 30px;
  border-radius: 20px;
  font-size: 17px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 650;
  user-select: none;
  text-decoration: none;
  color: black;
  background-color: beige;
  border: 2px solid beige;


 &:hover {
    color: black;
    background-color: transparent;
    border: 2px solid black;
    transition: all ease 1s;
  }

  @media  ${({theme}) => theme.devices.laptop} {
    padding: 18px 30px;
    font-size: 15px;
  }
  @media  ${({theme}) => theme.devices.tablet} {
    padding: 15px 28px;
    font-size: 14px;
  }
  @media  ${({theme}) => theme.devices.mobile} {
    padding: 12px 26px;
    font-size: 14px;
  }
  
`
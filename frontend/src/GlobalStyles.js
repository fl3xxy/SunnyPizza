import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
  html {
    position: relative;
    min-height: 100%;
  } 
  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: Arial;
  }
`;
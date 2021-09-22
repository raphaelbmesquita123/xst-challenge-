import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  html{
    @media (max-width: 1080px){
        font-size: 93.75%; //15px
    }

    @media (max-width: 720px){
        font-size: 87.5%; //14px
    }
  }

  body, input, button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: 1px;
  }

  body{
    background-color: var(--gray);
  }

  h1, h2, h3, h4, h5, h6, strong, small{
    font-weight: 600;
  }

  button{
    cursor: pointer;
  }

  :root{
    --blue-900: #1B264F;
    --blue-700: #1C2854;
    --blue-500: #274690;
    --blue-100: #1375BB;
    --blue-50: #44A9DE;
    --gray: #EBEBEB;
    --white: #ffffff
  }

`

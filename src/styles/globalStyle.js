import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100vh;
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1920px;
  }

  body {
    background: #191920;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #000;
    font-size: 14px;
    font-family: Roboto;
  }

  button {
    cursor: pointer;
  }
`

import { createGlobalStyle } from 'styled-components'

const Fonts = createGlobalStyle`
  @font-face {
    font-family: "SF Display";
    font-weight: 400;
    src: url("https://sf.abarba.me/SF-UI-Display-Regular.otf");
  }

  @font-face {
    font-family: "SF Display";
    font-weight: 800;
    src: url("https://sf.abarba.me/SF-UI-Display-Heavy.otf");
  }

  @font-face {
    font-family: "SF Display";
    font-weight: 300;
    src: url("https://sf.abarba.me/SF-UI-Display-Thin.otf");
  }
  
  * {
    font-family: 'SF Display', sans-serif;
  }
`

export default Fonts
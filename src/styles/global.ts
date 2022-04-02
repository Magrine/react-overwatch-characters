import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: "Noodle";
  src: url("../Assets/Fonts/big_noodle_titling_oblique.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

:root {
  --black: #333;
  --selected: #ff8900;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}
html,body{
  background-color: #e3e3e3;
  font-family: Roboto,Helvetica Neue,Arial,sans-serif;
  justify-content:center;
  background: linear-gradient(173deg, rgba(152,161,202,1) 0%, rgba(254,250,247,1) 74%, rgba(255,254,255,1) 100%);
  

}

`;

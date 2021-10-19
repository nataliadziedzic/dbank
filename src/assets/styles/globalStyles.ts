import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
}
html {
  overflow: hidden;
  font-size: 16px;
}
body {
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(
    to right top,
    #7ca5c9,
    #7193b0,
    #678197,
    #5d707f,
    #535f68,
    #566068,
    #586268,
    #5b6368,
    #6c777f,
    #7d8c96,
    #8fa1ae,
    #a1b6c7
  );
}
#root, .App {
  height: 100%;
  width: 100%;
}
h1,
h2, .header {
  letter-spacing: 1px;
  text-shadow: 1px 1px #000;
}
.header {
  width: 100%;
  padding: 1rem 2rem;
  background-color: #1a1a1a94;
  font-size: 1.5rem;
  color: #fff;
}
`

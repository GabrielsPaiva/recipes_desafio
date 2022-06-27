import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Footer from './components/Footer/Footer';

// components
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
`

export default class App extends React.Component {
  render() {
    return (
      <div>
        <GlobalStyle/>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}

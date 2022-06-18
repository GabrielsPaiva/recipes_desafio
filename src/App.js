import React from 'react';

// components
import Header from './components/Header';
import Main2 from "./components/Main2.js"

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Main2/>
      </div>
    )
  }
}

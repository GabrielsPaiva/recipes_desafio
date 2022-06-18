import React from 'react';

// components
import Header from './components/Header';
import MainSpoonPart from './components/MainSpoonPart';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <MainSpoonPart/>
      </div>
    )
  }
}
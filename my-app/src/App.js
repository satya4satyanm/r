import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/header/Header'
import Left from './components/left/Left'
import Canvas from './components/canvas/Canvas'
import Resources from './components/resources/Resources'
import Footer from './components/footer/Footer'


import jdata from './j.json';

class App extends React.Component {

  getData() {
    return jdata.name;
  }

  render() {
    return (
      <div className="App">
      <Header txt="This is my head" />

        <header className="App-header">
          
      <Left />
      <Canvas txt="Design Area" />
      <Resources txt="Resources" />

        </header>
        {this.getData()}
        <Footer />
      </div>
    );
    }
}

export default App;

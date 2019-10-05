import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/header/Header'
import Left from './components/left/Left'
import Canvas from './components/canvas/Canvas'
import Resources from './components/resources/Resources'
import Footer from './components/footer/Footer'
import DocumentMeta from 'react-document-meta';

import jdata from './j.json';

class App extends React.Component {

  getData() {
    return jdata.name;
  }

  render() {
    const meta = {
      title: 'Reactjs Product Customization Application',
      description: 'Reactjs Product Customization Application',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'Reactjs, Product, Customization, Application'
        }
      }
    };

    return (
      <DocumentMeta {...meta}>
      <div className="App">
        <Header txt="Reactjs Product Customization Application" />
        <header className="App-header">
          <Left />
          <Canvas txt="Design Area" />
          <Resources txt="Resources" />
        </header>
        {this.getData()}
        <Footer />
      </div>
      </DocumentMeta>
    );
  }
}

export default App;

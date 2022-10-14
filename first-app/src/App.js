// import './app.scss';
import React, { Component } from 'react';
import {BrowserRouter} from "react-router-dom"
// import {Nav,Content,Footer} from "react-router-dom"
// import ReactRouter from './ReactRouter';
import Nav from './Nav';
import Content from './Content';
import Footer from './Footer';

class App extends Component {

  render() {
    return (
      // <BrowserRouter>
      <>
      <BrowserRouter>
      <Nav/>
      <Content/>
      <Footer/>
      {/* <ReactRouter/> */}
      </BrowserRouter>

      </>
      // </BrowserRouter>
    );
  }
}

export default App;

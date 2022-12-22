import './App.css';
import React, { Component } from 'react';
// import Hooks from './Hooks';
// import HooksTest from './HooksTest';
import HooksNext from './HooksNext';
class App extends Component {
  state = {
    value: true
  }
  render() {
    return (
      <>
      {/* <Hooks></Hooks> */}
        {/* <button onClick={()=>{this.setState({value: !this.state.value})}}>컴포넌트 바껴라!</button>
        <hr />
        <HooksTest></HooksTest> */}
        <HooksNext></HooksNext>
      </>
    );
  }
}

export default App;

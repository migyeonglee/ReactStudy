import React, { Component } from "react";
import './App.css';
import Ref from './ref';
import ScrollBox from './ScrollBox';
import LifeCycle from './lifeCycle';
// 색상 코드 return 하는 코드
function getRandomColor() {
  // floor : random 하는 숫자 가져옴
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
class App extends Component {
  state = {
    color: "#000000",
    value: true,
  };

  handleClick = () => {
    this.setState({
      // 컴포넌트 밖에 선언되어 있음
      color: getRandomColor(),
    });
  };

  render() {
  return (
   <>
   
     <Ref></Ref>
     <hr />
    <ScrollBox></ScrollBox>
    <hr />
    <div>
        <button onClick={()=>{this.setState({value: !this.state.value})}}>컴포넌트 바껴라!</button>
        <button onClick={this.handleClick}>랜덤 색상</button>
        { this.state.value ? <LifeCycle color={this.state.color} /> : <div />}
     </div>
     <hr />

    
   </>
  );
}
}

export default App;



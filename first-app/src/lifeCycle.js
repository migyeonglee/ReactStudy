import React, { Component } from 'react';

class LifeCycle extends Component {
    state = {
        number: 0,
        color: 'purple',
    }
 
    myRef = null; // ref를 설정할 부분
 
    constructor(props) {
        super(props);
        console.log( 'constructor' );
    }
        //  props가 변경될 때 선언 
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps');
 
        if(nextProps.color !== prevState.color) {
            return {color: nextProps.color};
        }
        return null;
    }
 
    componentDidMount() {
        console.log('componentDidMount');
    }
 
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
 
        return nextState.number % 10 !== 4;
        // 숫자의 마지막 자리가 4면 리렌더링하지 않음.
    }
 
    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        });
    }
 
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
 
        if(prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }
        return null;
    }
 
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState);
 
        if(snapshot) {
            console.log('업데이트되기 직전 색상 : ', snapshot);
        }
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
 
    render() {
        console.log('render');
 
        const style = {
            color: this.props.color
        };
 
        return(
            <>
                <h1 style={style} ref={ref => this.myRef=ref}>{this.state.number}</h1>
 
                <p>color: {this.state.color}</p>
 
                <button onClick={this.handleClick}>더하기</button>
            </>
        )
    }
}

export default LifeCycle;
/*
mount => DOM이 생성되고 웹 브라우저상에 나타나는 것
마운트 시 호출되는 메서드
- constructor
- render
- getDerivedStateFromProps
- componentDidMount
*/

/*
update => Props 나 state가 바뀌었을 때 업데이트 하는 것
업데이트될 때 호출되는 메서드
- getDerrivedStateFromProps
- shouldComponentUpdate
- componentDidUpdate
*/

/*
unmount => 컴포넌트가 화면에서 사라질(제거될) 때
- comopnentWillUnmount
*/

/* 예시 LifeCycleTest.js
import { Component } from 'react';

class LifeCycleTest extends Component {
    state = {
        number: 0,
        color: 'purple',
    }
 
    myRef = null; // ref를 설정할 부분
 
    constructor(props) {
        super(props);
        console.log( 'constructor' );
    }
 
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps');
 
        if(nextProps.color !== prevState.color) {
            return {color: nextProps.color};
        }
        return null;
    }
 
    componentDidMount() {
        console.log('componentDidMount');
    }
 
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
 
        return nextState.number % 10 !== 4;
        // 숫자의 마지막 자리가 4면 리렌더링하지 않음.
    }
 
    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        });
    }
 
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
 
        if(prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }
        return null;
    }
 
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState);
 
        if(snapshot) {
            console.log('업데이트되기 직전 색상 : ', snapshot);
        }
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
 
    render() {
        console.log('render');
 
        const style = {
            color: this.props.color
        };
 
        return(
            <div>
                <h1 style={style} ref={ref => this.myRef=ref}>
                    {this.state.number}
                </h1>
 
                <p>
                    color: {this.state.color}
                </p>
 
                <button onClick={this.handleClick}>
                    더하기
                </button>
            </div>
        )
    }
}

export default LifeCycleTest;


*/
/* 예시 App.js 

import React, { Component } from "react";
import LifeCycleTest from "./LifeCycleTest";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: "#000000",
    value: true,
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <div>
          <button onClick={()=>{this.setState({value: !this.state.value})}}>컴포넌트 바껴라!</button>
        </div>

        <button onClick={this.handleClick}>
          랜덤 색상
        </button>

        { this.state.value ? <LifeCycleTest color={this.state.color} /> : <div />}
      </div>
    );
  }
}

export default App;

*/
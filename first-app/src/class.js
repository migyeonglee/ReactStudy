
import React,{ Component } from "react";
// import PropTypes from "prop-types";
class ClassState extends Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         number : 0,
    //         text : "안녕하세요"
    //     };
    // }
    constructor(props){
        super(props);
        this.state={
            number :0,
            name : "이미경"
        }
        this.changeNumber=this.changeNumber.bind(this)
        this.changeName=this.changeName.bind(this)
    }
changeNumber(){
    this.setState({number : this.state.number+1});
}
changeName(){
    this.setState({name : "모르겠네"})
}
    consoleLog(name){
        console.log(name, "안녕")
    }
    render(){
        // const {number , text} = this.state;


        return(
            <>
          {/* <h1>number : {number}</h1>
          <h1>text : {text}</h1>
          <button onClick={()=>{
              
              this.setStatWe((prev)=>({number: prev.number+1}))
              this.setState((prev)=>{
                return{number: prev.number+1}
            })
            // this.setState({number: this.state.number + 1})
        }}>change</button> */}
        <h1>실습</h1>
        {/* <button onClick={this.consoleLog.bind(this,"이미경")}>버튼</button> */}
        <h1>{this.state.number}</h1>
        <button onClick={this.changeNumber}>+1</button>
        <h1>{this.state.name}</h1>
        <button onClick={this.changeName}>changeString</button>


            </>
        )
    }
}
export default ClassState;

/*
클래스 형 
메서드 미리 선언

1. 화살표 함수로 선언 하지 않았을 경우
메서드 내 this가 달라짐 (undefind)
- this가 class의 this 아님
- 메서드 내 this를 바꿔줘야 함, bind () 함수 사용


2. 화살표 함수 사용
- this가 class의 this가 됌


*/
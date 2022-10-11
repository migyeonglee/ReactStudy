
import React,{ Component } from "react";
// import PropTypes from "prop-types";
class ClassState extends Component{
    
    constructor(props){
        super(props);
        this.state={
            number :0,
            name : "이미경"
        }
        this.changeNumber=this.changeNumber.bind(this)
        this.changeName=this.changeName.bind(this)
    }
changeNumber=(e)=>{
    console.log(e.target.innerText)
    this.setState({number : this.state.number+1});
}
// changeNumber(){
//     this.setState({number : this.state.number+1});
// }
changeName(){
    this.setState({name : "모르겠네"})
}
    consoleLog(e,name){
        console.log(e.target.innerText);
        console.log(name, "안녕")
    }
    render(){
        // const {number , text} = this.state;

        return(
            <>
          
        <h1>실습</h1>
        {/* <button onClick={this.consoleLog.bind(this,"이미경")}>버튼</button> */}
        <h1>{this.state.number}</h1>
        <button onClick={(e)=>{this.changeNumber(e)}}>+1</button>
        <h1>{this.state.name}</h1>
        {/* <button onClick={this.changeName}>changeString</button> */}
        <button onClick={(e)=>this.consoleLog(e,"반가워")}>changeString</button>


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
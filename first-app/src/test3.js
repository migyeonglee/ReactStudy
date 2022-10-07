
import React,{ Component } from "react";
class Test3 extends Component{
 
    constructor(props){
        super(props);
        this.state={
            text : "검정색 글씨",
            color : "black",
        }
        this.changeRed=this.changeRed.bind(this)
        this.changeBlue=this.changeBlue.bind(this)
    }

changeRed(){
    this.setState({text : "빨간색 글씨",color : "red"})
}
changeBlue(){
    this.setState({text : "파란색 글씨", color: "blue"})
}

    render(){
        return(
            <>
        <h1>실습</h1>
        <h1 style={{color : this.state.color}}>{this.state.text}</h1>
        <button onClick={this.changeRed}>빨간색</button>
        <button onClick={this.changeBlue}>파란색</button>
            </>
        )
    }
}
export default Test3;


import React,{ Component } from "react";
class Handler extends Component{
 
    constructor(props){
        super(props);
        this.state={
            string : "Hello World!"
        }
        this.change=this.change.bind(this)
    }

change(){
    this.setState({string : "Goodbye World!"})
}
    consoleLog(e,name){
        console.log(e.target.innerText);
        console.log(name, "안녕")
    }
    render(){

        return(
            <>
        
        <h1>실습</h1>
        <h1>{this.state.string}</h1>
        <button onClick={this.change}>버튼</button>
            </>
        )
    }
}
export default Handler;

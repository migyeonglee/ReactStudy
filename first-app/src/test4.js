
import React,{ Component } from "react";
class Test3 extends Component{
 
    constructor(props){
        super(props);
        this.state={
            text : "얍! :)",
        }
        this.remove=this.remove.bind(this)
        this.changeBlue=this.changeBlue.bind(this)
    }

    remove(){
    this.setState({text : ""})
}
changeBlue(){
    this.setState({text : "파란색 글씨", color: "blue"})
}

    render(){
        return(
            <>
        {/* <h1>실습</h1> */}
        <br />
        <button onClick={this.remove}>사라져라</button>
        <h1>{this.state.text}</h1>
            </>
        )
    }
}
export default Test3;

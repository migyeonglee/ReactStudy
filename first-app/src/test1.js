
import React,{ Component } from "react";
// import PropTypes from "prop-types";
class Test1 extends Component{
    constructor(props){
        super(props);
        this.state = {
            number : 0,
            text : "안녕하세요"
        };
    }
    render(){
        const {number} = this.state;
        return(
            <>
          <h1>number : {number}</h1>
          <button onClick={()=>{this.setState({number: this.state.number + 2})}}>+2</button>
          <button onClick={()=>{this.setState({number: this.state.number -1})}}>-1</button>
            </>
        )
    }
}
export default Test1;

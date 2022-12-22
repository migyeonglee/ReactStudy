// import { Component } from "react";

// class Test extends Component{
//     render(){
    function Test(){
        let name = "이미경";
        let my_style = {
            backgroundColor : "blue",
            color : "orange",
            fontSize : "40px",
            padding : "12"
        }
        return(
            <>
            <div style={my_style}>{name}</div>
            </>
        )
    }
// }
export default Test;
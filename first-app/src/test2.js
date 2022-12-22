// import { Component } from "react";
import myImg from './img/97138102.png';
// class Test2 extends Component{
    // render(){
        function Test2(){
        let style ={
            color : "orange",
            fontSize : "40px",
            marginTop : "20"
        }
        return(
            <>
           <div style={style}><h2>안녕하세요</h2></div>
           <div style={style}><img src={myImg} alt="" /></div>
            </>
        )
    }
// }
export default Test2;
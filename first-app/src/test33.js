import React, {useState} from "react";
const Test33 = () => {
    
    const [ text,changeText]=useState("검정색 글씨");
    const [ textColor,changeColor]=useState("black");
    const changeRed = ()=>{
        changeText("주황색 글씨");
        changeColor("orange");
    }
    const changeBule = ()=> {
        changeText("초록색 글씨")
        changeColor("green");
    }
        return (
            <>
           <h1 style={{color : textColor}}>{text}</h1>
           <button onClick={changeRed}>주황색</button>
           <button onClick={changeBule}>초록색</button>
            </>
       )
};
export default Test33 ;
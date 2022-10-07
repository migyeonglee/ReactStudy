import React, {useState} from "react";
const Test44 = () => {
    
    const [ text,changeText]=useState("이얍!");
    const remove = ()=>{
        changeText("");
    }
    const add = ()=>{
        changeText("히힛 :)");
    }
    
        return (
            <>
           <h1>{text}</h1>
           <button onClick={remove}>사라져라</button>
           <button onClick={add}>나타나라</button>
            </>
       )
};
export default Test44 ;
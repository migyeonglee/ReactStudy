import React, {useState} from "react";
// import PropTypes from "prop-types";
const FunctionState = (props) => {

    
    let [ number,setNumber]=useState(0);
    // const changeNumber = () => {setNumber(number+1)}
    const changeNumber = (e) => {
        console.log(e.target.innerText)
        setNumber(number+1)}
    return (
            <>
           <h1>{number}</h1>
           <button onClick={()=>{setNumber(number+1)}}>+1</button>
           <button onClick={(e)=>{changeNumber(e)}}>+1</button>
           {/* <button onClick={changeNumber}>+1</button> */}
            </>
       )
};
export default FunctionState ;
import React, {useState} from "react";
// import PropTypes from "prop-types";
const Test2 = (props) => {

    
    let [ number,setNumber]=useState(0);
    const Increase = () => {setNumber(number+1)}
    const Decrease = () => {setNumber(number-2)}
    return (
            <>
           <h1>{number}</h1>
           <button onClick={Increase}>+1</button>
           <button onClick={Decrease}>-2</button>
            </>
       )
};
export default Test2 ;
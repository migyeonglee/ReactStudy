import React,{useMemo, useRef, useState} from 'react';

const HooksNext = () => {
    let [list, setState]=useState([]);
    let [text, setTaxt]=useState("");
    let addNumber = () =>{
        let newList = list.concat((Number)(inputNumber.current.value));
        setState(newList);
    }
    let inputNumber = useRef(null);

    let getAvg =()=>{
        if(list.length === 0) return 0;
        const sum = list.reduce((a, b)=> (a + b));
        return sum / list.length;
    }
    let Avg = useMemo(()=>{return getAvg()},[list])
    return (
        <>
                <input ref={inputNumber}type="text" onChange={(e)=>{setTaxt(e.target.value)}} />
            <div>
                <input ref={inputNumber}type="number" />
                <button onClick={addNumber}>추가</button>
            </div>
            {Avg}
            <ul>
                {list.map((value, index)=>{
                    return <li key={index}>{value}</li>
                })}
            </ul>
        </>
    );
};

export default HooksNext;
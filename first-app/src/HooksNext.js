import React,{useCallback, useMemo, useRef, useState} from 'react';

const HooksNext = () => {
    let [list, setState]=useState([]);
    let [text, setText]=useState("");
    // let addNumber = () =>{
    //     let newList = list.concat((Number)(inputNumber.current.value));
    //     setState(newList);
    // }
    let inputNumber = useRef(null);
    
    let buttonClick = useCallback( () => {
        setText("test");
    },[]);
    
    let addNumber =useCallback( () =>{
        let newList = list.concat((Number)(inputNumber.current.value));
        setState(newList);
    },[list]);
    let getAvg =()=>{
        if(list.length === 0) return 0;
        const sum = list.reduce((a, b)=> (a + b));
        return sum / list.length;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    let Avg = useMemo(()=>{return getAvg()},[list])
    return (
        <>
                <input value={text} type="text" onChange={(e)=>{setText(e.target.value)}} />
                <button onClick={buttonClick}>test로 변경</button>
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
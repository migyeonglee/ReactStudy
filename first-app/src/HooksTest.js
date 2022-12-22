import React, {useEffect, useRef, useState} from 'react';

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

const HooksTest = () => {
    let [width, setWidth] = useState(0);

    const setResize = () => {
        setWidth(window.innerWidth)
    }
    let box = useRef(null);
    useEffect(()=>{
        console.log("mount");
        var num = 0;
        var time = setInterval(()=>{
            console.log("time : ", num++);
        },1000);
        window.addEventListener('resize',setResize)

        // 컴포넌트가 사라지기 (update) 전에 실행 시키고자 할때 => 함수 return
        return()=>{
            clearInterval(time);
        }
    },[]);
    useEffect(()=>{
        box.current.style.backgroundColor = getRandomColor();
    },[width]);
    return (
        <>
        <div ref={box} onChange={(e)=>{setWidth(e.target.value)}}>
            width가 변할 때마다 배경 색상이 바뀌어요. 
        <br />
         width : {width}
    </div>
        </>
    );
};

export default HooksTest;
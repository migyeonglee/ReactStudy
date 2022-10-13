import React, {useEffect, useRef, useState} from 'react';

const Hooks = () => {
    let [name, setName] = useState();
    let [pw, setPw] = useState();

    let input = useRef(null);


    useEffect(()=>{
        console.log("mount");
        var num = 0;
        var time = setInterval(()=>{
            console.log("time : ", num++);
        },1000);
        // 컴포넌트가 사라지기 (update) 전에 실행 시키고자 할때 => 함수 return
        console.log(input.current)
        return()=>{
        clearInterval(time);
        }
    },[]);
    useEffect(()=>{
        console.log("update");
    },[name]);
    // 배열안에 넣어주는 값에 따라 바뀔떄만 실행하고 싶을 때

    useEffect(()=>{
        console.log("update2");
    },[name,pw]);


    return (
        <>
    <input ref={input} onChange = {(e)=>{setName(e.target.value)}} />
    {name}
    <input type="password" onChange = {(e)=>{setPw(e.target.value)}} />
    {pw}
        </>
    );
};

export default Hooks;

/*
Hooks ?
- React의 새 기능
- class 컴포넌트에서만 가능했던 state (상태관리)와 lifecylce (라이프 사이클)이 가능하도록 도와주는 기능

사용규칙
- 최상위 단계에서만 호출 가능
    최상위 컴포넌트
    반복문, 조건문, 중첩된 함수 내부에서 호출하면 안되는 것

- Hook은 오로지 React 함수형 컴포넌트에서만 호출 가능

Hooks 종류
- useState()
    함수형 컴포넌트 상태에서 상태관리를 위해 사용
    동적 상태 관리
    가장 기본적인 Hook으로 함수형 컴포넌트에서 가변적인 상태를 지니게 해줌
    클래스형 컴포넌트에서의 State
- useEffect()
    sideEffect를 수행 => mount/unmount/ update
    클래스형 컴포넌트의 componentDidMount와 componentDidUpdate가 합쳐진 형태
    컴포넌트가 rendering 될 때마다 특정 작업 수행
    mount(처음 렌더링)될때만 실행

- useReducer()
- useMemo()
- useCallback()
- useRef()
    함수형 컴포넌트에서 ref를 사용하기 쉽게 만들어주는 Hook
    인자를 받은 값으로 초기화된 변경 가능한 ref 객체를 반환
    ref.current로 현재 가리키는 객체에 접근 가능
*/
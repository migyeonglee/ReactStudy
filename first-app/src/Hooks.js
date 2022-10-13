import React, { useReducer} from 'react';
function reducer(state, action){
    // eslint-disable-next-line default-case
    switch (action.type){
        case "INCREMENT":
            return state +1;
        case "DECREMENT":
            return state -1;
        default:
            return state;
    }
}
const Hooks = () => {
    // let [name, setName] = useState();
    // let [pw, setPw] = useState();

    // let input = useRef(null);
    
    
    // useEffect(()=>{
    //     console.log("mount");
    //     var num = 0;
    //     var time = setInterval(()=>{
    //         console.log("time : ", num++);
    //     },1000);
    // // 컴포넌트가 사라지기 (update) 전에 실행 시키고자 할때 => 함수 return
    //     console.log(input.current)
    //     return()=>{
    //     clearInterval(time);
    //     }
    // },[]);
    // useEffect(()=>{
        //     console.log("update");
    // },[name]);
    // // 배열안에 넣어주는 값에 따라 바뀔떄만 실행하고 싶을 때
    
    // useEffect(()=>{
        //     console.log("update2");
    // },[name,pw]);

                                    // 함수, 값
    let [number, dispatch] = useReducer(reducer, 0);

    return (
        <>
    {/* <input onChange = {(e)=>{setName(e.target.value)}} />
    {name}
    <input type="password" onChange = {(e)=>{setPw(e.target.value)}} />
    {pw} */}
    
    <h1>{number}</h1>
    <button onClick={()=>{dispatch({type : "INCREMENT"})}}>+1</button>
    <button onClick={()=>{dispatch({type : "DECREMENT"})}}>+1</button>
        </>
    );
};

export default Hooks;

/*
Hooks ?
- React의 새 기능
- class 컴포넌트에서만 가능했던 state (상태관리)와 lifecycle (라이프 사이클)이 가능하도록 도와주는 기능

사용규칙
- 최상위 단계에서만 호출 가능
    최상위 컴포넌트
    반복문, 조건문, 중첩된 함수 내부에서 호출하면 안되는 것

- Hook은 오로지 React 함수형 컴포넌트에서만 호출 가능

Hooks 종류
- useState() ***
    함수형 컴포넌트 상태에서 상태관리를 위해 사용
    동적 상태 관리
    가장 기본적인 Hook으로 함수형 컴포넌트에서 가변적인 상태를 지니게 해줌
    클래스형 컴포넌트에서의 State
- useEffect() ***
    sideEffect를 수행 => mount/unmount/ update
    클래스형 컴포넌트의 componentDidMount와 componentDidUpdate가 합쳐진 형태
    컴포넌트가 rendering 될 때마다 특정 작업 수행
    mount(처음 렌더링)될때만 실행

- useReducer()
    state를 좀더 효율적으로 사용하기 위해
Reducer ?
- 현재 상태와 업데이트를 위해 필요한 정보를 담은 액션값을 전달받아 새로운 상태를 반환하는 함수

///////////////////////////////선생님 코드///////////////////////////////////////////////

import { useReducer } from "react";

function reducer(state, action){
    switch( action.type ) {
        case "INCREMENT":
            return { ...state, number: state.number + 1 };
        case "DECREMENT":
            return { ...state, number: state.number - 1 };
        default: 
            return state;
    }
}

const HookTest = () =>{
    let [ state, dispatch ] = useReducer(reducer, {number: 0, text: ''});

    return(
    <>  
        <h1>{state.number}</h1>
        <button onClick={()=>{ dispatch({type: "INCREMENT"}) }}>+1</button>
        <button onClick={()=>{ dispatch({type: "DECREMENT"}) }}>-1</button>
    </>
    );
}
export default HookTest;
/////////////////////////////////////////////////////////////////////////////

- useMemo()


- useCallback()


- useRef() ***
    함수형 컴포넌트에서 ref를 사용하기 쉽게 만들어주는 Hook
    인자를 받은 값으로 초기화된 변경 가능한 ref 객체를 반환
    ref.current로 현재 가리키는 객체에 접근 가능
*/
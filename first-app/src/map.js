import React from 'react';
import { useState } from 'react';

const Map = () => {
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      //  let list = ["a","b","c","d","e"];
  //  items => 배열이 담김
  //  let items = list.map((value, id, arr) => {
//     console.log("value : ", value);
//     console.log("id : ", id);
//     console.log("arr : ", arr);
//     return value + id;
  //  })
   
// console.log('items : ',items)
  //  items = ['a0','b1','c2','d3','e4']
/* 
value : list를 순서대로 돌며 나오는 값
id : 방금 나온 값의 인덱스
arr : 현재 반복을 돌고 있는 배열
items : "return value + id;"로 만들어진 배열
*/
    // let list = ["a","b","c","d","e"];
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let listTemp =[
    {id :1, value : "a"},
    {id :2, value : "b"},
    {id :3, value : "c"},
    {id :4, value : "d"},
    {id :5, value : "e"},
];
    let [list, setList]=useState(listTemp);
    let [inputValue, setInput]=useState("");
let [inputId, setInputId]=useState(list.length+1);
    return (
        <>

        {/* <ul> */}
      {/* <li>a</li>
      <li>b</li>
      <li>c</li>
      <li>d</li>
      <li>e</li> */}
      {/* 위와 아래가 동일하게 나옴 , 콘솔에 error 뜨면 key값 지정해줄것 */}
      {/* map() 함수를이용해컴포넌트를생성할때“key”사용을권장한다.
        Why? React는 자율적으로 업데이트전 기존요소와 업데이트요소를 비교하는데 key를 사용한다 */}
      {/* {list.map((value, id) => {return <li key = {id}>{value}</li>})} */}
      {/* <Map></Map> */}
   {/* </ul> */}

{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <input type="text "  value={inputValue}onChange={(e)=> {setInput(e.target.value);}} />
        <button onClick={()=>{
            // id가 6인 곳에 추가 
            //  let newList = list.concat({id : 6, value : inputValue});
            let newList = list.concat({id : inputId, value : inputValue});
            setList(newList);
            setInputId(inputId+1);
            // 추가 시 input 창 안에 있는 text가 ""으로 변경되도록함
            setInput("");
            }}>추가</button>
        <ul>
             {/* {list.map((value) => {return <li key = {value.id}>{value.value}</li>})} */}
             {/* 자기 차례에 있는 값을 갖고 있음 */}
             {list.map((value) => {return <li key = {value.id}
             onDoubleClick={(e)=>{let newList= list.filter((value2)=>{
                 return value2.id !== value.id })
                setList(newList);
             }}>
                {value.value}</li>})}
        </ul>
{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        </>
    );
};

export default Map;
/*
[ map() ]
- map() 의 인자로 넘겨지는 callback 함수를 실행한 결과를 가지고 새로운 배열을 만들 시 사용
- 함수를 필요에 따라 반복문처럼 사용할 수도 있음

[함수 문법]
arr.map(callbackFunction, [thisArg])
- callbackFunction : 새 배열의 요소를 생성하는 함수 , currentValue, index, array 3개의 인수를 가질 수 있다.
- [this.Ang]는 생략 가능, callbackFunction에서 사용할 this 객체



*/
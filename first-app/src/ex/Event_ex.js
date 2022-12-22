import React from 'react';
import { useState } from 'react';
const Event_ex = () => {
    let userList =[
        {id:1, name : "코디", email: "codi@gmail.com"},
        {id:2, name : "윤소희", email: "yoonsohee@gmail.com"}
    ];
    let [user, setUser]=useState(userList);
    let [inputValue, setInput]=useState("");
    let [inputValue2, setInput2]=useState("");
    let [inputId, setInputId]=useState(user.length+1);
    const handleOnClick = (e) => {
        let newUser = user.concat({id :inputId, name: inputValue, email :inputValue2})
                setUser(newUser);
                setInputId(inputId+1);
                setInput("");
                setInput2("");
      };
      // 버튼에 적용할 클릭 이벤트 함수
      
      
      const handleOnKeyPress = e => {
        if (e.key === 'Enter') {
          handleOnClick(); // Enter 입력이 되면 클릭 이벤트 실행
        }
      };
      // 인풋에 적용할 Enter 키 입력 함수

    return (
        <>
            <input type="text" placeholder='이름' value={inputValue}onChange={(e)=> {setInput(e.target.value);}} />
            <input type="email"placeholder='이메일' value={inputValue2}onChange={(e)=> {setInput2(e.target.value);}} onKeyUp={handleOnKeyPress} />
            <button onClick={handleOnClick}>등록</button>

            <ul style={{listStyle:"none"}}>
            {user.map((value)=>{return <li style={{fontWeight:"bold"}}key = {value.id}
            onDoubleClick={(e)=>{let newList= user.filter((value2)=>{
                return value2.id !== value.id })
               setUser(newList);
            }} >
              {value.name} : {value.email}</li>})}
            </ul>

        </>
    );
};


export default Event_ex;
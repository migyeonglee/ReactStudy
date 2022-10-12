import React from 'react';
import { useState } from 'react';
const Test1 = () => {
    let m ={
        margin : "0px 10px"
    }
    let mt ={
        margin : "20px 10px"
    }
    let table = {
        textAlign : "center",
        border : "1px solid black",
        width : "500px"
    }
    let listTemp=[
    ]
    let [list, setList]=useState(listTemp);
    let [inputValue, setInput]=useState("");
    let [inputValue2, setInput2]=useState("");
    let [inputValue3, setInput3]=useState("");
    let [option, setOption]=useState("");
    let [inputId, setInputId]=useState(list.length+1);
    const OnClickE = (e) => {
        let newList = list.concat({id :inputId, title: inputValue2, name :inputValue})
        setList(newList);
        setInputId(inputId+1);
        setInput("");
        setInput2("");
    };
    const listSerch = (e)=>{
        let newList = list.filter((value)=>{
            if(option === "작성자"){
                return true
            } else{
                return true
            }
            
        })
        setInput3("");
    }
       
    
    return (
        <>
            <fieldset>
                <label style={m} htmlFor="name">작성자 :</label>
                <input style={m}type="text" id='name' value={inputValue}onChange={(e)=> {setInput(e.target.value);}}/>
                <label style={m}htmlFor="title">제목 :</label>
                <input style={m}type="text"id='title'value={inputValue2} onChange={(e)=> {setInput2(e.target.value);}}/>
                <button type='button' onClick={OnClickE}>작성</button>
            </fieldset>

            <select style={mt} onChange={(e)=> {setOption(e.target.value);}}>
                <option value="작성자">작성자</option>
                <option value="번호">번호</option>
            </select>
            <input style={m}type="text" placeholder='검색어'value={inputValue3} onChange={(e)=> {setInput3(e.target.value);}} />
            <button  type='button' onClick={listSerch}>검색</button>
            <button>전체</button>

            <table style={table} >
                <thead>
                <tr>
                    <th style={table}>번호</th>
                    <th style={table} >제목</th>
                    <th style={table} >작성자</th>
                </tr>
                </thead>
                <tbody>
                    {list.map((value)=>{
                        return <tr key = {value.id}>
                            <td style={table}>{value.id}</td>
                            <td style={table}>{value.title}</td>
                            <td style={table}>{value.name}</td>
                        </tr>
                    })}
                </tbody>
            </table>
            <h3>검색 결과</h3>
            <table style={table} >
                <thead>
                <tr>
                    <th style={table}>번호</th>
                    <th style={table} >제목</th>
                    <th style={table} >작성자</th>
                </tr>
                </thead>
                <tbody>
                    {list.filter((value2)=>{
                        return <tr key = {value2.id}>
                            <td style={table}>{value2.id}</td>
                            <td style={table}>{value2.title}</td>
                            <td style={table}>{value2.name}</td>
                        </tr>
                    })}
                </tbody>
            </table>
            
        </>
    );
};

export default Test1;
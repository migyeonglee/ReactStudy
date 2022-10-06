import './App.css';
// import FunctionComponent from './functionComponent';
// import Good from './good';
// import FunctionTest3 from './test2';
import TextProps from './test4';
// import PropTypes from './classComponent';

function App() {
    let valid = () =>{
        console.log("콘솔 띄우기 성공!")
    
    }
    return (
        <>
      {/* <div>실습</div>
<hr />
<Good></Good>
<hr />

<FunctionTest3 
title = "나의 하루는 4시 40분에 시작된다"
author = "김유진"
price = "13,500"
type = "자기 계발서"></FunctionTest3>

<hr /> */}

<TextProps text="App 컴포넌트에서 넘겨준 text props 입니다." button={valid} ></TextProps>

     
        </>     
    )
   
}
   
export default App;


// import logo from './logo.svg';
import { useSelector } from 'react-redux';
import {Box1Container} from"./containers/BoxesContainer";
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
// <div>{3+5===8 ? "정답입니다!" : "오답입니다!"}</div>
// <br />
// <div>{a>b && "a가 b보다 큽니다"}</div>
// <div className='test'>{title}</div>
// <div style={login}>아이디 : <input className='input' type="text" /></div>
// <div style={login}>비밀번호 : <input className='input' type="text" /></div>

// <div className='a'>
// <div className='red'></div>
// <div className='orange'></div>
// <div className='yellow'></div>
// <div className='green'></div>
// <div className='blue'></div>
// <div className='navy'></div>
// <div className='purple'></div>
// </div>
// <br />
// <br />
// <div className='q red'>
//     <div className='eye'>
//         <div className='mini'></div>
//     </div>
//     <div className='w orange'>
//         <div className='e yellow'>
//             <div className='r green'>
//                 <div className='t blue'>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
// <img className='img' src={img} alt="" />
// <div></div>
// <br /> 
//    </>
//   );
 const number = useSelector(state => state.counter.number)
  return (
 
     <div className='box-container'>
      <h2>number :{number}</h2>
      <Box1Container></Box1Container>
      </div> 
  

// 
  
  // useSelector
    /*
      - 리덕스 store의 상태 값을 조회하기 위한 hook 함수
      - 인자로 함수를 넘겨줘야 함
      - 그 함수는 state를 매개변수로 받을 수 있고, return 값은 원하는 state 변수 값 설정
    */
     
  );
};


/*
  components 폴더
    - 화면에 실제로 그려지는 컴포넌트를 담는 폴더
       Presentational 컴포넌트
        - DOM 마크업, 스타일 담당
        - 데이터 처리 능력 x
        - Redux와 관련 X
        - 부모 컴포넌트로 부터 받은 props인 데이터와 callback 사용
  containers 폴더
    -리덕스 스토어와 컴포넌트를 이어주는 매개체를 담는 폴더
      Container 컴포넌트
        - 동작 (behavior) 로직
        - 데이터 처리 능력 O
        - Redux와 관련 O
        - 렌더링 되어야 할 데이터를 props 로써 데이터 처리 능력이 없는 
          컴포넌트인 Presentational 컴포넌트로 전달
*/




// import logo from './logo.svg';
import { useSelector } from 'react-redux';
import {Box1Container} from"./containers/BoxesContainer";
import './App.css';
// import img from './img/pngwing.com (2).png';
// import FunctionComponent from './functionComponent';
// import ClassComponent from './classComponent';
import Test from './test';
import Test2 from './test2';
function App() {
    return (
        <>
      <Test />
      <Test2 />
     
</>     )
}
    // const name = "이미경";
    // let classs ="";
// if(name === "이미경"){
// classs = "kdt2기";
// }else{
//     classs = "누구";
// }
// if(name === "ffff" &&true)
// let styles = {
//     color : "blue",
//     width : "100px",
//     height : "100px",
//     backgroundColor : "skyblue",
//     marginBottom : "30px",
// }
// let name = "로이";
// let animal = "강아지"
// let text = {
//     textDecoration: "underline",
//     display :"inline"

// }
// let a = 3;
// let b = 1;

// let login = {
//     textAlign: "center",
//     marginBottom : "10px"
// }
// let title = "Hello World";
//   return (
//    <>
//    <FunctionComponent />
// <div>kdt 2기</div>

/*
   {/* 아래 xml */
//  <h1>안녕</h1>
//     <h2>{name === "이미경" ? "kdt2기": "누구"}</h2> 
//  <div className='App-header' style={styles}>안녕</div> */}
// <div style={{
//     color : "blue",
//     width : "100px",
//     height : "100px",
//     backgroundColor : "red",
//     }}>안녕</div>
// <hr />
// <br />
// <form action="">
// <input type="text" /><br />
// </form> 

 // <div>이것은 div입니다.</div>
// <div><h3>이것은 div 안에 있는 h3태그 입니다</h3></div>

// <h2>제 반려 동물의 이름은 <p style={text}>{name}</p>입니다.</h2>
// <h2><p style={text}>{name}</p>는 <p style={text}>{animal}</p>입니다.</h2>

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


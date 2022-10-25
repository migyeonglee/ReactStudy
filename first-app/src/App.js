import './App.css';
import {useSelector, useDispatch} from "react-redux";

function App (){
  const number = useSelector(state => state.number);
  // useSelector
    /*
      - 리덕스 store의 상태 값을 조회하기 위한 hook 함수
      - 인자로 함수를 넘겨줘야 함
      - 그 함수는 state를 매개변수로 받을 수 있고, return 값은 원하는 state 변수 값 설정
    */
  
  return (
    <>
     <div className='box-container'>
      <h2>number : {number} </h2>
      <Box1></Box1>
      </div> 
    </>
  );
};
function Box1 (){
  return(
    <>
    <div>
      <h2>box1 컴포넌트</h2>
      <Box2></Box2>
    </div>
    </>
  );
};
function Box2 (){
  return(
    <>
    <div>
      <h2>box2 컴포넌트</h2>
      <Box3></Box3>
    </div>
    </>
  );
};
function Box3 (){
  return(
    <>
    <div>
      <h2>box3 컴포넌트</h2>
      <Box4></Box4>
    </div>
    </>
  );
};
function Box4 (){
  const dispatch = useDispatch();
  // useDispatch - 함수를 return 해줌
/*
      action => 객체형태
      store에 접근
    - Action을 발생시키는 dispatch 함수를 실행하는 hook 함수
    - 인자로 원하는 Action 객체를 넘겨줘야 함.
*/   
  return(
    <>
    <div>
      <h2>box4 컴포넌트</h2>
      <button onClick={()=>{dispatch({type:'INCREASE'})}}>+1</button>
      <button onClick={()=>{dispatch({type:'DECREASE'});}}>-1</button>
    </div>
    </>
  );
};

export default App;

/*
  components 폴더
    - 화면에 실제로 그려지는 컴포넌트를 담는 폴더
  containers 폴더
    -리덕스 스토어와 컴포넌트를 이어주는 매개체를 담는 폴더
*/
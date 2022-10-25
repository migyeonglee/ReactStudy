import { useSelector } from 'react-redux';
import {Box1Container} from"./containers/BoxesContainer";
import './App.css';
function App (){
  
  // useSelector
    /*
      - 리덕스 store의 상태 값을 조회하기 위한 hook 함수
      - 인자로 함수를 넘겨줘야 함
      - 그 함수는 state를 매개변수로 받을 수 있고, return 값은 원하는 state 변수 값 설정
    */
      const number = useSelector(state => state.counter.number)
  return (
 
     <div className='box-container'>
      <h2>number :{number}</h2>
      <Box1Container></Box1Container>
      </div> 
  
  );
};
export default App;

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
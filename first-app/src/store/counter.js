

// 파일 이름을 적어주는 것이 좋음 (다른 파일과 겹치지 않기 위해)
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// action 생성 (발생함수)

// const increase = ()=>{
//     return {
//         type : INCREASE
//     }
// }
export const increase = ()=>({type : INCREASE});
export const decrease = ()=>({type : DECREASE});

let initialState = { 
    number : 0
  }
  // 리듀서함수 ({reducer : 리듀서함수})
  function counter (state=initialState, action){
    switch(action.type){
      case INCREASE:
        return{
          number : state.number+1
        }
      case DECREASE:
        return{
          number : state.number-1
        }
  
        default : return state;
    }
  }
  
export default counter

// import reducer from 'counter.js'
// import {increase, decrease} from 'counter.js'
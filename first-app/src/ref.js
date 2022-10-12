import React, { Component } from 'react';

class Ref extends Component {
    aaa = () =>{
        // createRef X
        console.log(this.box);
        // createRef o
        console.log(this.box2);
        // document.getElementById("box");
        this.input.focus();
        this.input.value = "";
    }
    // createRef 사용
    constructor(props){
        super(props);
        this.box2 =React.createRef();
    }
    render() {
        return (
            <>
            {/* () 매게변수 {} */}
            <div ref={(ref)=>{this.box = ref}}>box</div>
            {/* <div id='box'>box</div> */}
            {/* box2라는 변수에 넣겠다 */}
            <div ref={this.box2}>box2</div>
            <input type="text" ref={(ref)=>{this.input = ref}} />
            <button onClick={this.aaa}>버튼</button>

            </>
        );
    }
}

export default Ref;

/*
ref => 요소선택
- 일반 html에서와 같이 id를 지정하는 방식은 같은 컴포넌트를 반복해 사용하면 id가 중복되게 된다는 문제가 있음 => 고유 id가 되지않음
- Reference
- 전역적으로 작동 되지 않고 컴포넌트 내부에서만 동작하기에 중복되지 않음
- DOM을 직접적으로 건들여야 할 때 사용
** class형 컴포넌트에서만 기본 기능으로 제공 **

내장함수 createRef
input = React.createRef();

- React.createRef 함수를 이용해 컴포넌트 내부에서 변수에 ref요소를 담아줌
- 이때 만든 input 요소는 실제 DOM요소의 props에 연결
- 사용할때 this.input.current를 이용

*/
// {/* <input ref={(ref)=>{this.input = ref}} /> */}
// 사용하고자 하는 Dom 요소에 ref라는 콜백 함수 작성 및 props로 전달 
// ref를 컴포넌트의 멤버 변수로 설정하는데 이때 ref는 원하는 대로 사용 




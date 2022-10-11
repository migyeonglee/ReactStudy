import React, { Component } from 'react';

class Map extends Component {
    
    render() {
        return (
            <>
                <h1>map 메소드</h1>
                <p>배열에서 사용할 수 있음</p>
                <hr />
            </>
        );
    }
}

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
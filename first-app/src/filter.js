import React from 'react';
// import { useState } from 'react';
const Filter = () => {
let animals = ['dog','tutle','rabbit'];
// 인자를 넘겨줄때 함수형태로//
let newAnimals = animals.filter((animal)=>{return animal.length>3});
// let newAnimals = animals.filter((animal)=>{return animal !== 'tutle'});
// let newAnimals = animals.filter((animal)=>{return false});
// 빈값 나옴
console.log(newAnimals);

    return (
        <>

        </>
    );
};

export default Filter;
/*
filter ()함수
- filter()의 인자로 넘겨지는 callback 함수의 테스트 (조건)를 통과하는 요소를 모아 새 배열을 생성
- filter 함수를 사용하여 배열에서 원하는 값을 삭제하는 코드 구현 가능
*/
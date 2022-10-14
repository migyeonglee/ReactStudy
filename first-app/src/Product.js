import React from 'react';
import {useParams}from 'react-router-dom'
const Product = () => {
    const { id } = useParams(); //{id : 1}
    // const param =useParams(); // param.id
    
    // "localhost:3000/product/1"
    // {id : 1}
    // const location = useLocation();

    // const [searchParams, setSearchParams]= useSearchParams();
    // const keyWord = searchParams.get("price");
    return (
        <>
        <h1>{id}번 상품</h1>  
         {/* <h1>name {name}</h1>   
         
         <h2>{location.search}</h2>
         <h2>가격은 :{keyWord}</h2> */}
        </>
    );
};

export default Product;

/*
[URL 파라미터]
- /product/:id
- 경로에 : 를 사용해 설정되는 것
- URL 파라미터가 여러개인 경우 /product/:id/:name 처럼 설정
    import {useParams}from 'react-router-dom'
    const {id,name} = useParams(); 


[URL 쿼리스트링]
useLocation
    - hash : 주소의 # 문자열 뒤의 값
    - pathname : 현재 주소 경로
    - search : ? 를 포함한 쿼리스트링
    - state : 페이지로 이동 시 임의로 넣을 수 있는 상태값
    - key : location 객체의 고유값, 초기값은 default, 페이지가 변경될 때마다 고유의 값 생성

useNavigate
    - Link 컴포넌트를 사용하지 않고 다른 페이지로 이동해야 하는 경우, 뒤로가기 등에 사용
*/
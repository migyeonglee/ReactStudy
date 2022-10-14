import {BrowserRouter, Route, Routes,Link} from "react-router-dom"
import React from 'react';
import Main from "./Main";
import Product from "./Product";

const ReactRouter = () => {
    
    return (
        <>
        <BrowserRouter>
        {/* a태그는 새로고침 되듯이 Link는 자연스럽게 */}
        <a href="/">a태그 Main</a>
        <br />
        <Link to="/">Main</Link>
        <br />
        <Link to="/Product/1/aaa/a">Product 1</Link>
        <br />
        <Link to="/Product/2/aaa/b">Product 2</Link>
        <br />
        <Link to="/Product/3/aaa/c">Product 3</Link>
        <br />
        <Link to="/Product/3/aaa/익명?productName='가방'&price=1000#test" >Product query</Link>
            <Routes>
                {/* path : 경로 element : 경로에 갔을때 보여주고 싶은 컴포넌트 */}
                {/*  */}
                <Route path="/" element={<Main/>}></Route>
                <Route path="/product/:id/aaa/:name" element={<Product/>}></Route>
                {/* 잘못된경로 일 경우 */}
                {/* <Route path="*" element={}></Route> */}
            </Routes>
        </BrowserRouter>

        </>
    );
};

export default ReactRouter;
/*
[웹 렌더링]
SPA (single page application) : 단일 웹페이지로 돌아가는 애플리케이션
- 브라우저에서 자바스크립트를 이용해 단일 웹페이지 상의 html 요소를 동적으로 생성 및 조작
- 검색엔진 최적화 (SEO)에 적합 X
- React, Svelte, Vue.js와 같은 라이브러리로 개발 가능

Routing 라우팅 : 사용자가 요청한 URL에 따라 해당 URL 에 맞는 페이지를 보여주는 것
- 라이브러리 : React Router

React Router : 개발자가 주소별로 다른 컴포넌트를 보여주기 위해 사용하는 라이브러리
- 여러 환경에서 동작할 수 있도록 여러 종류의 라우터 컴포넌트 제롱
- 주요 컴포넌트
    <BrowserRouter/>
        - html5를 지원하는 브라우저 주소 감지
        - Router의 역할
        - 새로고침을 하지 않아도 새 컴포넌트를 렌더링 해주는 기능 담당
        - URL 마다 컴포넌트가 바뀔 때 이때 바뀌는 부분의 최 상단에 위치해야 한다
    <Routes/> <Route/>
        - 경로가 일치하는 컴포넌트를 렌더링 해주도록 경로 매칭
        - Route에서는 구체적으로 어떤 컴포넌트를 렌더링 할 지 결정
            <Route path="/경로" element="<연결할 컴포넌트/>"></Route>

    <Link/> 
        - 경로를 변경한다
        - 기존 html의 a태그가 새로고침해 렌더링을 수행했다면 <Link> 컴포넌트는 페이지 전환 방지
        - BrowserRouter 안에있되, Route 안에 들어가면 안됌
        

*/

// 검색기능 과제제출란에 있음 까먹지 말것!!!!!!!!!!//


/*
http://localhost:3000/Product/:id => id(문자열)값이 바뀔 수 있음 (라우터)
http://localhost:3000/Product/1/aaa => 파람스(여러개 올 수 있음)
http://localhost:3000/Product/2/aaa => 파람스(여러개 올 수 있음)

*/
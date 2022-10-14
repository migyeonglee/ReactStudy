import React from 'react';
import {Link} from "react-router-dom"

const Nav = () => {
    let Styles = {
        margin : "10px"
    }
    return (
        <>
        <div style={{backgroundColor:"skyblue", width:"100%", textAlign:"center"}}>
        <h3>navbar입니다</h3>
        <Link to="/">메인</Link>
        <Link to="/Product/1" style={Styles}>1번 상품</Link>
        <Link to="/Product/2" style={Styles}>2번 상품</Link>
        <Link to="/Product/3" style={Styles}>3번 상품</Link>
        </div>
        </>
    );
};

export default Nav;
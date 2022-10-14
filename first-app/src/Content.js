import React from 'react';
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import Product from './Product';
import Main from './Main';

const Content = () => {
    return (
        <>
        <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/Product/:id" element={<Product/>}></Route>
        </Routes>
        </>
    );
};

export default Content;
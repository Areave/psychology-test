import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from '../pages/mainPage/mainPage';
import SecondPage from "../pages/secondPage/secondPage";

const MyRouter = () => {
    return <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/secondPage' element={<SecondPage/>}/>
        </Routes>
    </BrowserRouter>
};

export default MyRouter;
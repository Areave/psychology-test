import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from '../pages/main/mainPage';
import Page2 from "../pages/page2/page2";

const MyRouter = () => {
    return <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/page2' element={<Page2/>}/>
        </Routes>
    </BrowserRouter>
}

export default MyRouter;
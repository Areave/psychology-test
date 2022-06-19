import './page2.scss'
import React from 'react';
import {useNavigate} from 'react-router'
import PageTitle from "../../comps/PageTitle/pageTitle";

const Page2 = () => {
    const navigate = useNavigate();
    return <div className="page2">
        <PageTitle title = {'Page2'}/>
        <a className='link' onClick={()=>{navigate('/')}}>go to main page</a>
    </div>
};
export default Page2;

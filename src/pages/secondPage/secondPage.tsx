import './secondPage.scss'
import React from 'react';
import {useNavigate} from 'react-router'
import PageTitleComp from "../../comps/pageTitleComp/pageTitleComp";
import NavigationButton from "../../comps/navigationButton/navigationButton";

const SecondPage = () => {
    const navigate = useNavigate();
    return <div className="page2">
        <PageTitleComp title={'SecondPage'}/>
        <NavigationButton title={'go to main page'} route={'/'}/>
    </div>
};
export default SecondPage;

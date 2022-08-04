import './secondPage.scss'
import React from 'react';
import PageTitleComp from "../../comps/pageTitleComp/pageTitleComp";
import NavigationButton from "../../comps/navigationButton/navigationButton";
import ErrorBoundary from "../errorBoundary/errorBoundary";
import ImageComp from "../../comps/imageComp/imageComp";

const SecondPage = () => {
    return <div className="secondPage">
        <div className="header">
            <PageTitleComp title={'SecondPage'}/>
        </div>
        <div className="content">
            <ErrorBoundary>
                <ImageComp/>
            </ErrorBoundary>
        </div>
        <div className="footer">
            <NavigationButton title={'go to main page'} route={'/'}/>
        </div>
    </div>
};
export default SecondPage;

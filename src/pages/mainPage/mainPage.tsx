import React from "react";
import './mainPage.scss';
import {Types} from '../../utils/types'
import {connect} from 'react-redux'
import DescriptionComp from "../../comps/descriptionComp/descriptionComp";
import PageTitleComp from "../../comps/pageTitleComp/pageTitleComp";
import TypingComp from '../../comps/typingComp/typingComp'
import ImageComp from '../../comps/imageComp/imageComp'
import JokeComp from '../../comps/jokeComp/jokeComp'
// import TestImg from '../../assets/images/testImg.jpg';
import TestSvg from '../../assets/svg/notification-ico.svg';
import ErrorBoundary from "../errorBoundary/errorBoundary";
import {isError} from "util";
import {symlink} from "fs";


const MainPage: React.FC<any> = (props) => {
    return <div className="mainPage">
        <PageTitleComp title={'React Webpack Template'}/>
        <DescriptionComp/>
        <ErrorBoundary>
            <ImageComp/>
        </ErrorBoundary>
        {/*<ErrorBoundary>*/}
        {/*    <BuggyCounter/>*/}
        {/*</ErrorBoundary>*/}


        <JokeComp/>
        <TypingComp name={props.name}/>
    </div>
};

const mapStateToProps = (state: Types.State) => {
    return {name: state.name, joke: state.joke, isError: state.isError}
};

export default connect(mapStateToProps)(MainPage);
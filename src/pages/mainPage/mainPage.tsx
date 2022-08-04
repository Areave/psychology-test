import React from "react";
import './mainPage.scss';
import {Types} from '../../utils/types'
import {connect} from 'react-redux'
import DescriptionComp from "../../comps/descriptionComp/descriptionComp";
import PageTitleComp from "../../comps/pageTitleComp/pageTitleComp";
import {JokeComp} from "../../comps/jokeComp/jokeComp";
import NavigationButton from "../../comps/navigationButton/navigationButton";
import {ComponentTemplate} from "../../comps/0 -componentTemplate/componentTemplate";



const MainPage: React.FC<any> = (props) => {
    return <div className="mainPage">
        <div className="header">
            <PageTitleComp title={'React Webpack Template'}/>
            <DescriptionComp/>
        </div>
        <div className="content">
            <JokeComp/>
        </div>
        <div className="footer">
            <NavigationButton title={'go to second page'} route={'/secondPage'}/>
        </div>

    </div>
};

const mapStateToProps = (state: Types.State) => {
    return {name: state.name, joke: state.joke, isError: state.isError}
};

export default connect(mapStateToProps)(MainPage);
import React from "react";
import './mainPage.scss';
import {Types} from '../../utils/types'
import {connect} from 'react-redux'
import MainComponent from "../../comps/mainComponent/mainComponent";
import LoadingButton from "../../comps/loadingButton/loadingButton";
import Loader from "../../comps/loader/loader";
import LoadingTitle from "../../comps/loadingTitle/loadingTitle";
import PageTitle from "../../comps/pageTitle/pageTitle";
import WelcomeComp from '../../comps/welcomeComp/welcomeComp'
import ImageComp from '../../comps/imageComp/imageComp'
import JokeComp from '../../comps/jokeComp/jokeComp'
import TestImg from '../../assets/images/testImg.jpg';
import TestSvg from '../../assets/svg/notification-ico.svg';


const MainPage: React.FC<any> = (props) => {
    return <div className="mainPage">
        <PageTitle title={'React Webpack Template'}/>
        <MainComponent/>
        <LoadingButton isLoading={props.isLoading} label='loading'/>
        <LoadingTitle title='App is loading:' isLoading={props.isLoading}/>
        {props.isLoading && <Loader/>}
        {/*<ImageComp src={TestSvg}/>*/}
        <JokeComp joke={props.joke}/>
        <ImageComp src={TestImg}/>
        <WelcomeComp name={props.name}/>
    </div>
};

const mapStateToProps = (state: Types.State) => {
    return {isLoading: state.isLoading, name: state.name, joke: state.joke}
};

export default connect(mapStateToProps)(MainPage);
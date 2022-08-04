import React from 'react'
import './jokeTemplate.scss'
import ActionButton from "../actionButton/actionButton";
import ComponentTitleComp from "../componentTitleComp/componentTitleComp";
import {Types} from "../../utils/types";
import Loader from "../loader/loader";

export const JokeTemplate: React.FC<Types.JokeCompProps>  = ({loadJokeUsingRedux, loadJokeUsingHook, joke}) => {
    return <div className='jokeComp'>
        <div className="jokeWrapper">
            <ComponentTitleComp title={'Async download data and render it using redux or useState hook'}/>
            <div className="jokeText">
                {joke || <Loader/>}
            </div>
            <div className="buttonWrapper">
                <ActionButton onClick={loadJokeUsingHook} label={'using hooks'}/>
                <ActionButton onClick={loadJokeUsingRedux} label={'using redux'}/>
            </div>
        </div>
    </div>
};
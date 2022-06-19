import React, {useEffect, useState} from 'react'
import './jokeComp.scss'
import {Types} from '../../utils/types'
import apiService from '../../utils/apiService'
import {connect} from 'react-redux'
import {setJokeAction} from "../../utils/store/actionCreators";

const JokeComp: React.FC<Types.JokeCompProps> = (props) => {


    let joke = props.joke;

    const [joke1, setJoke1] = useState();

    const dowloadJokeHook:any = () => {
        apiService.getRandomJoke().then((joke: any) => {
            setJoke1(joke);
            props.setJokeAction('');

        })
    };
    useEffect(()=>{dowloadJokeHook()}, []);

    const dowloadJokeRedux = () => {
        apiService.getRandomJoke().then((joke: any) => {
            props.setJokeAction(joke);
            setJoke1(undefined);
        })
    };

    return <div className='jokeComp'>
        <div className="jokeWrapper">
            <div className="jokeText">{joke || joke1}</div>
            {/*<div className="jokeText">{props.joke}</div>*/}
            <button className="jokeButton jokeButton1" onClick={dowloadJokeHook}>load another joke using hooks</button>
            <button className="jokeButton jokeButton2" onClick={dowloadJokeRedux}>load another joke using redux</button>
        </div>
    </div>
};

const mapDispatchToProps = {setJokeAction};

export default connect(null, mapDispatchToProps)(JokeComp);
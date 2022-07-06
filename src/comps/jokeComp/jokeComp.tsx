import React, {useEffect, useState} from 'react'
import './jokeComp.scss'
import {Types} from '../../utils/types'
import apiService from '../../utils/apiService'
import {connect} from 'react-redux'
import {setJokeAction} from "../../utils/store/actionCreators";
import ActionButton from "../actionButton/actionButton";
import ComponentTitleComp from "../componentTitleComp/componentTitleComp";

const JokeComp: React.FC<Types.JokeCompProps> = ({joke, setJokeAction}) => {

    const [joke1, setJoke1] = useState();

    const dowloadJokeHook:any = () => {
        apiService.getRandomJoke().then((joke: any) => {
            setJoke1(joke);
            setJokeAction('');

        })
    };
    useEffect(()=>{dowloadJokeHook()}, []);

    const dowloadJokeRedux = () => {
        apiService.getRandomJoke().then((joke: any) => {
            setJokeAction(joke);
            setJoke1(undefined);
        })
    };

    return <div className='jokeComp'>
        <div className="jokeWrapper">
            <ComponentTitleComp title={'Async download data and render it using redux or useState hook'}/>
            <div className="jokeText">{joke || joke1}</div>
            <div className="buttonWrapper">
                <ActionButton onClick={dowloadJokeHook} label={'using hooks'}/>
                <ActionButton onClick={dowloadJokeRedux} label={'using redux'}/>
            </div>

        </div>
    </div>
};

const mapDispatchToProps = {setJokeAction};
// wich means
// const mapDispatchToProps = (dispatch: any) => {
//     return {
//         setJokeAction: () => {
//             dispatch(setJokeAction())
//         }
//     }
// }
const mapStateToProps = (state: Types.State) => {
    return {joke: state.joke}
};

export default connect(mapStateToProps, mapDispatchToProps)(JokeComp);
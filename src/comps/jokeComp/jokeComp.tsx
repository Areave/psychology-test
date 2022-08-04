import * as React from "react";
import {Types} from "../../utils/types";
import apiService from "../../utils/apiService";
import {useState} from "react";
import {useEffect} from "react";
import {JokeTemplate} from "./jokeTemplate";
import {connect} from 'react-redux'
import {setJokeAction} from "../../utils/store/actionCreators";

const JokeHOC = (Comp: React.FC<any>): Types.HOC => {

  // @ts-ignore
    return ({setJokeAction, joke}) => {

      const [joke1, setJoke1] = useState();

      const downloadJokeHook:any = () => {
          apiService.getRandomJoke().then((joke: any) => {
              setJoke1(joke);
              setJokeAction('');
          })
      };

      const downloadJokeRedux = () => {
          apiService.getRandomJoke().then((joke: any) => {
              setJokeAction(joke);
              setJoke1(undefined);
          })
      };

      useEffect(()=>{downloadJokeHook()}, []);

      const compProps: Types.JokeCompProps = {
          joke: joke || joke1,
          loadJokeUsingHook: downloadJokeHook,
          loadJokeUsingRedux: downloadJokeRedux
      };

      return <Comp {...compProps}/>
  }
}

const mapStateToProps = (state: Types.State) => {
    return {joke: state.joke}
};
const mapDispatchToProps = {setJokeAction};
// which means
// const mapDispatchToProps = (dispatch: any) => {
//     return {
//         setJokeAction: () => {
//             dispatch(setJokeAction())
//         }
//     }
// }
// const JokeComp = JokeHOC(JokeTemplate);

export const JokeComp = connect(mapStateToProps, mapDispatchToProps)(JokeHOC(JokeTemplate));
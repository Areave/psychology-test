import React, {useEffect, useState} from "react";
import './mainPage.scss';
import {Types} from '../../utils/types'
import {connect} from 'react-redux'
import DescriptionComp from "../../comps/descriptionComp/descriptionComp";
import PageTitleComp from "../../comps/pageTitleComp/pageTitleComp";
// import {JokeComp} from "../../comps/jokeComp/jokeComp";
import NavigationButton from "../../comps/navigationButton/navigationButton";
import ProgressBarComp from "../../comps/progressBarComp/progressBarComp";
import QuestionComp from "../../comps/questionComp/questionComp";
import apiService from "../../utils/apiService";
import {setJokeAction, setQuestionList} from "../../utils/store/actionCreators";
// @ts-ignore
// import M from "materialize-css";
import M from "materialize-css/dist/js/materialize.min.js";



const MainPage: React.FC<any> = ({setQuestionList, questionList}) => {

    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [isTestPassed, setIsTestPassed] = useState(false);
    const [percent, setPercent] = useState(0);

    const downloadQuestionList = () => {
        apiService.getQuestionList().then((questionListData: any) => {
            setQuestionList(questionListData);
        })
    };

    const restartTest = () => {
        // setCurrentQuestion(null);
        setNextQuestion();
        setIsTestPassed(false);
        setPercent(0);
    };

    const getNextQuestion = (currentQuestion: Types.Question, questionList: Types.QuestionList): Types.Question | undefined => {
        let nextQuestion;
        if (currentQuestion) {
            nextQuestion = questionList.find(question => question.number === currentQuestion.number + 1);
            if (currentQuestion.number + 2 > questionList.length) {
                setIsTestPassed(true);
                setPercent(100);
            }
        } else {
            nextQuestion = questionList[0];
        }
        if (nextQuestion) {
            setPercent(((nextQuestion.number) / questionList.length) * 100)
        }
        return nextQuestion;
    };

    const setNextQuestion = (): void => {
        const nextQuestion = getNextQuestion(currentQuestion, questionList);
        setCurrentQuestion(nextQuestion);
    };

    useEffect(()=>{
        downloadQuestionList();
    }, [questionList]);

    useEffect(() => {
        //initialize materialize
        // M.AutoInit();
    });

    return <div className="mainPage">
        <div className="header">
            <PageTitleComp title={'Социографический тест личности'}/>
        </div>
        <div className="content">
            <DescriptionComp/>
            <QuestionComp currentQuestion={currentQuestion}
                          setNextQuestion={setNextQuestion}
                          totalAmountOfQuestion={questionList && questionList.length}
                          restartTest={restartTest}
                          isTestPassed={isTestPassed}/>
        </div>
        <ProgressBarComp percent={percent}/>
        {/*<div className="footer">*/}
        {/*    /!*<NavigationButton title={'go to second page'} route={'/secondPage'}/>*!/*/}
        {/*</div>*/}

    </div>
};

const mapStateToProps = (state: Types.State) => {
    return {questionList: state.questionList}
};

const mapDispatchToProps = {setQuestionList};

// const mapDispatchToProps = (dispatch: any) => {
//     return {
//         setQuestionList: () => {
//             dispatch(setQuestionList())
//         }
//     }
// };

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
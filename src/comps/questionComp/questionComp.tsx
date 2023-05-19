import * as React from "react";
import {Types} from "../../utils/types";
import './questionComp.scss'
import ComponentTitleComp from "../componentTitleComp/componentTitleComp";
import Loader from "../loader/loader";
import ActionButton from "../actionButton/actionButton";
import {useState} from "react";
import Modal from "../modal/modal";
import MyModal from "../modal/modal";

export const QuestionComp: React.FC<Types.QuestionCompProps> = ({currentQuestion, setNextQuestion, totalAmountOfQuestion, isTestPassed, restartTest}) => {

    const [resultText, setResultText] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const startStage = !currentQuestion && !isTestPassed;
    const questionStage = currentQuestion && !isTestPassed;
    const testPassedStage = !currentQuestion && isTestPassed && !resultText;
    const loadingStage = isLoading && !resultText;
    const resultStage = resultText;
    // const sengToPostStage = resultText && isTestPassed;

    const getResult = () => {

        setIsLoading(true);
        const timeout = (Math.random() + 1000) * 2;
        setTimeout(() => {
            setIsLoading(false);
            setResultText('Вы пидор');
        }, timeout);
    };

    const sendResultOnPost = () => {
        // @ts-ignore
        if(window.M) {

        }
    };

    const restartTest1 = () => {
        setResultText('');
        restartTest();
    };

    const getContent = () => {
        if (startStage) {
            return <>
                <ComponentTitleComp title={'Если готовы, нажмите кнопку "Старт"'}/>
                <div className="buttonWrapper">
                    <ActionButton onClick={setNextQuestion} label={'Start'}/>
                </div>
            </>
        } else if (questionStage) {
            return <>
                <div className="jokeText">
                    {'Вопрос ' + (currentQuestion.number + 1) + '/' + totalAmountOfQuestion}
                </div>
                <ComponentTitleComp title={currentQuestion.text}/>
                <div className="buttonWrapper">
                    {currentQuestion.options.map((option: { option: string; }, index: React.Key) => {
                        return <ActionButton key={index} onClick={setNextQuestion} label={option.option}/>
                    })}
                </div>
            </>
        } else if (testPassedStage) {
            return <>
                <div className="jokeText">
                    {'Поздравляем! Тест пройден!'}
                </div>
                <ComponentTitleComp title={'Чтобы узнать результат, нажмите кнопку "Узнать результат"'}/>
                <div className="buttonWrapper">
                    <ActionButton onClick={getResult} label={'Узнать результат'}/>
                </div>
            </>
        } else if (resultStage) {
            return <>
                <div className="jokeText">
                    {'Результаты получены!'}
                </div>
                <ComponentTitleComp title={resultText}/>
                <div className="buttonWrapper">
                    {/*<ActionButton onClick={sendResultOnPost} label={'Отправить результат на почту'}/>*/}
                    <MyModal children={<ActionButton onClick={sendResultOnPost} label={'Отправить результат на почту'}/>}/>
                    <ActionButton onClick={restartTest1} label={'Пройти тест еще раз'}/>
                </div>
            </>
        }
    };

    return <div className='jokeComp'>
        <div className="jokeWrapper">

            {isLoading && <>
                <div className="jokeText">
                    {'Обрабатываем результаты...'}
                </div>
                <Loader/>
            </>}
            {!isLoading && getContent()}
        </div>
    </div>
};

export default QuestionComp;
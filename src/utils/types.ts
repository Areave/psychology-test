import React, {ReactElement} from "react";
import {setError} from "./store/actionCreators";

export namespace Types {

    export interface State {
        questionList: Question[]
        // readonly isAuthorized: boolean,
        // readonly isLoading: boolean,
        // readonly name: string,
        // readonly joke: string,
        // readonly isError: boolean,
        // readonly imageSrc: string,
        // readonly errorMessage: string
    }

    export interface Action {
        type: string,
        payload?: any
    }

    export type HOC = (props: any) => ReactElement<any>

    export interface ErrorPageProps {
        isError: boolean,
        children?: React.ReactNode,
        errorMessage?: string,
        setError: (isError: boolean, errorMessage?: string) => void

    }
    export interface PageTitleProps {
        readonly title: string
    }
    export interface ImageCompProps {
        readonly imageSrc: string,
        readonly setImageSrc?: (imageSrc: string) => void,
        readonly setError?: (isError: boolean, errorMessage?: string) => void
    }

    export interface ComponentTitleCompProps {
        title: string
    }
    export interface NavigationButtonProps {
        route: string,
        title: string
    }
    export interface ActionButtonProps {
        onClick: (arg?: any) => void,
        label: string
    }
    export interface DescriptionCompProps {
    }
    export interface JokeCompProps {
        loadJokeUsingRedux: (joke: string) => void,
        loadJokeUsingHook: (joke: string) => void,
        joke: string
    }
    export interface QuestionCompProps {
        currentQuestion: Question,
        setNextQuestion: (arg? :any) => void,
        isTestPassed: boolean,
        restartTest: () => void,
        totalAmountOfQuestion: number
    }
    export interface Question {
        number: number,
        text: string,
        options: {
            option: string,
            score: number
        }[]
    }
    export type QuestionList = Question[]
}
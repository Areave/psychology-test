import {Types} from '../types'

export const setWelcomeAction: (name: string) => Types.Action = (name) => {
    return {
        type: 'SET_WELCOME',
        payload: name
    }
};
export const setJokeAction: (joke: string) => Types.Action = (joke) => {
    return {
        type: 'SET_JOKE',
        payload: joke
    }
};
export const setQuestionList: (questionList: Types.Question[]) => Types.Action = (questionList) => {
    return {
        type: 'SET_QUESTION_LIST',
        payload: questionList
    }
};
export const setError = (isError: boolean, errorMessage?: string): Types.Action => {
    return {
        type: 'SET_ERROR',
        payload: {isError, errorMessage}
    }
};
export const setImageSrc: (imageSrc: string) => Types.Action = (imageSrc) => {
    return {
        type: 'SET_IMAGE_SRC',
        payload: imageSrc
    }
};
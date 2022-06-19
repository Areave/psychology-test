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

export const switchLoading: () => Types.Action = () => {
    return {
        type: 'SET_LOADING'
    }
};
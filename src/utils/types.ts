export namespace Types {

    export interface State {
        readonly isAuthorized: boolean,
        readonly isLoading: boolean,
        readonly name: string,
        readonly joke: string,
    }
    export interface PageTitleState {
        readonly title: string
    }
    export interface ImageCompState {
        readonly src: string
    }
    export interface ErrorState {
        isError: boolean,
        errorType: number
    }

    export interface Action {
        type: string,
        payload?: Object
    }
    export interface WelcomeCompProps {
        setWelcomeAction: (name: string) => void,
        name: string
    }
    export interface JokeCompProps {
        setJokeAction: (name: string) => void,
        joke: string
    }
}
import React from "react";

export namespace Types {

    export interface State {
        readonly isAuthorized: boolean,
        readonly isLoading: boolean,
        readonly name: string,
        readonly joke: string,
        readonly isError: boolean,
        readonly imageSrc: string,
        readonly errorMessage: string
    }
    export interface PageTitleState {
        readonly title: string
    }
    export interface ImageCompState {
        readonly imageSrc: string,
        readonly setImageSrc: (imageSrc: string) => void,
        readonly setError: (errorMessage: string) => void
    }
    export interface Action {
        type: string,
        payload?: Object
    }
    export interface WelcomeCompProps {
        setWelcomeAction: (name: string) => void,
        name: string
    }
    export interface componentTitleCompProps {
        title: string
    }
    export interface NavigationButtonProps {
        route: string,
        title: string
    }
    export interface ActionButtonProps {
        onClick: () => any,
        label: string
    }
    export interface ErrorState {
        isError: boolean,
        children?: React.ReactNode,
        errorMessage?: string,
        errorInfo?: any

    }
    export interface ErrorPageProps {
        errorMessage: string,
        errorStack: any
    }
    export interface JokeCompProps {
        setJokeAction: (name: string) => void,
        joke: string
    }
}
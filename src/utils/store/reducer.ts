import {Types} from '../types'

const initialState = {
    isLoading: false,
    name: '',
    joke: ''
}

const reducer = (state: Types.State, action: Types.Action) => {
    switch (action.type) {
        case 'SET_WELCOME':
            return {...state, name: action.payload};
        case 'SET_JOKE':
            return {...state, joke: action.payload};
        case 'SET_IMAGE_SRC':
            return {...state, imageSrc: action.payload};
        case 'SET_ERROR':
            return {...state, isError: !state.isError, errorMessage: action.payload};
    }
    return initialState;
}

export default reducer
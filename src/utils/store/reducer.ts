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
        case 'SET_LOADING':
            return {...state, isLoading: !state.isLoading};
        case 'SET_JOKE':
            return {...state, joke: action.payload};
    }
    return initialState;
}

export default reducer
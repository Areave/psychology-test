import {Types} from '../types'


const initialState: Types.State = {
    questionList: null
};

const reducer = (state: Types.State, action: Types.Action) => {
    switch (action.type) {
        case 'SET_WELCOME':
            return {...state, name: action.payload};
        case 'SET_JOKE':
            return {...state, joke: action.payload};
        case 'SET_QUESTION_LIST':
            return {...state, questionList: action.payload};
        case 'SET_IMAGE_SRC':
            return {...state, imageSrc: action.payload};
        case 'SET_ERROR':
            return {...state, isError: action.payload.isError, errorMessage: action.payload.errorMessage};
    }
    return initialState;
};

export default reducer
import {
    SET_REPOS,
    REPO_API_REQUEST_FAILURE,
    REPO_API_RESPONSE_NOT_FOUND,
    RESET,
} from './repoTypes';

const initialState = {
    repos: [],
    error: '',
    notFound: false,
};

const repoReducer = (state = initialState, action: any) => {
    switch (action.type) {
    case SET_REPOS:
        return {
            ...state,
            notFound: false,
            error: '',
            repos: action.payload,
        };
    case REPO_API_REQUEST_FAILURE:
        return {
            ...state,
            notFound: false,
            error: action.payload,
        };
    case REPO_API_RESPONSE_NOT_FOUND:
        return {
            ...state,
            error: '',
            notFound: action.payload,
        };
    case RESET:
        return {
            ...state,
            initialState
        };
    default: return state;
    }
};

export default repoReducer;
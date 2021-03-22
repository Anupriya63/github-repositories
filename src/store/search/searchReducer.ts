import {
    SET_SEARCH_TEXT,
} from './searchTypes';

const initialState = {
    searchText: '',
};

const searchReducer = (state = initialState, action: any) => {
    switch (action.type) {
    case SET_SEARCH_TEXT:
        return {
            searchText: action.payload,
        };
    default: return state;
    }
};

export default searchReducer;
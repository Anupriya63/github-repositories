import {
    SET_SEARCH_TEXT, 
} from './searchTypes';


export const setSeachText = (searchText: string) => {
    return {
        type: SET_SEARCH_TEXT,
        payload: searchText,
    };
};
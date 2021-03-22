import { combineReducers } from '@reduxjs/toolkit';
import repoReducer  from './repo/repoReducer';
import searchReducer from './search/searchReducer';

const rootReducer = combineReducers({
    repoReducer,
    searchReducer
});

export default rootReducer;
import React from 'react';
import { RootState } from './store/store';
import { useSelector } from 'react-redux';
import {
    makeStyles,
} from '@material-ui/core';

export const useStyles = makeStyles(() => ({
    error: {
        color: 'red',
    },
}));


const Page404 = () => { 
    const searchText = useSelector((state: RootState) => state.searchReducer.searchText);
    const classes = useStyles();
    return(
        <>
            <h2 className={classes.error}>No Repository found for user    &quot;{searchText}&quot; :(</h2>
        </>
    );
};


export default Page404;

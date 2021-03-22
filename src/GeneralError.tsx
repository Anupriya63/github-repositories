import React from 'react';
import {
    makeStyles,
} from '@material-ui/core';

export const useStyles = makeStyles(() => ({
    error: {
        color: 'red',
    },
}));

const ErrorPage = () => { 
    const classes = useStyles();
    return(
        <>
            <h2 className={classes.error}> Something went wrong. Please try again later.</h2>
        </>
    );
};


export default ErrorPage;
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Header from '../header/header';
import PageList from './list';
import Page404 from '../../Page404';
import ErrorPage from '../../GeneralError';
import { useStyles } from './list.style';

const Results = () => {
    const repositories = useSelector((state: RootState) => state.repoReducer.repos);
    const notfound = useSelector((state: RootState) => state.repoReducer.notFound);
    const error  = useSelector((state: RootState) => state.repoReducer.error);
    const searchText  = useSelector((state: RootState) => state.searchReducer.searchText);
    const classes = useStyles();
    return (
        <>
            { ( !notfound && repositories.length > 0) &&
            <>
                <Header/>
                <PageList/>
            </>
            }
            { ( searchText && repositories.length === 0) &&
            <>
                <Page404/>
            </>
            }
            { notfound  && 
            <>
                <h2 className={classes.error}> Organization not found</h2>
            </>
            }

            { error  &&
            <>
                <ErrorPage/>
            </>
            }
        </>
        
    );
};

export default Results;
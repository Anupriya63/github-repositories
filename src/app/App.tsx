import React from 'react';
import SearchForm from '../components/searchForm/form';
import { Route, Switch } from 'react-router-dom';
import Page404 from '../Page404';
import Results from '../components/results/results';

const App = () => {
    return (
        <Switch>
            <Route path='/' exact render={() => {
                return (
                    <>
                        <SearchForm />
                        <Results />
                    </>
                );
            }}/>
            <Route path='/404' render={() => {
                return (
                    <>
                        <SearchForm />
                        <Page404 />
                    </>
                );
            }}/>
        </Switch>
    );
};

export default App;

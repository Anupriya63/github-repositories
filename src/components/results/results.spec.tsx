import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; 
import PageList from './list';

const initialState = {
    repos: [],
    error: '',
    notFound: false,
};

const mockStore = configureStore();
const defaultStore = mockStore(initialState);


describe('Results', () => {

    it('render results if repository is greater than 0', () => {
        const pageList = shallow(
            <Provider store={defaultStore}>
                <PageList />
            </Provider>);
        expect(pageList).toMatchSnapshot();
    });
});

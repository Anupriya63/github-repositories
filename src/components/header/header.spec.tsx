import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; 
import Header from './header';

const initialState = {
    repos: [],
    error: '',
    notFound: false,
};

const mockStore = configureStore();
const defaultStore = mockStore(initialState);


describe('Header', () => {

    it('render header for results', () => {
        const header = shallow(
            <Provider store={defaultStore}>
                <Header />
            </Provider>);
        expect(header).toMatchSnapshot();
    });
});

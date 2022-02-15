import React from 'react';
import { Provider } from 'react-redux';
import store from '../../features/redux/store';
import { PaginationConnector, CardRowConnector } from '../../pages/ui';
import './app.css';

export const App = () => {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <CardRowConnector />
                <PaginationConnector />
            </Provider>
        </React.StrictMode>
    );
};

export default App;

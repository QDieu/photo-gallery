import React from 'react';
import { PaginationConnector, CardRowConnector } from '../../pages/ui';
import './app.css';

export const App = () => {
    return (
        <>
            <CardRowConnector />
            <PaginationConnector />
        </>
    );
};

export default App;

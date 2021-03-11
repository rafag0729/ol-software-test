import React from 'react';

import { Provider} from 'react-redux';
import { store } from './redux/store/store';

import { Dashboard } from './routes/Dashboard';

import './styles/_main.scss';

export const OlTestApp = () => {

    return (
        <Provider store={ store }>
            <Dashboard/>
        </Provider>
    )
}

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { persistor, store } from './store/store';

import Loading from './components/Loading/Loading';
import Main from './containers/Main/Main';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={<Loading />} persistor={persistor}>
                    <Main />
                </PersistGate>
            </Provider>
        );
    }
}

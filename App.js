import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createEngine from 'redux-storage-engine-reactnativeasyncstorage';
import * as storage from 'redux-storage';

import DateSelector from './containers/DateSelector/DateSelector';
import Calculator from './containers/Calculator/Calculator';

import reducers from './store/reducer';
import styles from './config/styles';

const reducer = storage.reducer(reducers);
const engine = createEngine('Nuzleaf');

const middleware = storage.createMiddleware(engine);

const createStoreWithMiddleware = applyMiddleware(middleware)(createStore);
const store = createStoreWithMiddleware(reducer);

const load = storage.createLoader(engine);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <StatusBar hidden={true} />
                    <DateSelector />
                    <Calculator />
                </View>
            </Provider>
        );
    }
}

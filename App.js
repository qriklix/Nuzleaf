import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import DateSelector from './containers/DateSelector/DateSelector';
import Calculator from './containers/Calculator/Calculator';

import reducer from './store/reducer';
import styles from './config/styles';

const store = createStore(reducer);

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

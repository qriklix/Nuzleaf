import React from 'react';
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import DateSelector from './containers/DateSelector/DateSelector';
import Calculator from './containers/Calculator/Calculator';
import Loading from './components/Loading/Loading';

import { persistor, store } from './store/store';

import styles from './config/styles';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={<Loading />} persistor={persistor}>
                    <View style={styles.container}>
                        <StatusBar hidden={true} />
                        <DateSelector />
                        <Calculator />
                    </View>
                </PersistGate>
            </Provider>
        );
    }
}

import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import DateSelector from './../DateSelector/DateSelector';
import Calculator from './../Calculator/Calculator';

import style from './MainStyle';

class Main extends Component {
    render() {
        return (
            <View style={style.container}>
                <StatusBar hidden={true} />
                <DateSelector />
                <Calculator />
            </View>
        );
    }
}

export default Main;
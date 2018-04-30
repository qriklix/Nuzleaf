import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from '../../config/styles';

class Calculator extends Component {
    render() {
        return (
            <View style={styles.calculator}>
                <Text>Calculator</Text>
            </View>
        );
    }
}

export default Calculator;
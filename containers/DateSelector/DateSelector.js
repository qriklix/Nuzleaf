import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from '../../config/styles';

class DateSelector extends Component {
    render() {
        return (
            <View style={styles.dateSelector}>
                <Text>Date Select</Text>
            </View>
        );
    }
}

export default DateSelector;
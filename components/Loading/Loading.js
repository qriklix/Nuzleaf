import React from 'react';
import {
    ActivityIndicator,
    View,
} from 'react-native'
import styles from '../../config/styles';

const loading = () => {
    return (
        <View style={[styles.loading]}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    )
}

export default loading;
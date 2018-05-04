import React from 'react';
import { ActivityIndicator, View } from 'react-native'
import style from './LoadingStyle';

const loading = () => {
    return (
        <View style={[style.loading]}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    )
}

export default loading;
import React from 'react';
import { Text, View } from 'react-native';

const row = (props) => {
    return (
        <View>
            <Text>This is a row. ({props.cimlet})</Text>
        </View>
    )
}

export default row;
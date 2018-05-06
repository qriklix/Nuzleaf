import React from 'react';
import { Text, View } from 'react-native';

import style from './RowStyle';

const sumRow = (props) => {
    return (
        <View style={style.row}>
            <Text>{props.db} / {props.bankNote} = {props.sum}</Text>
        </View>
    );
}

export default sumRow;
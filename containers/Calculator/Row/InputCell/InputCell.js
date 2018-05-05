import React from 'react';
import { Text, TextInput, View } from 'react-native';

import style from '../RowStyle';

const inputCell = (props) => {
    return (
        <View style={style.cell}>
            <TextInput
                style={style.inputCell}
                underlineColorAndroid="transparent"
                keyboardType="numeric"
                selectTextOnFocus
                value={props.value.toString()}
                onChangeText={text => props.changed(props.bankNote, props.column, text)} />
        </View>
    );
}

export default inputCell;
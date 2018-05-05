import React from 'react';
import { Text, View } from 'react-native';

import style from './RowStyle';

const rowHeader = (props) => {
    const cells = props.cells.map((element, index) => {
        return (
            <View key={index} style={style.cell}>
                <Text>{element}</Text>
            </View>
        )
    });

    return (
        <View style={[style.row, style.rowHeader]}>
            {cells}
        </View>
    )
}

export default rowHeader;
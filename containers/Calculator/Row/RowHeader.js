import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

import * as actionTypes from '../../../store/actions';

import style from './RowStyle';

const rowHeader = (props) => {
    const cells = props.cells.map((element, index, arr) => {
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

const mapStateToProps = state => {
    return {
        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(rowHeader);
import React, { Fragment } from 'react';
import { Text, View } from 'react-native';

import style from './RowStyle';

const row = (props) => {
    let cells = <View style={style.cell}></View>;

    if (props.bankNote > 200) {
        cells = (
            <Fragment>
                <View style={style.cell}><Text>{props.bankNote}</Text></View>
                <View style={style.cell}></View>
                <View style={style.cell}></View>
                {props.hasOwnProperty('felre') ? <View style={style.cell}><Text>{props.felre}</Text></View> : <View style={style.cell}></View>}
                {props.hasOwnProperty('darab') ? <View style={style.cell}><Text>{props.darab}</Text></View> : <View style={style.cell}></View>}
                {props.hasOwnProperty('kassza') ? <View style={style.cell}><Text>{props.kassza}</Text></View> : <View style={style.cell}></View>}
            </Fragment>
        );
    } else {
        cells = (
            <Fragment>
                <View style={style.cell}><Text>{props.bankNote}</Text></View>
                {props.hasOwnProperty('talka') ? <View style={style.cell}><Text>{props.talka}</Text></View> : <View style={style.cell}></View>}
                {props.hasOwnProperty('felre') ? <View style={style.cell}><Text>{props.felre}</Text></View> : <View style={style.cell}></View>}
                {props.hasOwnProperty('rolni') ? <View style={style.cell}><Text>{props.rolni}</Text></View> : <View style={style.cell}></View>}
                {props.hasOwnProperty('bontott') ? <View style={style.cell}><Text>{props.bontott}</Text></View> : <View style={style.cell}></View>}
                {props.hasOwnProperty('kassza') ? <View style={style.cell}><Text>{props.kassza}</Text></View> : <View style={style.cell}></View>}
            </Fragment>
        );
    }

    return (
        <View style={style.row}>
            {cells}
        </View>
    )
}

export default row;
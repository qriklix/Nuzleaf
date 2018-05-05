import React, { Fragment } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import * as actionTypes from '../../../store/actions';

import InputCell from './InputCell/InputCell';

import style from './RowStyle';

const row = (props) => {
    let cells = null;

    const textInputProps = {
        keyboardType: 'numeric'
    };

    if (props.bankNote > 200) {
        cells = (
            <Fragment>
                <View style={style.cell}><Text>{props.bankNote}</Text></View>
                <View style={style.cell}></View>
                <View style={style.cell}></View>
                {props.hasOwnProperty('felre') ? <InputCell bankNote={props.bankNote} column="felre" value={props.felre.toString()} changed={props.changeTextHandler} /> : <View style={style.cell}></View>}
                {props.hasOwnProperty('darab') ? <InputCell bankNote={props.bankNote} column="darab" value={props.darab.toString()} changed={props.changeTextHandler} /> : <View style={style.cell}></View>}
                {props.hasOwnProperty('kassza') ? <InputCell bankNote={props.bankNote} column="kassza" value={props.kassza.toString()} changed={props.changeTextHandler} /> : <View style={style.cell}></View>}
            </Fragment>
        );
    } else {
        cells = (
            <Fragment>
                <View style={style.cell}><Text>{props.bankNote}</Text></View>
                {props.hasOwnProperty('talka') ? <InputCell bankNote={props.bankNote} column="talka" value={props.talka.toString()} changed={props.changeTextHandler} /> : <View style={style.cell}></View>}
                {props.hasOwnProperty('felre') ? <InputCell bankNote={props.bankNote} column="felre" value={props.felre.toString()} changed={props.changeTextHandler} /> : <View style={style.cell}></View>}
                {props.hasOwnProperty('rolni') ? <InputCell bankNote={props.bankNote} column="rolni" value={props.rolni.toString()} changed={props.changeTextHandler} /> : <View style={style.cell}></View>}
                {props.hasOwnProperty('bontott') ? <InputCell bankNote={props.bankNote} column="bontott" value={props.bontott.toString()} changed={props.changeTextHandler} /> : <View style={style.cell}></View>}
                {props.hasOwnProperty('kassza') ? <InputCell bankNote={props.bankNote} column="kassza" value={props.kassza.toString()} changed={props.changeTextHandler} /> : <View style={style.cell}></View>}
            </Fragment>
        );
    }

    return (
        <View style={style.row}>
            {cells}
        </View>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        changeTextHandler: (bankNote, column, value) => dispatch({
            type: actionTypes.CHANGE_FIELD_VALUE,
            payload: { bankNote, column, value }
        }),
    }
}

export default connect(null, mapDispatchToProps)(row);
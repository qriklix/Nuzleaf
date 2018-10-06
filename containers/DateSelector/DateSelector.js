import React, { Component } from 'react';
import { Button, DatePickerAndroid, Text, View } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';

import style from './DateSelectorStyle';
import * as actionTypes from '../../store/actions';

class DateSelector extends Component {
    onPress = async () => {
        try {
            const { action, year, month, day } = await DatePickerAndroid.open({
                date: moment(this.props.date).toDate()
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                this.props.onDateChange(year, month, day);
            }
        } catch ({ code, message }) {
            console.warn('Cannot open date picker', message);
        }
    }

    render() {
        const bankNotes = Object.keys(this.props.data);

        const sum = bankNotes.reduce((acc, bankNote) => {
            return acc + +this.props.data[bankNote].sum;
        }, /*-40000*/0);

        return (
            <View style={style.dateSelector}>
                <Button
                    style={style.dateSelectorButton}
                    onPress={this.onPress}
                    title={'Dátum: ' + this.props.date}
                    color="#841584"
                />
                <Button
                    style={style.dateSelectorButton}
                    title={'Összeg: ' + sum.toString()}
                    color="#fa8072"
                    onPress={() => { }}
                />
                <Text
                    style={style.deleteButton}
                    onPress={() => this.props.onResetCalculator()}> ✘
                </Text>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDateChange: (y, m, d) => dispatch({
            type: actionTypes.CHANGE_DATE,
            payload: { y: y, m: m, d: d }
        }),
        onResetCalculator: () => dispatch({
            type: actionTypes.RESET_CALCULATOR
        }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DateSelector);
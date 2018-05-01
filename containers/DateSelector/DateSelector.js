import React, { Component } from 'react';
import { Button, DatePickerAndroid, Text, View } from 'react-native';
import { connect } from 'react-redux';

import styles from '../../config/styles';
import * as actionTypes from '../../store/actions';

class DateSelector extends Component {
    render() {
        onPress = async () => {
            try {
                const { action, year, month, day } = await DatePickerAndroid.open({
                    date: new Date()
                });
                if (action !== DatePickerAndroid.dismissedAction) {
                    this.props.onDateChange(year, month, day);
                }
            } catch ({ code, message }) {
                console.warn('Cannot open date picker', message);
            }
        }

        return (
            <View style={styles.dateSelector}>
                <Button
                    onPress={onPress}
                    title={this.props.date}
                    color="#841584"
                />
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DateSelector);
import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { connect } from 'react-redux';

import Row from './Row/Row';

import styles from '../../config/styles';

class Calculator extends Component {
    render() {
        const rows = Object.keys(this.props.data).map((cimlet, i) => {
            return (
                <Row key={i} cimlet={cimlet} />
            )
        }).reverse();

        return (
            <View style={styles.calculator}>
                <View style={styles.inputsCol}>
                    <ScrollView horizontal={true}>
                        <View style={styles.rowsContainer}>
                            {rows}
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.sumCol}>
                    <Text>Sum part...</Text>
                </View>
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
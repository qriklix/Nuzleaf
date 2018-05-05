import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { connect } from 'react-redux';

import Row from './Row/Row';
import RowHeader from './Row/RowHeader';

import style from './CalculatorStyle';

class Calculator extends Component {
    render() {
        const data = this.props.data;

        const bankNotes = Object.keys(this.props.data).reverse();
        const papers = bankNotes.splice(0, bankNotes.indexOf('200'));
        const coins = bankNotes.splice(bankNotes.indexOf('200'));

        const paperRows = papers.map((bankNote, i) => {
            return (
                <Row key={i} bankNote={bankNote} {...data[bankNote]} />
            )
        });

        const coinRows = coins.map((bankNote, i) => {
            return (
                <Row key={i} bankNote={bankNote} {...data[bankNote]} />
            )
        });

        return (
            <View style={style.calculator}>
                <View style={style.inputsCol}>
                    <ScrollView horizontal={true}>
                        <View style={style.rowsContainer}>
                            <RowHeader cells={['Címlet', null, null, 'Félre', 'Darab', 'Kassza']} />
                            {paperRows}
                            <RowHeader cells={['Címlet', 'Tálka', 'Félre', 'Rolni', 'Bontott', 'Kassza']} />
                            {coinRows}
                        </View>
                    </ScrollView>
                </View>
                <View style={style.sumCol}>
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
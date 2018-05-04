import { StyleSheet } from 'react-native';
import colors from './../../config/colors';

const styles = StyleSheet.create({
    calculator: {
        flex: 9,
        backgroundColor: colors.eggshell,
        alignSelf: 'stretch',
        flexDirection: 'row',
        flexWrap: 'wrap',
        display: 'flex',
    },
    inputsCol: {
        flex: 3,
        maxWidth: '75%',
        backgroundColor: colors.eggshell,
        padding: 8,
    },
    sumCol: {
        flex: 1,
        backgroundColor: colors.yrielYellow,
        padding: 8,
    },
    rowsContaienr: {
        flex: 1,
        flexDirection: 'row',
    }
});

export default styles;
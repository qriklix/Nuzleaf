import { StyleSheet } from 'react-native';
import theme from './../../config/theme';

const styles = StyleSheet.create({
    calculator: {
        flex: 9,
        alignSelf: 'stretch',
        flexDirection: 'row',
        flexWrap: 'wrap',
        display: 'flex',
    },
    inputsCol: {
        flex: 3,
        maxWidth: '75%',
        backgroundColor: theme.secondary.backgroundColor,
        padding: 8,
    },
    sumCol: {
        flex: 1,
        backgroundColor: theme.quaternary.backgroundColor,
        padding: 8,
    },
    rowsContaienr: {
        flex: 1,
        flexDirection: 'row',
    }
});

export default styles;
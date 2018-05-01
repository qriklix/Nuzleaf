import { StyleSheet } from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: colors.eggshell,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
    },
    dateSelector: {
        flex: 1,
        backgroundColor: colors.coral,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        padding: 8,
        borderColor: 'black',
        borderBottomWidth: 3,
    },
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
    }
});

export default styles;
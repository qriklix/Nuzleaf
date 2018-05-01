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
    },
    calculator: {
        flex: 9,
        backgroundColor: colors.eggshell,
        alignSelf: 'stretch',
        padding: 8,
    }
});

export default styles;
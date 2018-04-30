import { StyleSheet } from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
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
        alignSelf: 'stretch',
    },
    calculator: {
        flex: 9,
        backgroundColor: colors.eggshell,
        alignSelf: 'stretch',
    }
});

export default styles;
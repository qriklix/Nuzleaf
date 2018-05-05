import { StyleSheet } from 'react-native';
import theme from './../../config/theme';

const styles = StyleSheet.create({
    dateSelector: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        backgroundColor: theme.primary.backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        padding: 8,
        borderColor: 'black',
        borderBottomWidth: 3,
    },
    dateSelectorButton: {
        display: 'flex',
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
    }
});

export default styles;
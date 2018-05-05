import { StyleSheet } from 'react-native';
import theme from './../../config/theme';

const styles = StyleSheet.create({
    dateSelector: {
        flex: 1,
        backgroundColor: theme.primary.backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        padding: 8,
        borderColor: 'black',
        borderBottomWidth: 3,
    }
});

export default styles;
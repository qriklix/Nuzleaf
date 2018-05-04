import { StyleSheet } from 'react-native';
import colors from './../../config/colors';

const styles = StyleSheet.create({
    dateSelector: {
        flex: 1,
        backgroundColor: colors.coral,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        padding: 8,
        borderColor: 'black',
        borderBottomWidth: 3,
    }
});

export default styles;
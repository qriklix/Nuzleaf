import { StyleSheet } from 'react-native';
import theme from './../../../config/theme';

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        flex: 1
    },
    rowHeader: {
        backgroundColor: '#aed6f1'
    },
    cell: {
        width: 100
    },
    inputCell: {
        backgroundColor: '#bfe7f1',
        width: 80,
        textAlign: 'center'
    },
    deleteButton: {
        color: 'red',
        fontSize: 22,
    }
});

export default styles;
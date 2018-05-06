import * as actionTypes from './actions';
import moment from 'moment';

// init
const currentDate = moment().format("YYYY-MM-DD");

const fourFields = {
    sum: '0',
    darab: '0',
    kassza: '0',
    db: '0'
}

const fiveFields = {
    ...fourFields,
    felre: '0'
}

const sevenFields = {
    sum: '0',
    db: '0',
    talka: '0',
    felre: '0',
    rolni: '0',
    bontott: '0',
    kassza: '0'
}

const initialState = {
    theme: 'sky',
    date: currentDate,
    dataHistory: {},
    data: {
        20000: { ...fourFields },
        10000: { ...fourFields },
        5000: { ...fourFields },
        2000: { ...fourFields },
        1000: { ...fourFields },
        500: { ...fiveFields },
        200: { ...sevenFields },
        100: { ...sevenFields },
        50: { ...sevenFields },
        20: { ...sevenFields },
        10: { ...sevenFields },
        5: { ...sevenFields },
    },
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_DATE:
            const newDate = moment().set({
                'year': action.payload.y,
                'month': action.payload.m,
                'date': action.payload.d
            }).format("YYYY-MM-DD");

            const newData = state.dataHistory[newDate]
                ? JSON.parse(JSON.stringify(state.dataHistory[newDate]))
                : JSON.parse(JSON.stringify(initialState.data));

            return {
                ...state,
                date: newDate,
                data: newData,
                dataHistory: {
                    ...state.dataHistory,
                    [state.date]: JSON.parse(JSON.stringify(state.data))
                }
            };
        case actionTypes.CHANGE_FIELD_VALUE:
            const { bankNote, column, value } = action.payload;

            const newBankNoteData = {
                ...state.data[bankNote],
                [column]: value !== '' ? parseInt(value).toString() : '0'
            }

            const db = Object.keys(newBankNoteData).reduce((acc, col) => {
                let db = 0;

                if (col !== 'db' && col !== 'sum') {
                    if (col === 'rolni') {
                        switch (bankNote) {
                            case '200':
                                db += 40 * +newBankNoteData['rolni'];
                                break;
                            case '100':
                                db += 20 * +newBankNoteData['rolni'];
                                break;
                            default:
                                db += 50 * +newBankNoteData['rolni'];
                        }
                    } else {
                        db += +newBankNoteData[col];
                    }
                }

                return acc + db;
            }, 0);

            newBankNoteData.db = db.toString();
            newBankNoteData.sum = (db * +bankNote).toString();

            return {
                ...state,
                data: {
                    ...state.data,
                    [bankNote]: newBankNoteData
                }
            };
        default:
            return state;
    }

}

export default reducer;
import * as actionTypes from './actions';
import moment from 'moment';

// init
const currentDate = moment().format("YYYY-MM-DD");

const threeFields = {
    sum: 0,
    darab: 0,
    kassza: 0
}

const fourFields = {
    ...threeFields,
    felre: 0
}

const sixFields = {
    ...threeFields,
    talka: 0,
    rolni: 0,
    bontott: 0
}

const initialState = {
    date: currentDate,
    data: {
        20000: { ...threeFields },
        10000: { ...threeFields },
        5000: { ...threeFields },
        2000: { ...threeFields },
        1000: { ...threeFields },
        500: { ...fourFields },
        200: { ...sixFields },
        100: { ...sixFields },
        50: { ...sixFields },
        20: { ...sixFields },
        10: { ...sixFields },
        5: { ...sixFields },
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

            return {
                ...state,
                date: newDate
            };

        default:
            return state;
    }

}

export default reducer;
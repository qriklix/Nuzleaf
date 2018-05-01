import * as actionTypes from './actions';
import moment from 'moment';
import { LOAD, SAVE } from 'redux-storage';

// init
const currentDate = moment().format("YYYY-MM-DD");

const initialState = {
    date: currentDate
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            console.log(state);
            return {
                ...state
            }
        case SAVE: {
            console.log(action);
        }
        case actionTypes.CHANGE_DATE:
            const newDate = moment().set({
                'year': action.payload.y,
                'month': action.payload.m,
                'date': action.payload.d
            }).format("YYYY-MM-DD");

            return {
                ...state,
                date: newDate
            }

        default:
            return state;
    }
}

export default reducer;
import { 
    GET_MONTH_DATE_ARRAY,
    ADD_EVENT,
    SAVE_FETCHED_EVENTS,
} from './constants';

const INITIAL_STATE = {
    monthDateArray: [],
    events: [],
};

export function reducer ( state = INITIAL_STATE, action) {
    switch ( action.type ) {
        case GET_MONTH_DATE_ARRAY:
            const monthDateArrayTemp = action.payload.map(week => {
                return week.map(day => {
                    if (state.events.filter(element => element.dateText === day.dateText).length>0) {
                        day.events = [...state.events.filter(element => element.dateText === day.dateText)];
                    }
                    return day;
                })
            })
            return {
                ...state,
                monthDateArray: monthDateArrayTemp,
            };

        case ADD_EVENT:
            const monthDateArray = state.monthDateArray.map(week => {
                return week.map(day => {
                    if (day.dateText === action.payload.dateText) {
                        day.events = [ ...day.events, { ...action.payload.event, dateText: action.payload.dateText } ];
                    }
                    return day;
                })
            })
            const events = [ ...state.events, { ...action.payload.event, dateText: action.payload.dateText } ];
            return {
                ...state,
                monthDateArray,
                events,
            };

        case SAVE_FETCHED_EVENTS:
            const monthArray = state.monthDateArray.map(week => {
                return week.map(day => {
                    if (action.payload.filter(element => element.dateText === day.dateText).length>0) {
                        day.events = [...action.payload.filter(element => element.dateText === day.dateText)];
                    }
                    return day;
                })
            });
            return {
                ...state,
                monthArray,
                events: action.payload,
            };

        default: {
                return {
                    ...state
                }
            }

    };
};
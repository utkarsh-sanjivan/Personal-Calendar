import { 
    GET_MONTH_DATE_ARRAY,
    ADD_EVENT,
} from './constants';

export function getMonthDateArray(payload) {
    return {
        type: GET_MONTH_DATE_ARRAY,
        payload,
    }
}

export function addEvent(payload) {
    return {
        type: ADD_EVENT,
        payload,
    }
}
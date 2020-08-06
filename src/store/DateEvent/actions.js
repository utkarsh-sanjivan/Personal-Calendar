import { 
    GET_MONTH_DATE_ARRAY,
    ADD_EVENT,
    SAVE_FETCHED_EVENTS,
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

export function saveFetchedEvents(payload) {
    return {
        type: SAVE_FETCHED_EVENTS,
        payload,
    }
}
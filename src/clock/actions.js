import {
    CHANGE_DATE
} from './constants';

export function changeDate(date) {
    return {
        type: CHANGE_DATE,
        date: date
    };
}

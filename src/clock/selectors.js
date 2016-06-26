import { createSelector } from 'reselect';

export const feature = 'clock';

export const getDate = (state) => state[feature].date;

export const getTime = createSelector(
    getDate,
    (date) => format(date)
);

function format(date) {
    const yyyy = date.getFullYear(),
        mm = date.getMonth() + 1,
        dd = date.getDate(),
        hh = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds();

    return `${mm}/${dd}/${yyyy} ${hh}:${m}:${s}`;
}

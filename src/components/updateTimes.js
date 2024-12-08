import { fetchAPI } from '../utils/api';

/**
 * Updates the available times by fetching from the API based on the selected date.
 * @param {Date} selectedDate - The date selected by the user.
 * @param {Function} dispatch - The dispatch function to update the available times in the state.
 */
export function updateTimes(selectedDate, dispatch) {
    try {
        const availableTimes = fetchAPI(selectedDate);

        dispatch({ type: 'UPDATE_TIMES', payload: availableTimes });
    } catch (error) {
        console.error('Failed to fetch available times:', error);
        dispatch({ type: 'UPDATE_TIMES', payload: [] });
    }
}

export default updateTimes;

import { fetchAPI } from '../utils/api';

/**
 * Initializes the available booking times by fetching data for today's date.
 * @returns {Array}
 */
export const initializeTimes = () => {
    const today = new Date();
    return fetchAPI(today);
};

import { act } from '@testing-library/react';
import { initializeTimes } from './InitializeTimes';
import { fetchAPI } from '../utils/api';

jest.mock('../utils/api', () => ({
    fetchAPI: jest.fn(),
}));

describe('initializeTimes', () => {
    it('should call fetchAPI with today\'s date and return available times', () => {
        const today = new Date();
        const mockTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];
        fetchAPI.mockReturnValue(mockTimes);

        const result = initializeTimes();

        expect(fetchAPI).toHaveBeenCalledWith(today);
        expect(result).toEqual(mockTimes);
    });

    it('should return an empty array if fetchAPI fails', () => {
        fetchAPI.mockReturnValue([]);
        const result = initializeTimes();
        expect(result).toEqual([]);
    });
});

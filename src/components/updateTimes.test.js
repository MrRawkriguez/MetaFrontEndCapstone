import { act } from '@testing-library/react';
import { updateTimes } from './updateTimes';
import { fetchAPI } from '../utils/api';

jest.mock('../utils/api', () => ({
    fetchAPI: jest.fn(),
}));

describe('updateTimes', () => {
    it('should call fetchAPI with the given date and update available times', () => {
        const selectedDate = new Date('2024-12-01');
        const mockDispatch = jest.fn();
        const mockTimes = ['17:00', '18:00', '19:00'];
        fetchAPI.mockReturnValue(mockTimes);

        updateTimes(selectedDate, mockDispatch);

        expect(fetchAPI).toHaveBeenCalledWith(selectedDate);
        expect(mockDispatch).toHaveBeenCalledWith({ type: 'UPDATE_TIMES', payload: mockTimes });
    });

    it('should dispatch an empty array if fetchAPI fails', () => {
        const selectedDate = new Date('2024-12-01');
        const mockDispatch = jest.fn();
        fetchAPI.mockReturnValue([]);

        updateTimes(selectedDate, mockDispatch);

        expect(mockDispatch).toHaveBeenCalledWith({ type: 'UPDATE_TIMES', payload: [] });
    });
});

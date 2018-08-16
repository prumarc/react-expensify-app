import moment from 'moment';
import selectExpenses from '../../selectors/expenses.js';
import expenses from '../fixtures/expenses';

test('should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const restult = selectExpenses(expenses, filters);
    expect(restult).toEqual([expenses[2], expenses[1]])
});

test('should filter by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    const restult = selectExpenses(expenses, filters);
    expect(restult).toEqual([expenses[2], expenses[0]])
});

test('should filter by endDate', () => {   
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2, 'days')
    };
    const restult = selectExpenses(expenses, filters);
    expect(restult).toEqual([expenses[0], expenses[1]])
});

test('should filter by Date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const restult = selectExpenses(expenses, filters);
    expect(restult).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('should filter by Amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const restult = selectExpenses(expenses, filters);
    expect(restult).toEqual([expenses[1], expenses[2], expenses[0]]);
});

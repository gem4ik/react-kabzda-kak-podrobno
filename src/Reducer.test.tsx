import {reducer, StateType, ActionType } from './App';

describe('reducer', () => {
    let initialState: StateType;

    beforeEach(() => {
        initialState = { collapsed: true };
    });

    test('SET-COLLAPSED action should toggle the collapsed state', () => {
        const action: ActionType = { type: 'SET-COLLAPSED' };
        const newState = reducer(initialState, action);
        expect(newState.collapsed).toEqual(false);
    });

    test('reducer should return the initial state for unknown actions', () => {
        const action: ActionType = { type: 'UNKNOWN' };
        const newState = reducer(initialState, action);
        expect(newState).toEqual(initialState);
    });

    test('reducer should not modify the original state', () => {
        const action: ActionType = { type: 'SET-COLLAPSED' };
        const newState = reducer(initialState, action);
        expect(newState).not.toBe(initialState);
    });
});
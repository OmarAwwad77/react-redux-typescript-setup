import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { Todo } from '../actions';

// this interface makes sure that any reducer that u add
// returns an array of Todo
export interface StoreState {
	todos: Todo[];
}

export const reducers = combineReducers<StoreState>({
	todos: todosReducer
});

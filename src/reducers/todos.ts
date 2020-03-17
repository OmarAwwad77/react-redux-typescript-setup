import { Todo } from '../actions/index';
import { ActionTypes, Actions } from '../actions/types';

export const todosReducer = (state: Todo[] = [], action: Actions) => {
	switch (action.type) {
		case ActionTypes.fetchTodos:
			return action.payload;

		case ActionTypes.deleteTodo:
			return state.filter((todo: Todo) => todo.id !== action.payload);
		default:
			return state;
	}
};

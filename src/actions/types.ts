import { DeleteTodoAction, FetchTodosAction } from '../actions/index';

export enum ActionTypes {
	fetchTodos,
	deleteTodo
}

export type Actions = DeleteTodoAction | FetchTodosAction;

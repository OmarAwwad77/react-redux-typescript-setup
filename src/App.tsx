import React from 'react';
import { connect } from 'react-redux';
import { StoreState } from './reducers/index';
import { Todo, fetchTodos, deleteTodo } from './actions/index';

interface AppProps {
	todos: Todo[];
	fetchTodos: typeof fetchTodos;
	deleteTodo: typeof deleteTodo;
}

class App extends React.Component<AppProps> {
	componentDidMount() {
		this.props.fetchTodos();
	}

	renderList = (): JSX.Element[] => {
		return this.props.todos.map((todo: Todo) => (
			<li onClick={() => this.props.deleteTodo(todo.id)} key={todo.id}>
				{todo.title}
			</li>
		));
	};

	render() {
		console.log(this.props.todos);
		return (
			<div className='App'>
				<p>Todos: </p>
				<ul>{this.renderList()}</ul>
			</div>
		);
	}
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => ({
	todos
});

const mapDispatchToProps = (dispatch: any) => ({
	fetchTodos: () => dispatch(fetchTodos()),
	deleteTodo: (id: number) => dispatch(deleteTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

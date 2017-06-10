import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

let todo = [
	{
		id: 1,
		name: 'Title #1',
		date: '10-06-2017'
	},
	{
		id: 2,
		name: 'Title #2',
		date: '09-06-2017'
	},
	{
		id: 3,
		name: 'Title #3',
		date: '08-06-2017'
	},
]

class App extends React.Component {
	render() {
		return (
				<div>	
					<h1>Todo list</h1>
					<TodoList todo={this.props.todo}/>
				</div>
			)
	}
}

ReactDOM.render( <App todo={todo} />, document.getElementById( 'app' )); 
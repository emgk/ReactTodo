import React from 'react';
import ReactDOM from 'react-dom';

import Todo from './Todo';

class TodoList extends React.Component {
	render() {
		return (
			<div>
				<ul>
					{this.props.todo.map((todo)=> {
						return <Todo todo={todo} key={todo.id}/>
					})}
				</ul>
			</div>
			)
	}
}

// Need to export to make it able to import.
export default TodoList;

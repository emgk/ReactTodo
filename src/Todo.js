import React from 'react';
import ReactDOM from 'react-dom';

class Todo extends React.Component{
	render() {
		return(
				<li> 
					{this.props.todo.name} {this.props.todo.date}
				</li>
			)
	}
}


// Need to export to make it able to import.
export default Todo;
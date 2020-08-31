import React from "react";

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            todo: ""
        };
    }

    handleChanges = (e) => {
        this.setState({
            todo: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.todo);
    };

    handleClear = (e) => {
        e.preventDefault();
        this.props.clearTodos();
    };

    render() {
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                <input 
                    type="text"
                    name="todo"
                    value={this.state.todo}
                    onChange={this.handleChanges}
                />
                <button>Add Todo</button>
            </form>

            <button className= "clear-btn" onClick = {this.handleClear}>Clear Completed</button>
            </div>
        );
    }

}

export default TodoForm;
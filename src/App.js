import React from 'react';

import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"
import "./components/Todo.css"

const todosData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    super();
    this.state = {
      todos: todosData,
      toggleCompleted: () => {}, 
    };
  }

  toggleCompleted = (clickedTodoID) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === clickedTodoID) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      }) 
    });
  };


  addTodo = (task) => {
    const newTodo = {
      task: task,
      id: new Date(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };  

  clearTodos = (task) => {
    this.setState({
      todos: this.state.todos.filter(todo => 
        !(todo.completed)
      ) 
    });
  };
  

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Welcome to your Todo App!</h2>
        </div>
          <TodoList 
            todos = {this.state.todos}
            toggleCompleted = {this.toggleCompleted}
          />
          <TodoForm 
          addTodo = {this.addTodo} clearTodos={this.clearTodos}
          />
      </div>
    );
  }
}

export default App;

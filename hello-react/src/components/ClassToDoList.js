import React, { Component } from 'react';

export class TodoList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      tasks : [],
      counter : 0
    }

    this.addTask = this.addTask.bind(this)
  }

  addTask(task) {

    let tasks = this.state.tasks
    tasks.push(task)

    this.setState({
      tasks : tasks,
      counter : 1
    })



  }

  render() {
    return (
      <div>
      <h1>TodoList</h1>
      <TodoListInput addTaskCallback = {this.addTask} />
      <h2>Pending Items</h2>
      <TodoListItems tasks = {this.state.tasks} />
      </div>
    )
  }
}

export class TodoListInput extends Component {

  constructor(props) {
    super(props)

    this.addTaskButtonClicked = this.addTaskButtonClicked.bind(this)
  }

  addTaskButtonClicked() {

    // get the value out of the textbox
    let title = this.inputElement.value

    // create task object
    let task = {title : title}


    this.props.addTaskCallback(task)


  }

  render() {
    return (
    <div>
      <input ref={(element) => this.inputElement = element} type="text" />
      <button onClick={this.addTaskButtonClicked}>Add Task</button>
    </div>
    )
  }
}

export class TodoListItems extends Component {

  render() {

    let tasks = this.props.tasks

    let tasksListItems = tasks.map(function(task){
      return <li>{task.title}</li>
    })



    return (
    <ul>
      {tasksListItems}
    </ul>
    )
  }

}

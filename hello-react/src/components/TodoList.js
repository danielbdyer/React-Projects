import React, { Component } from 'react';

export class TodoList extends Component {

  constructor(props) {
    super(props)
    this.state = { // declaring a state to pass values between components through parent component
      tasks : [],
      finishedTasks: [],
      counter : 0
    }
    this.addTask = this.addTask.bind(this)
    this.finishTask = this.finishTask.bind(this)
  }

  addTask(newTask) {
    console.log(newTask)
    let tasks = this.state.tasks // object created on the model of the tasks array
    tasks.unshift(newTask) // pushing it into the newly created tasks array

    this.setState({ // 'this' refers to the above state, and the function works to set the new vaulues
      tasks : tasks, // implements the newly appended tasks into the state
      counter : 1 // could increment the counter
    })
  }

  finishTask(task) {
    let tasks = this.state.tasks
    let finishedTasks = this.state.finishedTasks

    let pendingTasks = tasks.filter(function(t){
      return t !== task
    })

    finishedTasks.unshift(task)

    this.setState({
      tasks : pendingTasks,
      finishedTasks: finishedTasks
    })

    console.log(this.state.tasks)
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoListInput addTaskCallback = {this.addTask}/> {/* passes addTask function to the */}
        <h2>Pending Items</h2>
        <TodoListItems tasks = {this.state.tasks} finishTaskCallback = {this.finishTask}/> {/* passes this state as into a property of the child component */}
        <h2>Completed Items</h2>
        <FinishedListItems finishedTasks = {this.state.finishedTasks} /> {/* passes this state as into a property of the child component */}
      </div>
    )
  }
}

export class TodoListInput extends Component {

  constructor(props) {
    super(props)
    this.addTaskButtonClicked = this.addTaskButtonClicked.bind(this) // only the functions need reference to find the scope
  }

  addTaskButtonClicked() {
    if (this.inputElement.value !== "") {
      let title = this.inputElement.value; // get the value out of the textbox
      let newTask = {
        title : title,
        key: Date.now()
      }; // create task object

      this.props.addTaskCallback(newTask);

      this.inputElement.value = "";
    }
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

  constructor(props) {
    super(props)
    this.finishTaskButtonClicked = this.finishTaskButtonClicked.bind(this)
  }

  finishTaskButtonClicked(task,e) {
    this.props.finishTaskCallback(task)
    console.log(e.target.value)
  }

  render() {
    let tasks = this.props.tasks
    let tasksListItems = tasks.map(function(task){
      return <li key={task.key}>{task.title} <input type="checkbox" onClick={(e) => this.finishTaskButtonClicked(task,e)}/></li>
    }.bind(this))
    return (
    <ul>
      {tasksListItems}
    </ul>
    )
  }

}

export class FinishedListItems extends Component {

  render() {
    if (this.props.finishedTasks !== "") {
    let finishedTasks = this.props.finishedTasks
    let finishedTasksListItems = finishedTasks.map(function(task){
      return <li key={task.key}>{task.title}</li>
    })
    return (
    <ul>{finishedTasksListItems}</ul>
    )
    }
  }

}

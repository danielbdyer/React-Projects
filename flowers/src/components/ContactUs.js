
import React, { Component } from 'react';

export class ContactUs extends Component {

  constructor(props) {
    super(props)

    this.state = {
      title : ''
    }

    this.handleChange = this.handleChange.bind(this)

  }

  handleSubmit(event) {

    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(this.state),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }

    })
    // do not submit the form
    event.preventDefault()
  }

  // title textbox
  handleChange(event) {

    let value = event.target.value
    let name = event.target.name

    if(name === "userId") {
      value = parseInt(value, 10)
    }

    console.log("for textbox with the name " +name + " you entered value " +value)

    this.setState({
      [name] : value
    })



    console.log(this.state)

  }

  render()  {
    return (
      <form onSubmit = {this.handleSubmit}>
       <input placeholder='title' name="title" onChange = {this.handleChange} type="text" />
       <input placeholder='body' name="body" onChange={this.handleChange} type="text" />
       <input placeholder='userId' name="userId" type="text" onChange={this.handleChange} />
       <input type="submit" />
      </form>
    )
  }


}

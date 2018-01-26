import React, { Component } from 'react';
import seedpackage from '../seedpackage.png';


export class FlowerCRUD extends Component {
  constructor(props){
    super(props)

    this.state = {
      currentflowers: [],
      newflower: {
        name: null,
        description: null,
        imageURL: null
      }
    }

    this.APIurl = "https://flowers.vapor.cloud/flowers"
  }

  componentWillMount(){
    fetch(this.APIurl)
    .then(response => response.json())
    .then(json =>
      this.setState({
        currentflowers: json
      })
    );
  }

  render() {
    return (
      <div className="container">
      <div className="flowers-parent">
        <CurrentFlowers flowerarray={this.state.currentflowers}/>
        <NewFlower newflower={this.state.newflower}/>
      </div>
      <div className="flower-input">
        <NewFlowerInput newflower={this.state.newflower}/>
      </div>
    </div>
    )
  }
}

class CurrentFlowers extends Component {

  render(){
    console.log(this.props.flowerarray)
    if (this.props.flowerarray !== "") {
      let currentflowers = this.props.flowerarray;
      let flowerdivs = currentflowers.map(function(flowers, index) {
        return (
          <div className="flowers" key={index}>
            <img className="package" src={seedpackage}></img>
            <div className="overflow">
              <img className="flowerimg" src={flowers.imageURL}></img>
            </div>
            <div className="flowername flowernameheader">{flowers.name}</div>
            <div className="flowername flowernamefooter">{flowers.name}</div>
            <div className="flowerdescription">{flowers.description}</div>
          </div>
        );
      }.bind(this));
      return <div>{flowerdivs}</div>;
    }
  }
}
class NewFlower extends Component {
  render(){
    return null
  }
}
class NewFlowerInput extends Component {

  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (e) => {
    const thisnewflower = this.props.newflower
    let value = e.target.value
    let property = e.target.name

    thisnewflower[property] = value

    this.forceUpdate();
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

  render(){
    return (
      <form onSubmit = {this.handleSubmit}>
      <input type="text" name="name" placeholder="Flower Name" onChange={this.handleChange}></input>
      <input type="text" name="description" placeholder="Flower Description" onChange={this.handleChange}></input>
      <input type="text" name="imageURL" placeholder="Flower URL" onChange={this.handleChange}></input>
      <input type="submit" placeholder="Add New Flower"></input>
    </form>
    )
  }
}

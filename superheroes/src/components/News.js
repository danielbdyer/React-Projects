
import React, { Component } from 'react';

export class News extends Component {

  constructor(props) {
    super(props)

    this.state = {
      articles : []
    }

  }

  componentDidMount() {

    const API = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0cf790498275413a9247f8b94b3843fd'

    fetch(API)
    .then(
      response =>  response.json()
    ).then(
      json => this.setState({
        articles : json.articles
      })
    )

  }

  render() {

    let articlesList = this.state.articles.map(function(article,index){
      return <li key={index}><b>{article.title}</b> <p></p> {article.description} <p></p></li>
    })

    return (
      <ul>{articlesList}</ul>
    )
  }

}

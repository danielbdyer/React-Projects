import React, { Component } from "react";

export class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      movieresults: [],
      movieselection: []
    };

    this.apiSearch = this.apiSearch.bind(this)
    this.getMoreInfo = this.getMoreInfo.bind(this)
  }

  apiSearch(searchvar) {
    const apikey = "6fe893b2";
    const url = "http://www.omdbapi.com/?s=" + searchvar + "&apikey=" + apikey;

    fetch(url)
      .then(response => response.json())
      .then(json =>
        this.setState({
          movieresults: json.Search
        })
      );
  }

  getMoreInfo(imdbID) {
    const apikey = "6fe893b2"
    const url = "http://www.omdbapi.com/?i=" + imdbID + "&apikey=" + apikey;

    fetch(url)
      .then(response => response.json())
      .then(json =>
        this.setState({
          movieselection: json.Search
        })
      );
  }

  render() {
    return (
      <div className="searchParent">
        <SearchBar searchMovieCallback={this.apiSearch} />
        <SearchResults moreInfoCallback={this.getMoreInfo} movieresults={this.state.movieresults} />
        <MoreInfo selectedmovie={this.state.movieselection} />
      </div>
    );
  }
}

export class SearchBar extends Component {

  constructor(props) {
    super(props)
    this.searchMovieButtonClicked = this.searchMovieButtonClicked.bind(this)
  }

  searchMovieButtonClicked() {
    if (this.searchInput.value !== "") {
      let searchvar = this.searchInput.value;
      this.props.searchMovieCallback(searchvar)
    }
  }

  render() {
    return (
    <div>
      <input type="text" ref={(element) => this.searchInput = element} />
      <button onClick={this.searchMovieButtonClicked}>Search</button>
    </div>
    )
  }
}

export class SearchResults extends Component {

  constructor(props) {
    super(props)
    this.movieResultClicked = this.movieResultClicked.bind(this)
  }

  movieResultClicked(imdbID) {
    console.log(imdbID)
  }

  render() {
    if (this.props.movieresults !== "") {
      let movieresults = this.props.movieresults;
      console.log(movieresults);
      let movielist = movieresults.map(function(movie, index) {
        return (
          <li key={index}>
            <a onClick={(e) => this.movieResultClicked(movie.imdbID)}>{movie.Title}</a>
          </li>
        );
      }.bind(this));
      return <ul>{movielist}</ul>;
    }
  }
}

export class MoreInfo extends Component {
  render() {
    if (this.props.selectedmovie !== "") {
      let selectedmovie = this.props.selectedmovie
    }
    return null
  }
}

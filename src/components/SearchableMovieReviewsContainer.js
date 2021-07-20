import React, { Component } from 'react'
import 'isomorphic-fetch'
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '07BWyHwbnydG6cxPG6WH4N6XW8zKUTQk'
const URL =
  'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +
  `api-key=${NYT_API_KEY}`

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      searchTerm: '',
      reviews: []
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(URL + `&query=${this.state.searchTerm}`)
      .then((response) => response.json())
      .then((json) => this.setState({ reviews: json.results }))
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <div className='searchable-movie-reviews'>
        <h1>Search</h1>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input value={this.state.searchTerm} onChange={this.handleChange} />
          <button type='submit'>Search</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer

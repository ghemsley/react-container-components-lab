// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => {
  return (
    <ul className='review-list'>
      {props.reviews.map((review, i) => {
        return (
          <div className='review' key={i}>
            <h2>{review.headline}</h2>
            <p>{review.summary_short}</p>
          </div>
        )
      })}
    </ul>
  )
}

export default MovieReviews

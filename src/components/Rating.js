import React from 'react'
import ReactStars from "react-rating-stars-component";

const Rating = () => {
  return (
    <div>

      <ReactStars
      size={50}
      half={false}
      onChange={newRating => {
        console.log(newRating);
      }}
    />
    

       
      
    </div>
  )
}

export default Rating

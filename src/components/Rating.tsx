import React from 'react'
import StarRatings from 'react-star-ratings'

interface RatingProps {
  rating: number
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
    // const maxStars = 5;
    // const [ratings, changeRatings] = React.useState<any>(4.7)
  
    return (
      <div>
       <StarRatings
          rating={rating}
          starRatedColor="#FFCE54"
          // changeRating={changeRatings}
          // numberOfStars={5}
          name='rating'
        />
      </div>
    );
  };
  

export default Rating
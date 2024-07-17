import React from 'react';

import reviews from '../data/reviews';
import {
  ReviewPage,
  ReviewList,
  ReviewItem,
  ReviewButton,
  ReviewLink,
} from '../styles/Review';


const Review = () => {
  
  return (
    <ReviewPage>
      <h2>🍳 내가 직접 만들어본 요리 이야기</h2>
      <ReviewButton to="/review/write">글쓰기</ReviewButton>
      <ReviewList>
        {reviews.map((review) => (
          <ReviewItem key={review.id}>
            <ReviewLink to={`/review/${review.id}`}>
              <h3>{review.title}</h3>
              <p>작성자: {review.author}</p>
              <p>작성일: {review.date}</p>
            </ReviewLink>
          </ReviewItem>
        ))}
      </ReviewList>
    </ReviewPage>
  );
};

export default Review;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import reviews from '../data/reviews';
import {
  ReviewDetailPage,
  ReviewTitle,
  ReviewContent,
} from '../styles/ReviewDetail';
import axios from 'axios';

const ReviewDetail = () => {

  const [recipeInfo, setRecipeInfo] = useState([])

  const getInfo = () => {
    axios
    .get(
      `http://localhost:8080/api/recipes`
    )
    .then((res) => {
      setRecipeInfo(res.data)
    })
    .catch((err)=>{console.arror(err)})
  }

  useEffect(()=>{
    getInfo()
  },[])

console.log(recipeInfo)

  const { id } = useParams();
  const review = reviews.find((review) => review.id === parseInt(id));

  if (!review) {
    return <div>Review not found</div>;
  }

  return (
    <ReviewDetailPage>
      <ReviewTitle>{review.title}</ReviewTitle>
      <p>작성자: {review.author}</p>
      <p>작성일: {review.date}</p>
      <ReviewContent>{review.content}</ReviewContent>
    </ReviewDetailPage>
  );
};

export default ReviewDetail;

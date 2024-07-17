import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Recommend from '../pages/Recommend';
import Category from '../pages/Category';
import Ranking from '../pages/Ranking';
import RecipeDetail from '../pages/RecipeDetail';
import Review from '../pages/Review';
import ReviewDetail from '../pages/ReviewDetail';
import ReviewWrite from '../pages/ReviewWrite';
import Write from '../pages/Write';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import MyPage from '../pages/MyPage';
import SearchRecipes from '../pages/SearchRecipes';
import Edit from '../pages/Editform';

const RouterConfig = ({ searchResults, setIsLoggedIn, isLoggedIn }) => {

  const [userData, setUserData] = useState("")

  return (
  <Routes>
    <Route path="/" element={<Main userData={userData}/>} />
    <Route path="/recommend" element={<Recommend userData={userData}/>} />
    <Route path="/category" element={<Category searchResults={searchResults} userData={userData}/>} />
    <Route path="/ranking" element={<Ranking userData={userData}/>} />
    <Route path="/Recipedetail/:id" element={<RecipeDetail userData={userData}/>} />
    <Route path="/review" element={<Review userData={userData}/>} />
    <Route path="/review/:id" element={<ReviewDetail userData={userData}/>} />
    <Route path="/review/write" element={<ReviewWrite userData={userData}/>} />
    <Route path="/write" element={<Write userData={userData}/>} />
    <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUserData={setUserData} userData={userData} />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/mypage" element={<MyPage userData={userData} setUserData={setUserData} />} />
    <Route path="/search-results" element={<SearchRecipes searchResults={searchResults} />} />
    <Route path="/edit/:id" element={<Edit userData={userData} setUserData={setUserData}/>}/>
  </Routes>
  )
};

export default RouterConfig;

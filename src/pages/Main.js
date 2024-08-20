import React from 'react';
import '../styles/Main.css';
import mainImage from '../assets/main.gif'; // 이미지 파일 import

function Main() {

  return (
    <div>
      <div className="main-image-container">
        <img src={mainImage} alt="메인이미지" className="main-image" />
      </div>

    </div>
  );
}

export default Main;
import React from 'react';
import { SliderContainer, RecommendWrapper, SectionTitle, SubTitle } from '../styles/Recommend';
import image1 from '../assets/S1.jpg';
import image2 from '../assets/S2.jpg';
import image3 from '../assets/S3.jpg';
import image4 from '../assets/S4.jpg';
import image5 from '../assets/S5.jpg';
import image6 from '../assets/S6.jpg';
import image7 from '../assets/S7.jpg';

const getYoutubeThumbnail = (url) => {
  const videoId = url.split('v=')[1]?.split('&')[0];
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
};

function Recommend() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };

  const youtubeLinks = [
    'https://www.youtube.com/watch?v=HOfHK1c9RUU',
    'https://www.youtube.com/watch?v=NLQAEkuxqO4',
    'https://www.youtube.com/watch?v=sxMQViwIEUQ',
    'https://www.youtube.com/watch?v=DOzvFg3RvT0',
    'https://www.youtube.com/watch?v=HT7DA-M9yKc',
    'https://www.youtube.com/watch?v=6Mo36RUunhk',
    'https://www.youtube.com/watch?v=k3rpJlK8z9o'
  ];

  const snsLinks = [
    'https://m.post.naver.com/viewer/postView.naver?volumeNo=35458088&memberNo=56808127',
    'https://m.post.naver.com/viewer/postView.naver?volumeNo=37931657&memberNo=24082060&searchKeyword=%EB%A0%88%EC%8B%9C%ED%94%BC&searchRank=2',
    'https://m.post.naver.com/viewer/postView.naver?volumeNo=38105943&memberNo=32549856&searchKeyword=%EB%A0%88%EC%8B%9C%ED%94%BC&searchRank=4',
    'https://m.post.naver.com/viewer/postView.naver?volumeNo=37735623&memberNo=36529745&searchKeyword=%EB%A0%88%EC%8B%9C%ED%94%BC&searchRank=5',
    'https://m.post.naver.com/viewer/postView.naver?volumeNo=29807305&memberNo=32806001&searchKeyword=%EB%A0%88%EC%8B%9C%ED%94%BC&searchRank=8',
    'https://m.post.naver.com/viewer/postView.naver?volumeNo=18647259&memberNo=10710648&searchKeyword=%EB%A0%88%EC%8B%9C%ED%94%BC&searchRank=15',
    'https://m.post.naver.com/viewer/postView.naver?volumeNo=37737151&memberNo=2044761&searchRank=21'
  ];

  const snsImages = [image1, image2, image3, image4, image5, image6, image7];

  return (
    <RecommendWrapper>
      <SectionTitle>🍳 레시피샵이 추천하는 요리법</SectionTitle>
      <SubTitle>🥞 레시피샵의 추천 레시피</SubTitle>
      <SliderContainer {...settings}>
        <div>
          <img src="https://via.placeholder.com/800x400" alt="Slide 1" />
        </div>
        <div>
          <img src="https://via.placeholder.com/800x400" alt="Slide 2" />
        </div>
        <div>
          <img src="https://via.placeholder.com/800x400" alt="Slide 3" />
        </div>
        <div>
          <img src="https://via.placeholder.com/800x400" alt="Slide 4" />
        </div>
        <div>
          <img src="https://via.placeholder.com/800x400" alt="Slide 5" />
        </div>
        <div>
          <img src="https://via.placeholder.com/800x400" alt="Slide 6" />
        </div>
        <div>
          <img src="https://via.placeholder.com/800x400" alt="Slide 7" />
        </div>
      </SliderContainer>

      <SubTitle>🥂 유튜브 인기 레시피</SubTitle>
      <SliderContainer {...settings}>
        {youtubeLinks.map((link, index) => (
          <div key={index} style={{ padding: '0 10px' }}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img
                src={getYoutubeThumbnail(link)}
                alt={`Slide ${index + 1}`}
              />
            </a>
          </div>
        ))}
      </SliderContainer>

      <SubTitle>🥗 SNS 인기 레시피</SubTitle>
      <SliderContainer {...settings}>
        {snsLinks.map((link, index) => (
          <div key={index} style={{ padding: '0 10px' }}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img
                src={snsImages[index]}
                alt={`Slide ${index + 1}`}
              />
            </a>
          </div>
        ))}
      </SliderContainer>
    </RecommendWrapper>
  );
}

export default Recommend;
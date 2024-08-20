import styled from 'styled-components';

export const ReviewDetailPage = styled.div`
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: flex-start; /* 세로 중앙 정렬을 위쪽으로 변경 */
  height: 100vh; /* 화면 전체 높이 사용 */
  padding: 40px 20px 20px; /* 위쪽 패딩 추가 */
`;

export const ReviewCard = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  max-width: 600px; /* 카드 최대 너비 설정 */
  width: 100%; /* 카드 너비를 100%로 설정하여 중앙 정렬 */
  border: 1px solid #B0BA1C;
  
`;


export const ReviewTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
  border-bottom: 2px solid #DD6213; /* 제목 아래에 언더라인 추가 */
  padding-bottom: 10px; /* 언더라인과의 간격 조정 */
`;

export const ReviewContent = styled.div`
  font-size: 16px;
  margin-top: 20px;
`;

export const ReviewAuthor = styled.p`
  font-size: 16px; /* 기본 폰트 크기 */
`;

export const ReviewDate = styled.p`
  font-size: 12px; /* 더 작은 폰트 크기 */
  color: gray;
  margin-top: -5px; /* 작성자와 가까워지도록 마진 조정 */
  border-bottom: 1px solid #ccc; /* 작성 일자 아래에 언더라인 추가 */
  padding-bottom: 5px; /* 언더라인과의 간격 조정 */
`;

export const ReviewPic = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 10px;
  border-radius: 5px;
`;

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ReviewPage = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center; /* 중앙 정렬 */
`;

export const ReviewButtonContainer = styled.div`
  width: 100%;
  max-width: 600px; /* 리스트와 동일한 최대 너비 설정 */
  display: flex;
  justify-content: flex-end; /* 오른쪽 정렬 */
  margin-bottom: 20px;
`;

export const ReviewButton = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: #DD6213;
  color: white;
  text-decoration: none;
  border-radius: 5px;

  &:hover {
    background-color: #EC9736;
  }
`;

export const ReviewList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 600px; /* 버튼 컨테이너와 동일한 최대 너비 설정 */
  align-items: center; /* 리스트 항목 중앙 정렬 */
`;

export const ReviewItem = styled.div`
  background-color: #f8f9fa;
  border: 1px solid #B0BA1C;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
`;

export const ReviewLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: underline;
  }

  h3 {
    margin: 0;
    font-size: 18px;
  }

  p {
    margin: 5px 0 0;
  }
`;

import styled from 'styled-components';

export const RankingPage = styled.div`
  padding: 20px;
`;

export const RankingList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 가로 4개 */
  grid-gap: 40px; /* 간격을 더 넓게 조정 */
`;

export const RankingItem = styled.div`
  background-color: #f8f9fa;
  border: 1px solid #B0BA1C;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

export const RankingImage = styled.img`
  width: 230px;
  height: 280px; 
  border-radius: 10px;
  object-fit: fill;
  object-position: center;
`;

export const RankingDetails = styled.div`
  text-align: center;
  margin-top: 10px;

  h3 {
    margin: 10px 0;
    color: #DD6213;
  }

  p {
    margin: 5px 0;
  }
`;

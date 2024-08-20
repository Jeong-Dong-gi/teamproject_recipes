import styled from 'styled-components';

export const CategoryPage = styled.div`
  padding: 20px;
`;

export const Filters = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
  border: 1px solid #EC9736; /* 외부 라인 */
  border-radius: 5px; /* 둥근 모서리 */
  padding: 10px; /* 내부 여백 */
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column; /* 세로 정렬 */
  gap: 20px; /* 그룹 간의 간격 */
`;

export const FilterGroupTitle = styled.h3`
  margin-bottom: 10px;
`;

export const FilterGroupLabel = styled.label`
  display: flex;
  align-items: center;
  margin-right: 15px; /* 각 체크박스 사이의 간격 */
`;

export const FilterGroupInput = styled.input`
  margin-right: 5px;
`;

export const FilterGroupRow = styled.div`
  display: flex;
  flex-direction: row; /* 가로 정렬 */
  gap: 10px; /* 각 체크박스 사이의 간격 */
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

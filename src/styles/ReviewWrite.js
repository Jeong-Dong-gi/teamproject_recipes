import styled from 'styled-components';

export const ReviewWritePage = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center; /* 중앙 정렬 */
`;

export const ReviewForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 600px; /* 폼의 최대 너비 설정 */
`;

const SharedStyles = `
  padding: 8px;
  border: 1px solid #B0BA1C;
  border-radius: 6px;
  width: 100%;
  box-sizing: border-box; /* 패딩과 테두리를 포함한 너비 계산 */
`;

export const ReviewInput = styled.input`
  ${SharedStyles}
`;

export const ReviewTextarea = styled.textarea`
  ${SharedStyles}
  height: 250px;
  resize: vertical;
`;

export const ReviewButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end; /* 버튼 오른쪽 정렬 */
`;

export const ReviewButton = styled.button`
  padding: 8px;
  border: 1px solid #B0BA1C;
  border-radius: 6px;
  background-color: #DD6213;
  color: white;
  cursor: pointer;
  border: none;
  text-align: center;
  height: 40px;
  width: 100px; /* 버튼의 너비를 200px로 설정 */
  box-sizing: border-box; /* 패딩과 테두리를 포함한 너비 계산 */

  &:hover {
    background-color: #EC9736;
  }
`;

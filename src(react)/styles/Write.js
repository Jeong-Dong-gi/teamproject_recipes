import styled from 'styled-components';

export const WritePage = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center; /* 중앙 정렬 */
`;

export const Form = styled.form`
  width: 100%; /* Form의 너비를 100%로 설정 */
  max-width: 600px; /* Form의 최대 너비를 설정 */
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 왼쪽 정렬 */
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  width: 100%; /* Label의 너비를 100%로 설정 */
`;

export const Input = styled.input`
  width: 100%; /* input의 너비를 100%로 조정 */
  max-width: 600px; /* input의 최대 너비를 600px로 설정 */
  padding: 8px;
  margin: 5px;
  border: 1px solid #B0BA1C;
  border-radius: 4px;
`;

export const Textarea = styled.textarea`
  width: 100%; /* textarea의 너비를 100%로 조정 */
  max-width: 600px; /* textarea의 최대 너비를 600px로 설정 */
  padding: 8px;
  border: 1px solid #B0BA1C;
  border-radius: 4px;
  resize: vertical;
  height: 100px;
`;

export const Select = styled.select`
  width: 100%; /* select의 너비를 100%로 조정 */
  max-width: 200px; /* select의 최대 너비를 줄임 */
  padding: 8px;
  border: 1px solid #B0BA1C;
  border-radius: 4px;
`;

export const FormButtons = styled.div`
  display: flex;
  justify-content: flex-end; /* 오른쪽 정렬 */
  gap: 10px;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #DD6213;
  color: white;

  &:hover {
    background-color: #EC9736;
  }
`;

export const CancelButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #dc3545;
  color: white;

  &:hover {
    background-color: #c82333;
  }
`;

export const FormRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const AddButton = styled.button`
  margin-left: 10px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #DD6213;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #EC9736;
  }
`;

export const RemoveButton = styled.button`
  height: 30px;
  margin-left: 10px;
  padding: 0 16px;
  border: none;
  border-radius: 4px;
  background-color: #dc3545;
  color: white;
  cursor: pointer;
  white-space: nowrap; /* 텍스트를 한 줄로 표시 */

  &:hover {
    background-color: #c82333;
  }
`;

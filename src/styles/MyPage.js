import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MyPageContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

export const TabMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const TabButton = styled.button`
  background: none;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  border-bottom: ${(props) => (props.active ? '2px solid #000' : 'none')};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`;

export const CenterImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`;

export const RegisterButton = styled(Link)`
  padding: 10px 20px;
  background-color: #B0BA1C;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 16px;
`;

export const NicknameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const NicknameInput = styled.input`
  padding: 8px;
  border: 1px solid #DD6213;
  border-radius: 4px;
`;

export const SaveButton = styled.button`
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

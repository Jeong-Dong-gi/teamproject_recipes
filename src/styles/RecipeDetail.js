import styled from 'styled-components';

export const RecipeDetailPage = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

export const RecipeTitle = styled.h2`
  margin-top: 0;
  font-size: 2rem;
  text-align: center;
`;

export const RecipeImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const LikeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #DD6213;
  color: white;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #EC9736;
  }

  svg {
    font-size: 20px;
  }
`;

export const BookmarkButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #28a745;
  color: white;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #218838;
  }

  svg {
    font-size: 20px;
  }
`;

export const RecipeInfo = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  p {
    margin: 10px 0;
    font-size: 16px;

    strong {
      font-weight: bold;
    }
  }
`;

export const RecipeSection = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const RecipeContent = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h3 {
    margin-top: 0;
  }

  ul,
  ol {
    padding-left: 20px;
  }

  li {
    margin-bottom: 5px;
  }
`;

export const CommentsSection = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h3 {
    margin-top: 0;
  }
`;

export const CommentForm = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const CommentInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;

  &:focus {
    border-color: #DD6213;
    outline: none;
  }
`;

export const CommentButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #DD6213;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #EC9736;
  }
`;

export const CommentList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const CommentItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;

  p {
    margin: 0;
    flex: 1;
  }

  div {
    display: flex;
    gap: 10px;
  }
`;

export const CommentButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

export const EditButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #DD6213;
  color: white;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #EC9736;
  }
`;
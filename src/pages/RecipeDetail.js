import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  RecipeDetailPage,
  RecipeTitle,
  RecipeImage,
  RecipeContent,
  RecipeSection,
  LikeButton,
  ButtonGroup,
  BookmarkButton,
  RecipeInfo,
  CommentsSection,
  CommentForm,
  CommentInput,
  CommentButton,
  CommentList,
  CommentItem,
  EditButton,
} from "../styles/RecipeDetail";
import { FaThumbsUp, FaBookmark, FaRegBookmark } from "react-icons/fa";
import axios from "axios";

const RecipeDetail = ({ userData }) => {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState([]);

  const [recipe, setRecipe] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [cookingSteps, setCookingSteps] = useState([]);
  const [images, setImages] = useState([]);
  const [recipeAuthor, setRecipeAuthor] = useState([]);
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [bookMark, setBookMark] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [commentAuthor, setCommentAuthor] = useState("작성자1");
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editingCommentText, setEditingCommentText] = useState("");

  useEffect(() => {
    const fetchRecipeUser = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/recipes/${id}/user`,
          {
            method: "GET", // GET 요청으로 설정
            headers: {
              "Content-Type": "application/json",
              // 필요한 경우 추가적인 헤더를 여기에 설정할 수 있습니다.
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setRecipeAuthor(data);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };

    fetchRecipeUser();
  }, []);


  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/recipes/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setRecipe(data);

        setIngredients(data.ingredients);

        setCookingSteps(data.cookingSteps);

        setImages(data.photos);

        setComments(data.comments);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };

    fetchRecipe();
  }, [id, userData]);

  useEffect(() => {
    const fetchLikeStatus = async () => {
      try {
        if (!userData || !userData._links || !userData._links.self || !recipe || !recipe._links || !recipe._links.self) {
          return; // userData나 recipe가 없으면 무시
        }

        const storedLikeStatus = JSON.parse(localStorage.getItem('likeStatus'));
        const userId = userData._links.self.href.split('/').pop();
        const recipeId = recipe._links.self.href.split('/').pop();

        if (storedLikeStatus && storedLikeStatus.userId === userId && storedLikeStatus.recipeId === recipeId) {
          setLiked(storedLikeStatus.isLiked);
        }

        // 서버에서 실제 좋아요 수를 받아오는 요청
        const response = await fetch(`http://localhost:8080/api/recipes/${recipeId}/likes`);
        if (!response.ok) {
          throw new Error('Failed to fetch likes');
        }
        const data = await response.json();
        setLikes(data.likes);
      } catch (error) {
        console.error('Error fetching likes:', error);
      }
    };

    fetchLikeStatus();
  }, [recipe, userData]);


  const userRecipes = () => {
    if (!userData) {
      console.error("userData is undefined");
      return;
    }
  
    let userHref;
    if (userData._links && userData._links.self) {
      userHref = userData._links.self.href;
    } else {
      userHref = `http://localhost:8080/api/users/${userData.id}`;
    }
  
    const requestBody = {
      userID: userData.userID,
      username: userData.username,
      password: userData.password,
      email: userData.email,
    };
  
    if (userData.recipes) {
      requestBody.recipes = userData.recipes;
    } else if (userData._links && userData._links.recipes && userData._links.recipes.href) {
      requestBody._links = {
        recipes: {
          href: userData._links.recipes.href,
        },
      };
    }
  
    fetch(userHref, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((updatedUserData) => {
        console.log("updated successfully:", updatedUserData);
        setUserInfo(updatedUserData); // 업데이트된 사용자 데이터로 상태 업데이트
      })
      .catch((error) => {
        console.error("Error updating user data:", error);
      });
  };
  
  useEffect(() => {
    if (userData) {
      userRecipes();
    }
  }, [userData]);

  const navigate = useNavigate();

  const handleLikeClick = () => {
    if (userData !== "") { // userData가 비어있지 않으면 로그인 상태
      setLikes(likes + 1); // 클라이언트 상에서만 좋아요 카운트 업데이트
      // 서버에 좋아요 요청 보내는 부분은 생략
    } else {
      alert("로그인 후 이용 가능합니다."); // 로그인되지 않은 경우 경고 메시지 표시
    }
  };

  console.log(bookmarked)
  console.log(id)

  const handleBookmarkClick = () => {
    if (userData !== "") {
      const isCurrentlyBookmarked = bookmarked;
      const newBookmarkState = !isCurrentlyBookmarked;
      setBookmarked(newBookmarkState);
      updateBookmarkStatus(newBookmarkState);
    } else {
      alert("로그인 후 이용 가능합니다.");
    }
  };
  

  const updateBookmarkStatus = (isBookmarked) => {
    const userId = userInfo.id // 현재 로그인한 사용자의 ID
    const recipeId = recipe.id // 북마크할 레시피의 ID

    const url = `http://localhost:8080/api/users/${userId}/recipes/${recipeId}/bookmark`;

    const method = isBookmarked ? 'POST' : 'DELETE'; // 북마크 추가 또는 삭제에 따라 HTTP 메서드 선택

    fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            // 추가적인 필드나 데이터 전송이 필요한 경우 추가할 수 있음
          }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('북마크 상태 업데이트에 실패했습니다.');
        }
        console.log('북마크 상태 업데이트 성공');
        // 추가적인 클라이언트 측 로직이 필요한 경우 구현
        // localStorage.setItem('bookmarkStatus', JSON.stringify({ userId, recipeId, isBookmarked }));
    })
    .catch(error => {
        console.error('Error updating bookmark status:', error);
        // 오류 처리 로직 추가
    });
  };


  const handleCommentEdit = (comment, text) => {
    // 댓글 작성자와 아이디가 일치하는 경우 수정 가능
    if (comment.name === userData.username) {
      setEditingCommentId(comment.id);
      setEditingCommentText(text);
    } else {
      alert("수정할 권한이 없습니다.");
    }
  };

  // 유저 이름 받아오기
  const userName = () => {
    if (userData !== "") {
      setCommentAuthor(userData.username);
    }
  };

  useEffect(() => {
    userName();
  }, [userData]);

  const handleCommentDelete = (comment, commentuser) => {
    let cId = "";
    if (commentuser === commentAuthor) {
      if (comment && comment._links && comment._links.self) {
        cId = comment._links.self.href.match(/\d+$/)[0];
      } else if (comment && comment.id) {
        cId = comment.id;
      }
      axios
        .delete(`/api/comments/${cId}`)
        .then(() => {
          // 댓글 삭제 후 서버에서 새로운 댓글 목록을 가져와서 상태 업데이트
          axios
            .get(`http://localhost:8080/api/recipes/${id}/comments`)
            .then((response) => {
              if (
                response.data &&
                response.data._embedded &&
                response.data._embedded.comments
              ) {
                setComments(response.data._embedded.comments);
                console.log("Comment deleted successfully");
              } else {
                console.error("Invalid response format:", response);
              }
            })
            .catch((error) => {
              console.error("Error fetching comments:", error);
            });
        })
        .catch((error) => {
          console.error("Error deleting comment:", error);
        });
    } else {
      alert("삭제할 권한이 없습니다.");
    }
  };

  console.log(editingCommentId);
  console.log(`comments : ${comments}`);

  const handleCommentSubmit = async (e) => {
    // 로그인 후 댓글 가능
    if (userData === "") {
      alert("로그인 후 이용가능합니다.");
      return;
    }
    // 작성자를 저장하여 수정 가능 여부에 사용
    setCommentAuthor(userData.username);

    e.preventDefault();

    if (editingCommentId !== null) {
      // If editing existing comment
      console.log(Comment)
      try {
        const response = await fetch(
          `http://localhost:8080/api/comments/${editingCommentId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ text: editingCommentText }),
          }
        );
        if (!response.ok) {
          throw new Error("Failed to update comment");
        }
        const updatedComment = await response.json();
        setComments(
          comments.map((comment) =>
            comment.id === editingCommentId
              ? { ...comment, text: updatedComment.text }
              : comment
          )
        );
        setEditingCommentId(null);
        setEditingCommentText("");
      } catch (error) {
        console.error("Error updating comment:", error);
        alert("수정 권한이 없습니다.");
        setEditingCommentId(null);
        setEditingCommentText("");
      }
    } else {
      // If adding new comment
      try {
        const response = await fetch(
          `http://localhost:8080/api/comments/recipe/${id}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ text: newComment, name: commentAuthor }),
          }
        );
        if (!response.ok) {
          throw new Error("Failed to create comment");
        }
        const newCommentObj = await response.json();
        setComments([...comments, newCommentObj]);
        setNewComment("");
      } catch (error) {
        console.error("Error creating comment:", error);
      }
    }
    // 댓글 추가 및 수정 후 서버에서 새로운 댓글 목록을 가져와서 상태 업데이트
    axios
      .get(`http://localhost:8080/api/recipes/${id}/comments`)
      .then((response) => {
        if (
          response.data &&
          response.data._embedded &&
          response.data._embedded.comments
        ) {
          setComments(response.data._embedded.comments);
          console.log("Comment deleted successfully");
        } else {
          console.error("Invalid response format:", response);
        }
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
  };

  console.log(userData);

  const HandleEditPost = () => {
    // userData가 존재하지 않거나 userData.recipes가 존재하지 않으면 "로그인 해주세요" 경고 메시지 표시
    if (!userInfo || !userInfo.recipes) {
      alert("권한이 없습니다.");
      return;
    }

    // id를 정수로 변환
    const numericId = parseInt(id);

    // userData.recipes에서 해당 id와 일치하는 recipe를 찾기
    const recipeToEdit = userInfo.recipes.find(
      (recipe) => recipe.id === numericId
    );

    if (recipeToEdit) {
      console.log("수정할 레시피를 찾았습니다.");
      navigate(`/edit/${id}`);
    } else {
      alert("권한이 없습니다.");
    }
  };

  const HandleDeletePost = async () => {
    // userInfo가 존재하지 않거나 userInfo.recipes가 존재하지 않으면 "권한이 없습니다." 경고 메시지 표시
    if (!userInfo || !userInfo.recipes) {
      alert("권한이 없습니다.");
      return;
    }
  
    // id를 정수로 변환
    const numericId = parseInt(id, 10);
  
    // userInfo.recipes에서 해당 id와 일치하는 recipe를 찾기
    const recipeToDelete = userInfo.recipes.find(
      (recipe) => recipe.id === numericId
    );
  
    if (recipeToDelete) {
      try {
        // 레시피 삭제 API 호출
        await axios.delete(`/api/recipes/${numericId}`);
        alert("레시피가 삭제되었습니다.");
  
        // 페이지를 업데이트하거나, 삭제 후 페이지를 리다이렉션할 경우
        navigate('/Main');
      } catch (error) {
        console.error("레시피 삭제 중 오류 발생:", error);
        alert("레시피 삭제에 실패했습니다. 다시 시도해 주세요.");
      }
    } else {
      alert("레시피를 찾을 수 없습니다.");
    }
  }

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <RecipeDetailPage>
      <RecipeTitle>{recipe.name}</RecipeTitle>
      {images.map((image, index) => {
        const filename = image.photo.substring(
          image.photo.lastIndexOf("/") + 1
        );
        console.log(filename); // 파일 이름을 출력

        return (
          <RecipeImage
            key={index}
            src={`/static/files/${encodeURIComponent(filename)}`}
            alt={recipe.name}
          />
        );
      })}
      <ButtonGroup>
        <LikeButton onClick={handleLikeClick} disabled={userData === ""}>
          <FaThumbsUp /> {likes}
        </LikeButton>
        <BookmarkButton onClick={handleBookmarkClick} disabled={userData === ""}>
          {bookmarked ? <FaBookmark /> : <FaRegBookmark />}
        </BookmarkButton>
      </ButtonGroup>
      <RecipeInfo>
        <p>
          <strong>카테고리:</strong> {recipe.category}
        </p>
        <p>
          <strong>난이도:</strong> {recipe.level}
        </p>
        <p>
          <strong>요리 정보:</strong> {recipe.introduction}
        </p>
      </RecipeInfo>
      <RecipeSection>
        <h3>작성자: {recipeAuthor.username}</h3>
      </RecipeSection>
      <RecipeContent>
        <h3>재료</h3>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>
              {ingredient.amount} {ingredient.ingredient}
            </li>
          ))}
        </ul>
        <h3>요리 순서</h3>
        <ol>
          {cookingSteps.map((step, index) => (
            <li key={index}>
              <strong>Step {step.stepNumber}:</strong> {step.description}
            </li>
          ))}
        </ol>
      </RecipeContent>
      <EditButton onClick={HandleEditPost}>게시글 수정</EditButton>
      <EditButton onClick={HandleDeletePost}>게시글 삭제</EditButton>
      <CommentsSection>
        <h3>댓글</h3>
        <CommentForm onSubmit={handleCommentSubmit}>
          <CommentInput
            type="text"
            placeholder="댓글을 입력하세요..."
            value={editingCommentId !== null ? editingCommentText : newComment}
            onChange={(e) =>
              editingCommentId !== null
                ? setEditingCommentText(e.target.value)
                : setNewComment(e.target.value)
            }
            required
          />
          <CommentButton type="submit">
            {editingCommentId !== null ? "수정" : "입력"}
          </CommentButton>
        </CommentForm>
        <CommentList>
          {comments.map((comment) => {
            console.log(comment); // 댓글 객체 출력

            return (
              <CommentItem key={comment.id}>
                <p>
                  <strong>{comment.name}</strong>: {comment.text}
                </p>
                <div>
                  <CommentButton
                    onClick={() => handleCommentEdit(comment, comment.text)}
                  >
                    수정
                  </CommentButton>
                  <CommentButton
                    onClick={() => handleCommentDelete(comment, comment.name)}
                  >
                    삭제
                  </CommentButton>
                </div>
              </CommentItem>
            );
          })}
        </CommentList>
      </CommentsSection>
    </RecipeDetailPage>
  );
};

export default RecipeDetail;

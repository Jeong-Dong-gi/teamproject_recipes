import React, { useEffect, useState } from "react";
import Modal from "../components/modal/Modal";
import {
  MyPageContainer,
  TabMenu,
  TabButton,
  Content,
  CenterImage,
  RegisterButton,
  NicknameContainer,
  NicknameInput,
  SaveButton,
} from "../styles/MyPage";
import { Link } from "react-router-dom";
import axios from "axios";

const MyPage = ({ userData, setUserData }) => {
  const [activeTab, setActiveTab] = useState("레시피");
  const [image, setImage] = useState("https://via.placeholder.com/150");
  const [imagePreview, setImagePreview] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [bookMark, setBookMark] = useState([]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    const fetchBookmarks = async () => {
      if (userData && userData._links && userData._links.self && userData._links.self.href) {
        const userId = getUserIdFromUrl(userData._links.self.href);
        try {
          const response = await axios.get(`http://localhost:8080/api/users/${userId}/bookmark`);
          setBookMark(response.data);
        } catch (error) {
          console.error('Error fetching bookmarks:', error);
        }
      }
      if(userData && userData.id) {
        try {
          const response = await axios.get(`http://localhost:8080/api/users/${userData.id}/bookmark`);
          setBookMark(response.data);
        } catch (error) {
          console.error('Error fetching bookmarks:', error);
        }
      }
    };

    fetchBookmarks();
  },[]);

  // url에서 id만 가져오기
  const getUserIdFromUrl = (url) => {
    const lastSlashIndex = url.lastIndexOf('/');
    return url.substring(lastSlashIndex + 1);
  };

  const handleNicknameChange = (e) => {
    setUserData({ ...userData, username: e.target.value });
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const updateNickname = () => {
    if (!userData || !userData._links || !userData._links.self) {
      console.error("userData or _links.self is undefined");
      return;
    }

    fetch(userData._links.self.href, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((updatedUserData) => {
        setUserData(updatedUserData); // 업데이트된 사용자 데이터로 상태 업데이트
      })
      .catch((error) => {
        console.error("Error updating nickname:", error);
      });
  };

  useEffect(() => {
    if (userData && userData._links && userData._links.self) {
      updateNickname(); // userData가 유효할 때에만 updateNickname 함수 호출
    }
  }, []);

  const reUpdateNickname = () => {
    if (!userData || !userData.id) {
      alert("로그인을 해주세요")
      return;
    }

    fetch(`http://localhost:8080/api/users/${userData.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((updatedUserData) => {
        setUserData(updatedUserData); // 업데이트된 사용자 데이터로 상태 업데이트
        setIsEditing(false); // 수정 모드 종료
      })
      .catch((error) => {
        console.error("Error updating nickname:", error);
      });
  };

  const saveNickname = () => {
    reUpdateNickname();
  };

  const openModal = (tab) => {
    setActiveTab(tab);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const reviews = [
    {
      id: 1,
      title: "Great Recipe!",
      content: "I tried this recipe and it was amazing!",
    },
    {
      id: 2,
      title: "Not Bad",
      content: "The recipe was okay, but I had to adjust the seasoning.",
    },
    // 더 많은 요리 후기 추가
  ];

  const comments = [
    { id: 1, author: "User1", content: "This looks delicious!" },
    { id: 2, author: "User2", content: "Can’t wait to try this recipe." },
    // 더 많은 댓글 추가
  ];

  const bookmarks = [
    { id: 1, title: "Bookmark 1", description: "A bookmarked recipe." },
    { id: 2, title: "Bookmark 2", description: "Another bookmarked recipe." },
    // 더 많은 북마크 추가
  ];

  return (
    <MyPageContainer>
      <TabMenu>
        <TabButton
          onClick={() => openModal("레시피")}
          active={activeTab === "레시피"}
        >
          레시피
        </TabButton>
        <TabButton
          onClick={() => openModal("요리후기")}
          active={activeTab === "요리후기"}
        >
          요리후기
        </TabButton>
        <TabButton
          onClick={() => openModal("댓글")}
          active={activeTab === "댓글"}
        >
          댓글
        </TabButton>
        <TabButton
          onClick={() => openModal("북마크")}
          active={activeTab === "북마크"}
        >
          북마크
        </TabButton>
      </TabMenu>
      <Content>
        <CenterImage src={image} alt="profile" />
        <NicknameContainer>
          {isEditing ? (
            <NicknameInput
              type="text"
              value={userData.username}
              onChange={handleNicknameChange}
            />
          ) : (
            <h2>{userData.username}</h2>
          )}
          {isEditing ? (
            <SaveButton onClick={saveNickname}>저장</SaveButton>
          ) : (
            <SaveButton onClick={toggleEditing}>닉네임 수정</SaveButton>
          )}
        </NicknameContainer>
        <p>
          자랑하고 싶은 나만의 레시피! 공유하고 싶은 멋진 레시피를 올려 주세요.
        </p>
        <RegisterButton to="/write">레시피 등록하기</RegisterButton>
      </Content>
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        {activeTab === "레시피" && (
          <div>
            <h2>내가 작성한 레시피</h2>
            <ul>
              {userData.recipes &&
                userData.recipes.map((recipe) => (
                  <li key={recipe.id}>
                    <Link to={`/Recipedetail/${recipe.id}`}>
                    <h3>{recipe.name}</h3>
                    <p>{recipe.introduction}</p>
                  </Link>
                  </li>
                ))}
            </ul>
          </div>
        )}
        {activeTab === "요리후기" && (
          <div>
            <h2>내가 작성한 요리후기</h2>
            <ul>
              {reviews.map((review) => (
                <li key={review.id}>
                  <h3>{review.title}</h3>
                  <p>{review.content}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        {activeTab === "댓글" && (
          <div>
            <h2>내가 작성한 댓글</h2>
            <ul>
              {comments.map((comment) => (
                <li key={comment.id}>
                  <p>
                    <strong>{comment.author}</strong>: {comment.content}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
        {activeTab === "북마크" && (
          <div>
            <h2>내가 북마크한 레시피</h2>
            <ul>
              {bookMark.map((bookmark) => (
                <li key={bookmark.id}>
                <Link to={`/Recipedetail/${bookmark.id}`}> {/* 클릭 시 해당 RecipeDetail 페이지로 이동 */}
                  <h3>{bookmark.name}</h3>
                  <p>{bookmark.introduction}</p>
                </Link>
              </li>
              ))}
            </ul>
          </div>
        )}
      </Modal>
    </MyPageContainer>
  );
};

export default MyPage;

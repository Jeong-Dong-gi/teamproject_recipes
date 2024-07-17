import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  NavbarContainer,
  Logo,
  SearchBar,
  SearchSelect,
  SearchButton,
  AuthButtons,
  NavButton,
  BottomNav,
  NavList,
  NavItem,
} from "../styles/Navbar";
import {
  PiCookingPotFill,
  PiBooksDuotone,
  PiRankingFill,
  PiPenBold,
  PiMagnifyingGlassBold,
  PiFinnTheHumanFill,
  PiBreadBold,
  PiDoorBold,
} from "react-icons/pi";
import SearchRecipes from "../pages/SearchRecipes";
import axios from "axios";

const Navbar = ({
  setSearchResults,
  isLoggedIn,
  setIsLoggedIn,
  userData,
  setUserData,
}) => {
  const [input, setInput] = useState("");
  const [searchQuery, setSearchQuery] = useState({
    keyword: "",
    searchType: "",
  });
  const navigate = useNavigate();

  console.log(searchQuery);

  const handleSearch = () => {
    if (searchQuery.keyword !== "" && searchQuery.searchType !== "") {
      axios
        .get(
          `http://localhost:8080/api/recipes/search?keyword=${searchQuery.keyword}&searchType=${searchQuery.searchType}`
        )
        .then((response) => {
          setSearchResults(response.data);
          // navigate("/search-results");  // 검색 결과 페이지로 이동
        })
        .then(navigate("/search-results"))

        .catch((error) => {
          console.error("Error searching recipes:", error);
        });
    }
    else {
      alert("키워드와 타입을 입력해주세요")
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery({ ...searchQuery, [e.target.name]: e.target.value });
  };

  const handleSearchSubmit = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      setSearchQuery(input);
      navigate("/category");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <div>
      <NavbarContainer>
        <Logo to="/">LOGO</Logo>
        <SearchBar
          type="text"
          placeholder="Search recipes..."
          name="keyword"
          value={searchQuery.keyword}
          onChange={handleSearchChange}
          // onKeyDown={handleSearchSubmit}
        />
        <SearchSelect
          placeholder="searchType"
          name="searchType"
          value={searchQuery.searchType}
          onChange={handleSearchChange}
        >
          <option value="">옵션을 선택해주세요</option>
          <option value="name">레시피명</option>
          <option value="ingredient">재료</option>
        </SearchSelect>
        {/* <SearchRecipes /> */}
        <SearchButton
          // onClick={() => {
          //   if (searchQuery.keyword !== "" && searchQuery.searchType !== "") {
          //     handleSearch(); // 검색 함수를 호출합니다.
          //     // 검색 조건이 충족되면 Link로 이동하는 부분을 추가합니다.
          //     return (
          //       <NavItem>
          //         <Link to="/search-results">
          //           <PiMagnifyingGlassBold size={40} />
          //         </Link>
          //       </NavItem>
          //     );
          //   } else {
          //     alert("키워드와 타입을 입력해주세요");
          //     return null; // 이벤트 핸들러에서는 반환하는 JSX가 없어야 합니다.
          //   }
          // }}
          onClick={handleSearch}
        >
          <PiMagnifyingGlassBold size={40} />
        </SearchButton>
        <AuthButtons>
          {isLoggedIn ? (
            <>
              <NavButton to="/mypage" className="mypage-button">
                <PiFinnTheHumanFill size={40} />
              </NavButton>
              <NavButton
                as="button"
                className="logout-button"
                onClick={handleLogout}
              >
                <PiDoorBold size={40} />
              </NavButton>
            </>
          ) : (
            <>
              <NavButton to="/login" className="login-button">
                <PiFinnTheHumanFill size={40} />
              </NavButton>
              <NavButton to="/signup" className="signup-button">
                <PiBreadBold size={40} />
              </NavButton>
            </>
          )}
        </AuthButtons>
      </NavbarContainer>
      <BottomNav>
        <NavList>
          {/* <SearchButton
            onClick={() => {
              if (searchQuery.keyword !== "" && searchQuery.searchType !== "") {
                handleSearch(); // 검색 함수를 호출합니다.
                // 검색 조건이 충족되면 Link로 이동하는 부분을 추가합니다.
                return (
                  <NavItem>
                    <Link to="/search-results">
                      <PiMagnifyingGlassBold size={40} />
                    </Link>
                  </NavItem>
                );
              } else {
                alert("키워드와 타입을 입력해주세요");
                return null; // 이벤트 핸들러에서는 반환하는 JSX가 없어야 합니다.
              }
            }}
          >
            {/* <PiMagnifyingGlassBold size={40} />
          </SearchButton> */}
          {/* {searchQuery.keyword !== "" && searchQuery.searchType !== "" ? (
            <NavItem>
              <Link to="/search-results"><PiMagnifyingGlassBold size={40} /></Link>
            </NavItem>
          ): (
            <>
              {alert("키워드와 타입을 입력해주세요")}
            </>
          )} */}
          <NavItem>
            <Link to="/recommend">
              <PiCookingPotFill size={40} />
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/category">
              <PiBooksDuotone size={40} />
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/ranking">
              <PiRankingFill size={40} />
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/review">
              <PiPenBold size={40} />
            </Link>
          </NavItem>
        </NavList>
      </BottomNav>
    </div>
  );
};

export default Navbar;

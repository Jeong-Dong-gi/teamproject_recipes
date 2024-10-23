import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  WritePage,
  Form,
  FormGroup,
  Label,
  Input,
  Textarea,
  Select,
  FormButtons,
  SubmitButton,
  CancelButton,
  FormRow,
  AddButton,
  RemoveButton
} from "../styles/Write";

export default function Editform({ userData }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const userId = !userData ? alert("로그인을 해주세요") : userData.id;

  const [images, setImages] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [cookingSteps, setCookingSteps] = useState([]);
  const [recipe, setRecipe] = useState({
    name: "",
    introduction: "",
    category: "",
    amount: "",
    time: "",
    level: "",
    user: userId,
    cookingSteps: [],
    ingredients: [],
  });

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
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };

    fetchRecipe();
  }, [id]);

  const recipeChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const ingredientChange = (index, e) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = {
      ...newIngredients[index],
      [e.target.name]: e.target.value,
    };
    setIngredients(newIngredients);
  
    // recipe를 업데이트할 때도 newIngredients를 반영해야 합니다.
    setRecipe({
      ...recipe,
      ingredients: newIngredients, // 수정된 재료 목록을 반영
    });
  };
  
  const handleAddIngredient = () => {
    const newIngredient = {
      ingredient: "",
      amount: "",
    };
    setIngredients([...ingredients, newIngredient]);
    setRecipe({
      ...recipe,
      ingredients: [...ingredients, newIngredient], // 수정된 단계 목록을 반영
    });
  };
  
  const handleRemoveIngredient = (index) => {
    const newIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(newIngredients);
  
    // 재료 삭제 시에도 recipe를 업데이트해야 합니다.
    setRecipe({
      ...recipe,
      ingredients: newIngredients, // 수정된 재료 목록을 반영
    });
  };

  const stepChange = (index, e) => {
    const newSteps = [...cookingSteps];
    newSteps[index] = {
      ...newSteps[index],
      [e.target.name]: e.target.value,
    };
    setCookingSteps(newSteps);
  
    // recipe를 업데이트할 때도 newSteps를 반영해야 합니다.
    setRecipe({
      ...recipe,
      cookingSteps: newSteps, // 수정된 단계 목록을 반영
    });
  };
  
  const handleAddStep = () => {
    const newStep = {
      stepNumber: cookingSteps.length + 1,
      description: "",
    };
    setCookingSteps([...cookingSteps, newStep]);
  
    // recipe를 업데이트할 때도 newSteps를 반영해야 합니다.
    setRecipe({
      ...recipe,
      cookingSteps: [...cookingSteps, newStep], // 수정된 단계 목록을 반영
    });
  };
  
  const handleRemoveStep = (index) => {
    const newSteps = cookingSteps.filter((_, i) => i !== index);
    setCookingSteps(newSteps);
  
    // 단계 삭제 시에도 recipe를 업데이트해야 합니다.
    setRecipe({
      ...recipe,
      cookingSteps: newSteps, // 수정된 단계 목록을 반영
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("recipe", JSON.stringify(recipe)); // 레시피 데이터 추가

    // 새로운 이미지 파일 추가
    images.forEach((image) => {
      formData.append("images", image); // 새로운 이미지 파일 추가
    });

    fetch(`http://localhost:8080/api/recipes/${id}`, {
      method: "PUT",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update recipe");
        }
        return response.json(); // 서버에서 Recipe를 정상적으로 받으면 JSON으로 파싱
      })
      .then((data) => {
        navigate("/mypage"); // 수정 후 페이지 이동
      })
      .catch((err) => console.error("Failed to update recipe:", err));
  };

  const handleCancel = () => {
    navigate("/mypage"); // 취소 버튼 클릭 시 이동할 페이지로 이동
  };

  return (
    <WritePage>
      <h2>글 작성</h2>
      <Form
        onSubmit={handleUpdate} encType="multipart/form-data">
        <FormGroup>
          <Label>레시피 제목:</Label>
          <Input name="name" value={recipe.name} onChange={recipeChange} />
        </FormGroup>
        <FormGroup>
          <Label>요리 소개:</Label>
          <Textarea
            name="introduction"
            value={recipe.introduction}
            onChange={recipeChange}
          ></Textarea>
        </FormGroup>
        <FormGroup>
        <Label>요리 대표 사진:</Label>
          <Input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
            multiple
          />
        </FormGroup>
        <FormGroup>
          <Label>카테고리:</Label>
          <Select
            name="category"
            value={recipe.category}
            onChange={recipeChange}
            required
          >
            <option value="">카테고리를 선택하세요</option>
            <option value="한식">한식</option>
            <option value="일식">일식</option>
            <option value="중식">중식</option>
            <option value="양식">양식</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>요리 수준:</Label>
          <Select
            name="level"
            value={recipe.level}
            onChange={recipeChange}
            required
          >
            <option value="">요리 수준을 선택하세요</option>
            <option value="상">상</option>
            <option value="중">중</option>
            <option value="하">하</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>몇 인분:</Label>
          <Input
            placeholder="Amount"
            name="amount"
            value={recipe.amount}
            onChange={recipeChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>요리 시간:</Label>
          <Input
            placeholder="Time"
            name="time"
            value={recipe.time}
            onChange={recipeChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>재료:</Label>
          {recipe.ingredients.map((ingredient, index) => (
            <FormRow key={index}>
              <Input
                placeholder="Ingredient Name"
                name="ingredient"
                value={ingredient.ingredient}
                onChange={(e) => ingredientChange(index, e)}
              />
              <Input
                placeholder="Amount"
                name="amount"
                value={ingredient.amount}
                onChange={(e) => ingredientChange(index, e)}
              />
              <RemoveButton
                type="button"
                onClick={() => handleRemoveIngredient(index)}
              >
                삭제
              </RemoveButton>
            </FormRow>
          ))}
          <AddButton type="button" onClick={handleAddIngredient}>
            재료 추가
          </AddButton>
        </FormGroup>
        <FormGroup>
          <Label>요리 순서:</Label>
          {recipe.cookingSteps.map((step, index) => (
            <FormRow key={index}>
              <Input
                name="stepNumber"
                defaultValue={(step.stepNumber = index + 1)}
              />
              <Input
                placeholder="description"
                name="description"
                value={step.description}
                onChange={(e) => stepChange(index, e)}
              />
              <RemoveButton
                type="button"
                onClick={() => handleRemoveStep(index)}
              >
                삭제
              </RemoveButton>
            </FormRow>
          ))}
          <AddButton type="button" onClick={handleAddStep}>
            순서 추가
          </AddButton>
        </FormGroup>
        <FormButtons>
          <SubmitButton type="submit">작성 완료</SubmitButton>
          <CancelButton type="button" onClick={handleCancel}>
            취소
          </CancelButton>
        </FormButtons>
      </Form>
    </WritePage>
  );
}

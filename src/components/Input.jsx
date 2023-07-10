import { useState } from "react";
import styled from "styled-components";

const InputComponent = styled.div`
  width: 800px;
  margin: 20px auto;
  padding: 20px 20px 80px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
`

const Title = styled.h1`
  margin: 0;
`

const FormContainer = styled.div`
  margin-top: 20px;
`

const StyledInput = styled.input`
  width: 220px;
  height: 40px;
  font-size: 16px;
  margin: 0 10px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 2px solid #9c9c9c;
`

const SubmitButton = styled.button`
  width: 60px;
  height: 40px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  background-color: #75baff;
  cursor: pointer;

  &:active {
    background-color: #509be6;
  }
`

const Input = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("0");

  const onChangeName = (event) => {
    setName(event.target.value);
  }

  const onChangePrice = (event) => {
    let value = event.target.value;
    value = Number(value.replaceAll(",", ""));
    if(isNaN(value)) {
      setPrice("0");
    } else {
      const formatValue = value.toLocaleString("ko-KR");
      setPrice(formatValue);
    }
  }

  const onSubmitForm = (event) => {
    event.preventDefault();
    if (name === "" || price === "0") {
      alert("이름과 가격을 모두 입력해주세요.")
      return;
    }

    alert(`{ name: ${name}, price: ${price.replaceAll(",", "")}} }`);
  }

  return (
    <>
      <InputComponent>
        <div>
          <Title>Input</Title>
        </div>

        <FormContainer>
          <form onSubmit={onSubmitForm}>
            <label>이름</label>
            <StyledInput
              type="text"
              name="name"
              value={name}
              onChange={onChangeName}
            ></StyledInput>

            <label>가격</label>
            <StyledInput
              type="text"
              name="price"
              value={price}
              onChange={onChangePrice}
            ></StyledInput>

            <SubmitButton
              type="submit"
            >
              저장
            </SubmitButton>
          </form>
        </FormContainer>
      </InputComponent>
    </>
  )
}

export default Input
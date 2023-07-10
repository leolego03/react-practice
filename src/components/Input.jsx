import { useState } from "react";
import styled from "styled-components";

const InputComponent = styled.div`
  width: 800px;
  margin: 0 auto;
`

const FormContainer = styled.div`
  padding: 20px;
`

const StyledInput = styled.input`
  width: 220px;
  height: 40px;
  font-size: 16px;
  margin: 0 10px;
  box-sizing: border-box;
`

const SubmitButton = styled.button`
  width: 60px;
  height: 40px;
  font-size: 16px;
  border: none;
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
          <h1>Input</h1>
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
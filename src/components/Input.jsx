// import React from 'react'
// import * as S from "../style/Appstyle"
import { useState } from "react";
import "../App.css";

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
      <div>
        <h1>Input</h1>
      </div>

      <div className="Form-container">
        <form onSubmit={onSubmitForm}>
          <label>이름</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChangeName}
          ></input>

          <label>가격</label>
          <input
            type="text"
            name="price"
            value={price}
            onChange={onChangePrice}
          ></input>

          <button
            type="submit"
          >
            저장
          </button>
        </form>
      </div>
    </>
  )
}

export default Input
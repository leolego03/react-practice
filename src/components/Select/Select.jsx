import React, { useState } from "react";
import {
  SelectComponent,
  SelectOption1,
  SelectOption2,
  CustomOption,
  Selectdiv,
} from "./SelectStyle";
const Select = () => {
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");

  const options = [
    { value: "option1", label: "리액트" },
    { value: "option2", label: "노드" },
    { value: "option3", label: "스프링" },
    { value: "option4", label: "자바" },
    { value: "option5", label: "JS" },
  ];

  const handleSelectOption1 = (event) => {
    setSelectedOption1(event.target.value);
  };

  const handleSelectOption2 = (event) => {
    setSelectedOption2(event.target.value);
  };

  return (
    <SelectComponent>
      <h1 style={{ margin: "0" }}>Select</h1>
      <Selectdiv>
        <SelectOption1
          value={selectedOption1}
          onChange={handleSelectOption1}
          options={options}
        >
          {options.map((item) => (
            <CustomOption key={item.value} value={item.value}>
              {item.label}
            </CustomOption>
          ))}
        </SelectOption1>
        <SelectOption2
          value={selectedOption2}
          onChange={handleSelectOption2}
          options={options}
        >
          {options.map((option) => (
            <CustomOption key={option.value} value={option.value}>
              {option.label}
            </CustomOption>
          ))}
        </SelectOption2>
      </Selectdiv>
    </SelectComponent>
  );
};

export default Select;

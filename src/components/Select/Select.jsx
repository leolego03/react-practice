import React, { useState } from "react";
import { Selectdiv, SelectOption1, SelectOption2, CustomOption } from "./SelectStyle";
const Select = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    { value: "option1", label: "리액트" },
    { value: "option2", label: "노드" },
    { value: "option3", label: "스프링" },
    { value: "option4", label: "자바" },
  ];

  const handleSelectOption = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
      <Selectdiv>
        <SelectOption1 value={selectedOption} onChange={handleSelectOption} options={options}>
          {options.map((item) => (
            <CustomOption key={item.value} value={item.value}>
              {item.label}
            </CustomOption>
          ))}
        </SelectOption1>
        <SelectOption2 value={selectedOption} onChange={handleSelectOption} options={options}>
          {options.map((option) => (
            <CustomOption key={option.value} value={option.value}>
              {option.label}
            </CustomOption>
          ))}
        </SelectOption2>
      </Selectdiv>
  );
};

export default Select;

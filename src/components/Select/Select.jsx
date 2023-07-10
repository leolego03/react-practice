import React from "react";
import { SelectBox, Label, Option, SelectOptions } from "./SelectStyle";

const Select = () => {
  return (
    <div>
      <h1>Select</h1>
      <SelectBox>
        <Label>Select</Label>
        <SelectOptions>
          <Option>스프링</Option>
          <Option>자바</Option>
          <Option>리액트</Option>
          <Option>노드</Option>
        </SelectOptions>
        <SelectOptions>
          <Option>스프링</Option>
          <Option>자바</Option>
          <Option>리액트</Option>
          <Option>노드</Option>
        </SelectOptions>
      </SelectBox>
    </div>
  );
};

export default Select;

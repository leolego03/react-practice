import { styled } from "styled-components";

const SelectBox = styled.div`
  position: relative;
  width: 200px;
  padding: 8px;
  border: none;
  border-radius: 12px;
  align-self: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, .35);
  cursor: pointer;
  &::before {
    content: "⌵";
    position: absolute;
    top: 1px;
    right: 8px;
    color: #49c181;
    font-size: 20px;
  }
`

const Label = styled.label`
  font-size: 14px;
  margin-left: 4px;
  text-align: center;
`

const SelectOptions = styled.ul`
  position: absolute;
  list-style: nooe;
  top: 18px;
  left: 0;
  width: 100%;
  overflow: hidden;
  height: 90px;
  max-height: ${(props)=>(props.show ? "none" : 0)};
  padding: 0;
  border-radius: 8px;
  background-color: #222222;
  color: #fefefe;
`

const Option = styled.li`
  font-size: 14px;
  padding: 6px 8px;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #595959;
  }
`
export {SelectBox, Label, SelectOptions, Option}
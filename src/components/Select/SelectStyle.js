import { styled } from "styled-components";

const Selectdiv = styled.div`
  position: relative;
  overflow: hidden !important;
  height: 70px;
  width: 80%;
  z-index: 0;
`;

const SelectOption1 = styled.select`
  width: 150px;
  height: 40px;
  border-radius: 12px;
  border: 2px solid #b4e5ff;
  position: absolute;
  left: 10px;
  z-index: 2;
`;

const SelectOption2 = styled.select`
  margin-left: 170px;
  width: 150px;
  height: 40px;
  overflow: hidden;
  border-radius: 12px;
  border: 2px solid #b4e5ff;
  z-index: 1;
`;

const CustomOption = styled.option`
  width: 150px;
  border-radius: 12px;
  border: 2px solid #b4e5ff;
`;

export { Selectdiv, SelectOption1, SelectOption2, CustomOption };

import { styled } from "styled-components";

const SelectComponent = styled.div`
  height: 60px;
  width: 800px;
  margin: 0 auto;
  padding: 20px 20px 80px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
`;

const Selectdiv = styled.div`
  margin: 15px 0 0;
  position: relative;
  overflow: hidden;
`;

const SelectOption1 = styled.select`
  width: 150px;
  height: 40px;
  border-radius: 12px;
  border: 2px solid #b4e5ff;
  position: absolute;
`;

const SelectOption2 = styled.select`
  margin-left: 160px;
  width: 150px;
  height: 40px;
  border-radius: 12px;
  border: 2px solid #b4e5ff;
`;

const CustomOption = styled.option`
  width: 150px;
  border-radius: 12px;
  border: 2px solid #b4e5ff;
`;

export { SelectComponent, SelectOption1, SelectOption2, CustomOption, Selectdiv };

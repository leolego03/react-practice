import { styled } from "styled-components";

export const SelectContainer = styled.div`
  border: 3px solid #FFAAFF;
  margin: 0 10px 0 10px;
  height: 180px;
  overflow: hidden;
  margin-top: 20px; 
`

export const SelectOptoin1 = styled.select`
    border: 2px solid #84FB84;
    border-radius: 10px;
    margin: 0 auto 0 15px;
    height: 40px;
    width: 150px;

    position: absolute;
`
export const SelectOptoin2 = styled.select`
    border: 2px solid #84FB84;
    border-radius: 10px;
    width: 150px;
    height: 40px;
    margin: 0 auto auto 15px;

    position: absolute;
    left: 180px
`
export const Option1 = styled.option`
  font-size: 18px;
  font-weight: 800;
`
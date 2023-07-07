import React from 'react'
import * as S from "./SelectStyle"

const Select = () => {
  return (
    <S.SelectContainer>
        <h1>Select</h1>
        <S.Selectdiv>
          <S.SelectOptoin1>
            <option>스프링</option>
            <option>자바</option>
            <option>리액트</option>
            <option>노드</option>
          </S.SelectOptoin1>
          <S.SelectOptoin2>
            <option>스프링</option>
            <option>자바</option>
            <option>리액트</option>
            <option>노드</option>
          </S.SelectOptoin2>
        </S.Selectdiv>
    </S.SelectContainer>
  )
}

export default Select
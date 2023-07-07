import React from 'react'
import * as S from "./SelectStyle"

const Select = () => {
  return (
    <S.SelectContainer>
        <h1>Select</h1>
          <S.SelectOptoin1>
            <S.Option1>스프링</S.Option1>
            <S.Option1>자바</S.Option1>
            <S.Option1>리액트</S.Option1>
            <S.Option1>노드</S.Option1>
          </S.SelectOptoin1>
          <S.SelectOptoin2>
            <S.Option1>스프링</S.Option1>
            <S.Option1>자바</S.Option1>
            <S.Option1>리액트</S.Option1>
            <S.Option1>노드</S.Option1>
          </S.SelectOptoin2>
    </S.SelectContainer>
  )
}

export default Select
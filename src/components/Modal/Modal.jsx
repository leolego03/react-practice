import React, {useState} from 'react'
import * as S from "./ModalStyle"

const Modal = () => {
  const [firstModal, setFisrtModal] = useState(false)
  const [secondModal, setSecondModal] = useState(false)

  const onFirstModal = () => {
    setFisrtModal(!firstModal)
  }

  const onSecondModal = () => {
    setSecondModal(!secondModal)
  }

  const onOverlayClick = () => {
    setFisrtModal(true)
  }

  return (
    <div>
        <h1>Modal</h1>
        <button onClick={onFirstModal}>first modal</button>
        <button onClick={onSecondModal}>second modal</button>
        {firstModal && (
          <S.Modalcontainer>
            <S.OverlayButton onClick={onOverlayClick}></S.OverlayButton>
            <S.Modalcontent>
              <h4>리액트를 배웁시다</h4>
              <button onClick={onFirstModal}>닫기</button>
              <button>확인</button>
            </S.Modalcontent>
        </S.Modalcontainer>
        )}
        {secondModal && (
          <S.Modalcontainer>
            <S.OverlayButton onClick={onSecondModal}></S.OverlayButton>
            <S.Modalcontent>
              <h4>리액트를 배웁시다</h4>
              <button onClick={onSecondModal}>닫기</button>
              <button>확인</button>
            </S.Modalcontent>
        </S.Modalcontainer>
        )}
    </div>
  )
}

export default Modal
import React, {useState} from 'react'
import ReactDom from 'react-dom'
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

  return ReactDom.createPortal (
    <div>
        <h1>Modal</h1>
        <S.FirstButton onClick={onFirstModal}>open</S.FirstButton>
        <S.SecondButton onClick={onSecondModal}>open</S.SecondButton>
        {firstModal && (
          <S.Modalcontainer>
            <S.OverlayButton onClick={onOverlayClick}></S.OverlayButton>
            <S.Modalcontent>
              <h4>리액트를 배웁시다</h4>
              <S.CloseModalbutton onClick={onFirstModal}>닫기</S.CloseModalbutton>
              <S.ConfirmModalbutton>확인</S.ConfirmModalbutton>
            </S.Modalcontent>
        </S.Modalcontainer>
        )}
        {secondModal && (
          <S.Modalcontainer>
            <S.OverlayButton onClick={onSecondModal}></S.OverlayButton>
            <S.Modalcontent>
              <h4>리액트를 배웁시다</h4>
              <S.CloseModalbutton onClick={onSecondModal}>닫기</S.CloseModalbutton>
              <S.ConfirmModalbutton>확인</S.ConfirmModalbutton>
            </S.Modalcontent>
        </S.Modalcontainer>
        )}
    </div>,
    document.getElementById('portal')
  )
}

export default Modal
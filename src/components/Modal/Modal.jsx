import React, {useState} from 'react'
import ReactDom from 'react-dom'
import {ModalComponent, Modalcontainer, Modalcontent, OverlayButton, FirstButton, SecondButton, CloseModalbutton, ConfirmModalbutton} from "./ModalStyle"

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
    <ModalComponent>
        <h1 style={{margin: "0"}}>Modal</h1>
        <FirstButton onClick={onFirstModal}>open</FirstButton>
        <SecondButton onClick={onSecondModal}>open</SecondButton>
        {firstModal && (
          <Modalcontainer>
            <OverlayButton onClick={onOverlayClick}></OverlayButton>
            <Modalcontent>
              <h4>리액트를 배웁시다</h4>
              <CloseModalbutton onClick={onFirstModal}>닫기</CloseModalbutton>
              <ConfirmModalbutton>확인</ConfirmModalbutton>
            </Modalcontent>
        </Modalcontainer>
        )}
        {secondModal && (
          <Modalcontainer>
            <OverlayButton onClick={onSecondModal}></OverlayButton>
            <Modalcontent>
              <h4>리액트를 배웁시다</h4>
              <CloseModalbutton onClick={onSecondModal}>닫기</CloseModalbutton>
              <ConfirmModalbutton>확인</ConfirmModalbutton>
            </Modalcontent>
        </Modalcontainer>
        )}
    </ModalComponent>,
    document.getElementById('portal')
  )
}

export default Modal
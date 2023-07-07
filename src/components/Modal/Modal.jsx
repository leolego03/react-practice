import React, {useState} from 'react'
import * as S from "./ModalStyle"

const Modal = () => {
  const [firstModal, setFisrtModal] = useState(false)

  const onFirstModal = () => {
    setFisrtModal(!firstModal)
  }

  return (
    <div>
        <h1>Modal</h1>
        <button onClick={onFirstModal}>first modal</button>
        <button>second modal</button>
        {firstModal && (
          <S.Modalcontainer>
            <S.OverlayButton></S.OverlayButton>
            <S.Modalcontent>
              <h4>리액트를 배웁시다</h4>
              <button>닫기</button>
              <button>확인</button>
            </S.Modalcontent>
        </S.Modalcontainer>
        )}
    </div>
  )
}

export default Modal
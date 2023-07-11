import { styled } from "styled-components"

 const ModalComponent = styled.div`
  width: 800px;
  margin: 20px auto;
  padding: 20px 20px 80px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
`

 const Modalcontainer = styled.div`
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
`

 const Modalcontent = styled.div`
    background: #f1f1f1;
    padding: 15px 30px;
    width: 500px;
    height: 200px;
    border-radius: 3px;

    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
`
 const OverlayButton = styled.button`
    width: 100vw;
    height: 100vh;
    position: fixed;
    background: rgba(49,49,49,0.8);
`

 const FirstButton = styled.button`
    width: 120px;
    height: 40px;
    border: none;
    margin-right: 20px;
    border-radius: 10px;
    background-color: #50C2FF;
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
`
 const SecondButton = styled.button`
    width: 120px;
    height: 40px;
    border: 3px solid #7AFFCF;
    border-radius: 10px;
    font-size: 18px;
    background-color: white;
    cursor: pointer;
`

 const CloseModalbutton = styled.button`
    padding: 5px 7px;
    margin: 0 15px 0 0;
    border: 2px solid #3CC2FF;
    border-radius: 8px;
    cursor: pointer;
`

const ConfirmModalbutton = styled.button`
    padding: 5px 7px;
    border-radius: 8px;
    border: 2px solid #EB6464;
    cursor: pointer;
`

export { ModalComponent, Modalcontainer, Modalcontent, OverlayButton, FirstButton, SecondButton, CloseModalbutton, ConfirmModalbutton }
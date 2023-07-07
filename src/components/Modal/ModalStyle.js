import { styled } from "styled-components"

export const Modalcontainer = styled.div`
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
`

export const Modalcontent = styled.div`
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
export const OverlayButton = styled.button`
    width: 100vw;
    height: 100vh;
    position: fixed;
    background: rgba(49,49,49,0.8);
`
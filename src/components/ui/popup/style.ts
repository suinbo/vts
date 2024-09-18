import styled from "styled-components"

/** Popup */
export const PopupWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    box-shadow: 0 0 30px 4px rgba(199, 199, 199, 0.3);
    border-radius: 20px;
    padding: 46px;
    z-index: 1;
    width: 440px;
`

export const PopupInner = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    text-align: left;

    p {
        font-size: 17px;
    }
`
export const ButtonWrapper = styled.div`
    display: flex;
    gap: 20px;
`

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
    padding: 32px 40px 46px 40px;
    z-index: 1;
    width: 440px;
`

export const ImageFrame = styled.div`
    display: flex;
    justify-content: flex-end;

    img {
        cursor: pointer;
    }
`

export const Title = styled.div`
    p {
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 10px;
    }

    span {
        font-size: 14px;
    }
`

export const InputForm = styled.div`
    display: grid;
    grid-template-columns: 10fr 1fr;
    text-align: left;
    margin-top: 50px;

    img {
        cursor: pointer;
    }

    input {
        padding-bottom: 10px;
        text-align: left;
    }
`
export const Alert = styled.div`
    font-size: 13px;
    color: rgb(231, 0, 0);
    margin-top: 6px;
`

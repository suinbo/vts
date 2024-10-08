import styled from "styled-components"

export const Wrapper = styled.div`
    padding: 30px 36px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 20fr;
    align-items: center;
    height: 100vh;
`
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Body = styled.div`
    padding: 16px;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    height: 100%;
    align-items: center;
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    width: 900px;
    text-align: center;

    .notice {
        font-size: 17px;
        font-weight: 500;
        span {
            color: #d80000;
        }
    }
`
export const Navigator = styled.button`
    cursor: pointer;
    position: absolute;
    right: 60px;
    bottom: 60px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 2px solid #132d6f;
    background: #fff;
    filter: drop-shadow(0px 0px 30px rgba(183, 183, 183, 0.25));
`

export const Title = styled.div`
    width: 100%;
    padding-bottom: 30px;
    border-bottom: 2px solid #d1d8e4;

    h1 {
        font-size: 48px;
        margin-bottom: 16px;
        font-weight: 400;

        span {
            font-weight: 500;
        }
    }

    .sub-text {
        display: flex;
        justify-content: flex-end;
    }
`
export const Description = styled.div`
    border-radius: 26px;
    background: #fff;
    box-shadow: 0px 0px 66.2px -22px rgba(0, 0, 0, 0.13);
    padding: 30px 40px;
    width: 100%;
    text-align: left;

    ul {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    li {
        display: flex;
        align-items: baseline;
        gap: 18px;
        &::before {
            position: relative;
            top: -3px;
            content: "";
            width: 6px;
            height: 6px;
            background-color: #132d6f;
            border-radius: 50%;
        }
    }
`
export const Apply = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 14px;

    span {
        cursor: pointer;
        font-size: 16px;
        font-weight: 600;
        color: #132d6f;
    }

    svg {
        cursor: pointer;
        position: relative;
        top: 1px;
        transform: rotate(-90deg);
    }
`

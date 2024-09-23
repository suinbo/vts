import styled from "styled-components"

export const Wrapper = styled.div`
    padding: 48px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 10fr;
    align-items: center;
    height: 100vh;

    @media (max-width: 1600px) {
        padding: 20px 36px;
        grid-template-rows: 1fr 10fr;
    }
`
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
`

export const ListNav = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;

    > span:first-child {
        color: #132d6f;
        font-weight: 500;
    }

    > span:nth-child(2) {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        width: 30px;
        height: 30px;
        background-color: #ebeef4;
        cursor: pointer;

        svg {
            transform: rotate(-90deg);
        }
    }
`

export const ToolbarWrapper = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
`

export const Toolbar = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;

    > span {
        &:first-child {
            display: flex;
            width: 32px;
            height: 32px;
            padding: 5.333px 4.667px 5.333px 5.333px;
            justify-content: center;
            align-items: center;
        }
        &:last-child {
            font-size: 14px;
        }
    }
`

export const FormWrapper = styled.div`
    width: 100%;
    height: 460px;
    display: flex;
    flex-direction: column;
    background: #fff;
    box-shadow: 0px 0px 66.2px -22px rgba(0, 0, 0, 0.13);
    border-radius: 40px;
    padding: 40px 50px;
    text-align: left;
    justify-content: space-between;
`
export const FormItem = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 2fr;
    align-items: center;
`

export const FormTitle = styled.div`
    font-size: 22px;
    border-bottom: 2px solid #d1d8e4;
    padding-bottom: 14px;
`

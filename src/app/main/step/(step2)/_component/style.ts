import styled from "styled-components"

/** Side List */

export const SideListButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    width: 30px;
    height: 30px;
    background-color: #ebeef4;
    margin-left: auto;
    cursor: pointer;

    svg {
        transform: rotate(90deg);
    }
`

export const SideListTitle = styled.div`
    font-size: 18px;
    font-weight: 500;
`
export const SideListContent = styled.div`
    display: flex;
    flex-direction: column;

    .description {
        font-size: 14px;
        margin: 20px 0 16px 0;
    }
`
export const SideListItems = styled.div`
    background-color: #fff;
    border-radius: 20px;
    height: 100%;
`
export const Header = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
    border-bottom: 1px solid #d0d0d0;
    padding: 0 36px 16px 34px;
    font-weight: 500;
    font-size: 18px;
`
export const Item = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 20px 0 18px;
    gap: 18px;
    overflow-y: scroll;
    height: 300px;
    margin-top: 24px;

    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-thumb {
        height: 20%;
        border-radius: 2px;
        background: #e4e4e4;
    }

    .item-group {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        text-align: center;
        align-items: center;
        padding: 16px;
        border-radius: 16px;
        border: 2px solid #e0e6f3;
        background: #fff;
        font-size: 17px;

        .test-count {
            background: #f2f5fb;
            padding: 5px 18px;
            font-size: 15px;
            border-radius: 60px;
            font-weight: 500;
            cursor: pointer;
            text-align: center;
        }
    }
`
